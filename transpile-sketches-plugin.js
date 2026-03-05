const fs = require('fs');
const path = require('path');
const p5Globals = require('./p5-globals.js');

/**
 * Eleventy plugin to transpile p5.js sketches from global mode to instance mode
 * Handles JS files intelligently:
 * - Detects p5 sketches (has setup() and draw() functions)
 * - Transpiles p5 sketches to instance mode
 * - Passes through non-p5 JS files unchanged
 */

/**
 * Detect if a JS file is a p5 sketch
 * @param {string} sourceCode - The JS source code
 * @returns {boolean} true if it's a p5 sketch
 */
function isP5Sketch(sourceCode) {
  // Look for setup() and draw() function definitions
  const hasSetup = /function\s+setup\s*\(\s*\)/.test(sourceCode);
  const hasDraw = /function\s+draw\s*\(\s*\)/.test(sourceCode);
  
  return hasSetup && hasDraw;
}

function transpileSketch(sourceCode, sketchPath) {
  let transformed = sourceCode;

  // Generate simple ID from just the filename for the base sketch function
  const filename = sketchPath.split('/').pop().replace(/\.js$/, '');
  const sketchId = filename;

  // Fix window.windowWidth/Height - should be p5 properties
  transformed = transformed.replace(/window\.(windowWidth|windowHeight)/g, '$1');

  // Transform lifecycle functions
  transformed = transformed.replace(/function\s+preload\s*\(\s*\)/g, 'p.preload = function()');
  transformed = transformed.replace(/function\s+setup\s*\(\s*\)/g, 'p.setup = function()');
  transformed = transformed.replace(/function\s+draw\s*\(\s*\)/g, 'p.draw = function()');

  // Transform p5 property/constant accesses to use p. prefix
  // These are dynamic properties that change
  const dynamicProperties = [
    'frameCount', 'deltaTime', 'focused', 'width', 'height',
    'windowWidth', 'windowHeight', 'displayWidth', 'displayHeight',
    'mouseX', 'mouseY', 'pmouseX', 'pmouseY',
    'winMouseX', 'winMouseY', 'pwinMouseX', 'pwinMouseY',
    'movedX', 'movedY', 'mouseButton', 'mouseIsPressed',
    'keyIsPressed', 'key', 'keyCode',
    'accelerationX', 'accelerationY', 'accelerationZ',
    'pAccelerationX', 'pAccelerationY', 'pAccelerationZ',
    'rotationX', 'rotationY', 'rotationZ',
    'pRotationX', 'pRotationY', 'pRotationZ',
    'turnAxis', 'deviceOrientation',
    'touches', 'pixels', 'drawingContext', 'soundOut'
  ];

  dynamicProperties.forEach(prop => {
    // Match property access but not when already preceded by p.
    // Also avoid: obj.prop, declarations, object keys
    const regex = new RegExp(`(?<!p\\.)(?<![.])\\b${prop}\\b(?!\\s*[=:]|\\s*=>)`, 'g');
    transformed = transformed.replace(regex, (match, offset, string) => {
      // Check context to avoid replacing in declarations
      const before = string.substring(Math.max(0, offset - 30), offset);
      
      // Don't replace in variable declarations
      if (/(?:const|let|var)\s+$/.test(before)) {
        return match;
      }
      
      // Don't replace in object destructuring (must have { before the comma)
      if (/\{\s*[^}]*,\s*$/.test(before)) {
        return match;
      }
      
      return `p.${match}`;
    });
  });

  // Generate function aliases from p5Globals
  const functionAliases = p5Globals.functions
    .map(fn => `  const ${fn} = (...args) => p.${fn}(...args);`)
    .join('\n');

  // Generate constant aliases (true constants, not dynamic properties)
  const staticConstants = p5Globals.constants.filter(c => !dynamicProperties.includes(c));
  const constantAliases = staticConstants
    .map(constant => `  const ${constant} = p.${constant};`)
    .join('\n');

  // Store the sketch function directly in window.sketches
  const wrapped = `window.sketches = window.sketches || {};
window.sketches['${sketchId}'] = function(p) {
${functionAliases}
${constantAliases}

${transformed}
};`;

  return wrapped;
}

function walkDir(dir, callback) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filepath = path.join(dir, file);
    const stat = fs.statSync(filepath);
    
    if (stat.isDirectory()) {
      walkDir(filepath, callback);
    } else if (file.endsWith('.js')) {
      callback(filepath);
    }
  });
}

module.exports = function(eleventyConfig) {
  // Remove .js from template formats - we'll handle it manually
  eleventyConfig.ignores.add("**/*.js");
  
  // Custom JS file handling
  eleventyConfig.on('eleventy.after', () => {
    const srcPath = path.join(__dirname, 'src');
    const docsPath = path.join(__dirname, 'docs');
    
    if (!fs.existsSync(srcPath)) {
      return;
    }

    // Process all JS files in src
    walkDir(srcPath, (srcFilePath) => {
      // Skip plugin files and node_modules
      if (srcFilePath.includes('node_modules') || 
          srcFilePath.includes('transpile') || 
          srcFilePath.includes('p5-globals')) {
        return;
      }

      try {
        const source = fs.readFileSync(srcFilePath, 'utf8');
        const relativePath = path.relative(srcPath, srcFilePath);
        const destPath = path.join(docsPath, relativePath);
        
        // Ensure destination directory exists
        const destDir = path.dirname(destPath);
        if (!fs.existsSync(destDir)) {
          fs.mkdirSync(destDir, { recursive: true });
        }

        // Check if it's a p5 sketch
        if (isP5Sketch(source)) {
          // Transpile p5 sketches
          const transpiled = transpileSketch(source, relativePath);
          fs.writeFileSync(destPath, transpiled, 'utf8');
          console.log(`✓ Transpiled p5 sketch: ${relativePath}`);
        } else {
          // Passthrough copy non-p5 JS files
          fs.copyFileSync(srcFilePath, destPath);
          console.log(`✓ Copied JS file: ${relativePath}`);
        }
      } catch (err) {
        console.error(`✗ Error processing ${srcFilePath}:`, err.message);
      }
    });
  });
};

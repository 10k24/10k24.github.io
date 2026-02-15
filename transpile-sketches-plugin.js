const fs = require('fs');
const path = require('path');
const p5Globals = require('./p5-globals.js');

/**
 * Eleventy plugin to transpile p5.js sketches from global mode to instance mode
 * Runs after build is complete
 */

function transpileSketch(sourceCode) {
  let transformed = sourceCode;

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

  // Wrap in instance mode function with aliases
  const wrapped = `const sketchFunction = function(p) {
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
    } else if (file.endsWith('.js') && !file.includes('transpile') && !file.includes('p5-globals')) {
      callback(filepath);
    }
  });
}

module.exports = function(eleventyConfig) {
  eleventyConfig.on('eleventy.after', () => {
    const docsPath = path.join(__dirname, 'docs', 'projects');
    
    if (!fs.existsSync(docsPath)) {
      return;
    }

    walkDir(docsPath, (filePath) => {
      try {
        const source = fs.readFileSync(filePath, 'utf8');
        
        // Skip files that are already transpiled
        if (source.includes('const sketchFunction = function(p)')) {
          return;
        }

        const transpiled = transpileSketch(source);
        fs.writeFileSync(filePath, transpiled, 'utf8');
        console.log(`✓ Transpiled sketch: ${path.relative(__dirname, filePath)}`);
      } catch (err) {
        console.error(`✗ Error transpiling ${filePath}:`, err.message);
      }
    });
  });
};

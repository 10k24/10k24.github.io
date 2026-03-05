#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

/**
 * Transpile p5.js sketches from global mode to instance mode
 * Runs as build step before Eleventy output
 */

function transpileSketch(sourceCode) {
  let transformed = sourceCode;

  // Transform lifecycle functions
  transformed = transformed.replace(/function\s+preload\s*\(\s*\)/g, 'p.preload = function()');
  transformed = transformed.replace(/function\s+setup\s*\(\s*\)/g, 'p.setup = function()');
  transformed = transformed.replace(/function\s+draw\s*\(\s*\)/g, 'p.draw = function()');

  // Wrap in instance mode function
  const wrapped = `const sketchFunction = function(p) {
  ${transformed}
};`;

  return wrapped;
}

function processSketchFile(filePath) {
  try {
    const source = fs.readFileSync(filePath, 'utf8');
    const transpiled = transpileSketch(source);
    fs.writeFileSync(filePath, transpiled, 'utf8');
    console.log(`✓ Transpiled: ${filePath}`);
  } catch (err) {
    console.error(`✗ Error transpiling ${filePath}:`, err.message);
  }
}

// Find all sketch files in docs output
const sketchPattern = './docs/projects/**/*.js';
const sketchFiles = glob.sync(sketchPattern, {
  ignore: '**/node_modules/**'
});

console.log(`Found ${sketchFiles.length} sketch files to transpile`);
sketchFiles.forEach(processSketchFile);

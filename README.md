# 10k24.github.io

Static site for TEN THOUSAND IDEAS, TWENTY-FOUR HOURS, built with [Eleventy](https://www.11ty.dev/).

## p5.js Sketch Integration

This site uses a custom build system to seamlessly integrate p5.js sketches:

### Features

- **Automatic Transpilation**: Global mode p5.js sketches (from editor.p5js.org) are automatically converted to instance mode at build time
- **Intelligent JS Handling**: The build system detects p5.js sketches (by looking for `setup()` and `draw()` functions) and transpiles them, while passing through other JS files unchanged
- **Multi-Sketch Optimization**: Pages can include multiple sketches with p5.js loaded only once

### Usage

#### Single Sketch Page

Include a sketch anywhere in your Liquid template:

```liquid
{% include "_includes/partials/square-p5-sketch", sketch:"./your-sketch.js" %}
```

The p5.js library is automatically loaded for single sketches.

#### Multiple Sketches Per Page

For pages with multiple sketches, add `multiSketch: true` to the front matter:

```liquid
---
title: My Multi-Sketch Page
layout: base
multiSketch: true
---

<h1>Multiple Sketches</h1>

{% include "_includes/partials/square-p5-sketch", sketch:"/projects/sketch1/sketch1.js" %}
{% include "_includes/partials/square-p5-sketch", sketch:"/projects/sketch2/sketch2.js" %}
```

This loads p5.js once in the page head, improving performance.

### How It Works

1. **Detection**: The build system scans all `.js` files in `src/`
2. **Analysis**: Files with `function setup()` and `function draw()` are identified as p5.js sketches
3. **Transpilation**: P5 sketches are converted from global mode to instance mode:
   - Lifecycle functions wrapped: `function setup()` → `p.setup = function()`
   - P5 functions aliased: `createCanvas()` → `const createCanvas = (...args) => p.createCanvas(...args)`
   - Dynamic properties prefixed: `width` → `p.width`
4. **Output**: Transpiled sketches are wrapped in `const sketchFunction = function(p) { ... }`
5. **Instantiation**: Each sketch is instantiated with `new p5(sketchFunction, containerId)`

Non-p5 JS files are copied unchanged to the output directory.

## Development

```bash
npm install
npm run build      # Build site
npm run serve      # Build and serve with live reload
```

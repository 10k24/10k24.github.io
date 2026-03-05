const { Liquid } = require("liquidjs");
const { RenderPlugin } = require("@11ty/eleventy");
const transpileSketchesPlugin = require("./transpile-sketches-plugin.js");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(RenderPlugin);
    eleventyConfig.addPlugin(transpileSketchesPlugin);
    eleventyConfig.setInputDirectory("src");
    eleventyConfig.setOutputDirectory("docs");
    eleventyConfig.ignores.add("**/cover.liquid");

    eleventyConfig.setTemplateFormats([
        "liquid",

        "css",
        
        "png",
        "jpg",
        "svg",
        "ico",
        "mp4",
        "avif",
        "webp",
        "gif",
        "pdf",
        "mp4",

        "ttf",
        "webmanifest",
        "xml",
        "txt"
    ]);

    eleventyConfig.addPassthroughCopy("src/CNAME");

    eleventyConfig.setLiquidOptions({
        jsTruthy: true
    });

    const options = {
        root: ["./src"],
        extname: ".liquid",
        greedy: false // This is done for sitemap.txt, consider an alternative solution
    };
    eleventyConfig.setLibrary("liquid", new Liquid(options));
};

const { Liquid } = require("liquidjs");
const { RenderPlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(RenderPlugin);
    eleventyConfig.setInputDirectory("src");
    eleventyConfig.setOutputDirectory("docs");

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
        "js",
        "webmanifest",
        "xml",
        "txt"
    ]);

    eleventyConfig.addPassthroughCopy("src/CNAME");

    // TODO:
    // - sitemap.txt
    // - robots.txt
    // - feed.xml

    eleventyConfig.setLiquidOptions({
        jsTruthy: true
    });

    const options = {
        root: ["./src"],
        extname: ".liquid"
    };
    eleventyConfig.setLibrary("liquid", new Liquid(options));
};
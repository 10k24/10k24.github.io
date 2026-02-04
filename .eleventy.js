const { Liquid } = require("liquidjs");

module.exports = function (eleventyConfig) {
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
        "gif",
        "pdf",
        
        "mp4",

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
        jsTruthy: true,
    });

    const options = {

    };
    eleventyConfig.setLibrary("liquid", new Liquid(options));
};
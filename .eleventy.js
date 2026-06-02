const { Liquid } = require("liquidjs");
const { RenderPlugin } = require("@11ty/eleventy");
const transpileSketchesPlugin = require("./transpile-sketches-plugin.js");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(RenderPlugin);
    eleventyConfig.addPlugin(transpileSketchesPlugin);
    eleventyConfig.setInputDirectory("src");
    eleventyConfig.setOutputDirectory("docs");
    eleventyConfig.addCollection("projectsReversed", function(collectionApi) {
        const projects = collectionApi.getFilteredByTag("projects");
        const order = [
            "/projects/words-have-power/",
            "/projects/processing-native/",
            "/projects/clock/"
        ];
        return order.map(url => projects.find(p => p.url === url)).filter(Boolean);
    });

    eleventyConfig.ignores.add("**/cover.liquid");
    // eleventyConfig.ignores.add("**/ideas");

    eleventyConfig.setTemplateFormats([
        "liquid",
        "md",

        "css",
        
        "png",
        "jpg",
        "svg",
        "ico",
        "avif",
        "webp",
        "gif",
        "pdf",
        "mp4",
        "lottie",

        "ttf",
        "webmanifest",
        "xml",
        "txt"
    ]);

    eleventyConfig.addPassthroughCopy("src/CNAME");

    eleventyConfig.setLiquidOptions({
        jsTruthy: true
    });

    eleventyConfig.addFilter("isNotHidden", (page) => {
        const folder = page.page.inputPath.split('/').slice(0, -1).pop();
        return !folder.startsWith('_');
    });

    eleventyConfig.addShortcode("emailLink", function(email) {
        const display = email.replace("@", '<span class="alt-at">@</span>');
        return `<a href="mailto:${email}">${display}</a>`;
    });

    const options = {
        root: ["./src"],
        extname: ".liquid",
        greedy: false // This is done for sitemap.txt, consider an alternative solution
    };
    eleventyConfig.setLibrary("liquid", new Liquid(options));
};

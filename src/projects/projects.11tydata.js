module.exports = {
    eleventyComputed: {
        visible: data => !data.page.inputPath.includes("/_")
    }
};

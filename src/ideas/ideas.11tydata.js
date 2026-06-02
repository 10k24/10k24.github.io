module.exports = {
    eleventyComputed: {
        date: data => {
            const match = data.page.filePathStem.match(/^\/ideas\/(\d{4}-\d{2}-\d{2})-/);
            return match ? new Date(match[1]) : null;
        },
        ISODate: data => {
            if (!data.date) return '';
            return data.date.toISOString().split("T")[0];
        },
        visible: data => {
            const visible = data.page.inputPath.match(/^\.\/src\/ideas\/_/);
            console.log(data.page.inputPath, !visible);
            return !visible;
        }
    }
};
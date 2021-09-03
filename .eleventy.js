module.exports = eleventyConfig => {
    eleventyConfig.addPassthroughCopy("files")

    return {
        dir: {
            layouts: "layouts"
        }
    }
}

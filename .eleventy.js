module.exports = eleventyConfig => {
    eleventyConfig.addPassthroughCopy("styles")

    return {
        dir: {
            layouts: "layouts"
        }
    }
}

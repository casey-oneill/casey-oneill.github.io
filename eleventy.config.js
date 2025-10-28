export default async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
}

export const config = {
  dir: {
    input: "content",
    includes: "../_includes",
    data: "../_data",
  },
};

import { InputPathToUrlTransformPlugin } from "@11ty/eleventy";

export default async function (eleventyConfig) {
  // Watch CSS files
  eleventyConfig.addPassthroughCopy("css");

  // Official plugins
  eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);
}

export const config = {
  dir: {
    input: "content",
    includes: "../_includes",
    data: "../_data",
  },
};

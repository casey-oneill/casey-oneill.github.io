import { InputPathToUrlTransformPlugin } from "@11ty/eleventy";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default async function (eleventyConfig) {
  // Official plugins
  eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);
  eleventyConfig.addPlugin(eleventyImageTransformPlugin);

  // Copy additional files to the output folder
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("downloads");
}

export const config = {
  dir: {
    input: "content",
    includes: "../_includes",
    data: "../_data",
  },
};

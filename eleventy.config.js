import { InputPathToUrlTransformPlugin } from "@11ty/eleventy";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import { renderCard } from "./components/index.js";
import memoize from "memoize";

export default async function (eleventyConfig) {
  // Official plugins
  eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);
  eleventyConfig.addPlugin(eleventyImageTransformPlugin);

  // Copy additional files to the output folder
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("bundle.css");
  eleventyConfig.addPassthroughCopy("downloads");
  eleventyConfig.addPassthroughCopy("assets/favicons");

  // Add shortcodes
  eleventyConfig.addShortcode("card", memoize(renderCard));
}

export const config = {
  dir: {
    input: "content",
    includes: "../_includes",
    data: "../_data",
  },
};

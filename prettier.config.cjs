/** @type {import("prettier").Config} */
module.exports = {
  pluginSearchDirs: [__dirname],
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  endOfLine: "auto",
  htmlWhitespaceSensitivity: "strict",
};

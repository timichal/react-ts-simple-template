/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: "/",
    // public: { url: "/public", static: true },
  },
  optimize: {
    bundle: true,
    minify: true,
    target: "es2017",
  },
};

export default {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
  ],
  sourceType: "unambiguous",
  // plugins: [["@babel/plugin-transform-runtime", { exclude: /\.png$/ }]],
};

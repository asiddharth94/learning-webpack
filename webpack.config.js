const path = require("path");

module.exports = {
  // specify the entry point
  entry: "./src/index.js",
  // specify the filename and the directory which will be generated as a result
  output: {
    filename: "bundle.js",
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
    path: path.resolve(__dirname, "./dist"),
  },
  mode: "none",
};

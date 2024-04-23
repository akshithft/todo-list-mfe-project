const path = require("path");

module.exports = {
  entry: "./src/index.tsx", // Your entry point, normally 'src/index.js'
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "todoMFE.js", // Output file
    library: "todoMFE", // Name of your library
    libraryTarget: "umd", // Universal Module Definition for compatibility
    publicPath: "/",
    umdNamedDefine: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"], // If using TypeScript
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      // You can add more loaders here for other types of files like images, etc.
    ],
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
};

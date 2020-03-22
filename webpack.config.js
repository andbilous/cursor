module.exports = {
  mode:'development',
  entry: __dirname + "/src/app/index.js", // webpack entry point. Module to start building dependency graph
  output: {
    path: __dirname + '/build', // Folder to store generated bundle
    filename: 'bundle.js',  // Name of generated bundle after build
    publicPath: '/' // public URL of the output directory when referenced in a browser
  },
  module: {  // where we defined file patterns and their loaders
      rules: [ 
        {
           test: /\.(png|svg|jpg|gif)$/,
                   use: [
                     'file-loader',
                   ],
        },
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: [
            /node_modules/
          ]
        },
        {
          test: /\.(sass|scss|css)$/,
          use: [{
              loader: "style-loader" // creates style nodes from JS strings
          }, {
              loader: "css-loader" // translates CSS into CommonJS
          }, {
              loader: "sass-loader" // compiles Sass to CSS
          }]
        }
      ]
  },
};
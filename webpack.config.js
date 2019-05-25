module.exports = {
  entry: __dirname + '/client/src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public/dist'
  },
  module: {
    rules: [
      { 
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.(gif|svg|jpg|png)$/,
        loader: "file-loader",
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

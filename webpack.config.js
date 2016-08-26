module.exports = {
  entry: './src/index.jsx',
  output: {
    path: './public/scripts',
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,         // Match both .js and .jsx files
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-0'],
        plugins: ['transform-runtime', 'add-module-exports'],
      },
    }],
  },
};

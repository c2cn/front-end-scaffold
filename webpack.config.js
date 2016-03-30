var srcPrefix = './src/assets/js-src/';
module.exports = {
    entry: {
      'demo': srcPrefix + 'demo'
    },
    output: {
        'path': 'src/assets/js',
        filename: '[name].js'
    },
    module: {
        loaders: [ { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}]
    }
};

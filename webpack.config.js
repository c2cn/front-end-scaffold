var pathPrefix = "js/";
var srcJsPrefix = './src/assets/' + pathPrefix;
var distJsPrefix = 'assets/' + pathPrefix;
var entry = {};

function addEntry(entry, name) {
    entry[distJsPrefix + name] = srcJsPrefix + name;
}

addEntry(entry, 'demo/demo');

module.exports = {
    entry: entry,
    output: {
        'path': 'dist',
        filename: '[name].js'
    },
    module: {
        loaders: [ { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}]
    }
};

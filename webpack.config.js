const path = require('path');

module.exports = {
    entry: "./src/main.js",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, 'public')
    },
    mode: "development",
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: 3330,

    }
}

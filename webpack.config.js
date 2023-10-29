const path = require("path");
module.exports = {
    entry: {
        index: "./src/js/index.js",
        frase: "./src/js/frase.js"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist')
    }
};
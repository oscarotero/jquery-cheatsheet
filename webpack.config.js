"use strict";

const path    = require("path"),
      bower   = require("bower-webpack-plugin");

module.exports = {
    entry: {
        main: './main.js'
    },
    output: {
        filename: '[name].js'
    },
    plugins: [
        new bower({
            excludes: /\.css$/
        })
    ]
};

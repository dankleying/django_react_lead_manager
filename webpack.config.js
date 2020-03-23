module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,  // any js file
                exclude: /node_modules/,  // ignore node modules
                use: {
                    loader: "babel-loader"   // loader to transpile code
                }
            }
        ]
    }
}
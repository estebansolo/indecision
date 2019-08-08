// entry -> output

const path = require('path')

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public', 'scripts'),
        filename: 'bundle.js'
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                // loaders:[
                //     'babel-loader'
                // ]
                use: [
                    {
                      loader: 'babel-loader'
                    }
                  ]
            }
        ]
    },
    mode: 'development'
}

// Loader

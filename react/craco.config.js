const CopyPlugin = require("copy-webpack-plugin")
module.exports = {
    babel: {
        presets: ['@emotion/babel-preset-css-prop']
    },
    webpack: {
        plugins: {
            add: [
                new CopyPlugin({
                    patterns: [
                        {
                            from: 'node_modules/pdfjs-dist/cmaps/',
                            to: 'cmaps/'
                        },
                    ],
                }),
            ]
        }
    }

}
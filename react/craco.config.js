const CopyPlugin = require("copy-webpack-plugin")

const {addBeforeLoader, loaderByName} = require('@craco/craco')
const path = require('path')

const isWatch = process.argv.some((a) => a === '--watch')
const isWebpackDevServer = process.argv.some(
    (a) => path.basename(a) === 'webpack-dev-server'
)

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
        },
        configure: (webpackConfig) => {
            const {resolve} = webpackConfig

            // Resolve purescript extension
            resolve.extensions.push('.bcmap')

            // Allow imports outside of `src` folder for purescript dependencies
            webpackConfig.resolve.plugins = resolve.plugins.filter(
                ({constructor: c}) => !c || c.name !== 'ModuleScopePlugin'
            )

            // PureScript loader
            const bcmapLoader = {
                loader: 'file-loader',
                test: /\.bcmap$/,
                exclude: /node_modules/,
                query: {
                    src: ['src/**/*.bcmap'],
                    spago: true,
                    pscIde: true,
                    watch: isWebpackDevServer || isWatch
                }
            }

            // Append purs-loader before file-loader
            addBeforeLoader(webpackConfig, loaderByName('file-loader'), bcmapLoader)
            return webpackConfig
        },
    }, module: {
        loaders: [
            {
                test: /\.bcmap/,
                loader: 'file-loader?mimetype=application/octet-stream'
            }
        ]
    }

}
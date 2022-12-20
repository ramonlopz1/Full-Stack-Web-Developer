const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const modoDev = process.env.NODE_ENV !== 'production'
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {

    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    // configura os loaders dos arquivos (css, sass, png, jpg etc...)
    module: { 
        rules: [{
            test: /\.s?[ac]ss$/,  // regex: vai pesquisar arquivos css, sass ou scss
            use: [
                MiniCssExtractPlugin.loader,
                // 'style-loader', // Adiciona CSS via DOM (gera css através do js)
                'css-loader', // Interpreta @import, url()...
                'sass-loader',
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                "file-loader"
            ]
        }]
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    ecma: 6,
                }
            }),
            new MiniCssExtractPlugin() 
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "estilo.css" // Adiciona o css como arquivo no public (e n como js (como o style-loader faz))
        })
    ],
    devServer: {
        static: {
            directory: "./public"
        },
        compress: true,
        port: 9000
    },
}
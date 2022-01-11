const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const modoDev = process.env.NODE_ENV !== 'production'
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const path = require('path')

module.exports = {

    mode: modoDev ? 'development' : 'production',

    entry: './src/principal.js',



    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },



    



    module: { //configura o css
        rules: [{
            test: /\.s?[ac]ss$/,  // rejex: vai pesquisar arquivos css, sass ou scss
            use: [
                MiniCssExtractPlugin.loader,
                // 'style-loader', // Adiciona CSS a DOM injetando a tag <style>
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
            filename: "estilo.css" //nome do arquivo que será gerado a partir do import no arquivo principal.js
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
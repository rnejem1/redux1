const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: './index.js',
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({ 
            title: 'redux components', 
            template: './app-template.html'
        }),
        new CopyWebpackPlugin([
            { from: './components-templates.html', to: 'components-templates.html' },
            { from: 'node_modules/@webcomponents/webcomponents-loader.js', to: 'webcomponents-polyfills' },
            { from: 'node_modules/@webcomponents/webcomponents-hi.js', to: 'webcomponents-polyfills' },
            { from: 'node_modules/@webcomponents/webcomponents-hi-ce.js', to: 'webcomponents-polyfills' },
            { from: 'node_modules/@webcomponents/webcomponents-hi-sd-ce.js', to: 'webcomponents-polyfills' },
            { from: 'node_modules/@webcomponents/webcomponents-sd-ce.js', to: 'webcomponents-polyfills' },
            { from: 'node_modules/@webcomponents/webcomponents-lite.js', to: 'webcomponents-polyfills' }
        ]),
        new BrowserSyncPlugin({
          port: 2222,
          server: { baseDir: ['dist'] }
        })
    ],
    devtool: 'inline-source-map',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    }
};
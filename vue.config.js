const path = require("path");
function resolve(dir) {
    return path.join(__dirname, dir)
  }
module.exports = {
    publicPath: './',
    assetsDir: './',
    productionSourceMap: false,
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('tim', resolve('src/tim.js'))
    },
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'scss',
            patterns: [
                path.resolve(__dirname, './src/assets/css/base.scss')
            ]
        }
    }
}
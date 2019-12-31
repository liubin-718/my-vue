const path = require('path')
const resolve = dir => {
    return path.join(__dirname, dir)
}

module.exports = {
    chainWebpack: (config) => {
        config.entry.app = ['./src/main.js']
        config.resolve.alias
            .set('@', resolve('src'))

        config.module
            .rule('images')
            .use('image-webpack-loader')
            .loader('image-webpack-loader')
            .options({
                disable: true,
                quality: '65-80',
                speed: 4
            })
            .end()
    }
}
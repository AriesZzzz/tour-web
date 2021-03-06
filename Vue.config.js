const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}


module.exports = {
    publicPath: './',
    assetsDir: './',
    devServer: {
        proxy: {
            '/travel': {
                target: 'http://120.24.186.190:8080'
            }
        }
    },
    chainWebpack: (config) => {
        //修改文件引入自定义路径
        config.resolve.alias
            .set('@', resolve('/src/views'))
            .set('cmn', resolve('/src/common'))
            .set('cpn', resolve('/src/components'))
            .set('api', resolve('/src/api'))
            .set('store', resolve('/src/store'))
            .set('utils', resolve('/src/utils'))

    }

}

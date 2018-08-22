const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    lintOnSave: true,
    chainWebpack: (config)=>{
        config.resolve.alias
            .set('@style',resolve('src/assets/style'))
            .set('@components',resolve('src/components'))
            .set('@views',resolve('src/views'))
    },
    css: {
        loaderOptions: {
            less: {
              javascriptEnabled: true
            }
        }
    }
}

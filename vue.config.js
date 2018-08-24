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
            .set('@conf',resolve('config'))
            .set('@libs',resolve('src/libs'))
            .set('@api',resolve('src/api'))
    },
    css: {
        loaderOptions: {
            less: {
              javascriptEnabled: true
            }
        }
    }
}

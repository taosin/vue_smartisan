require('./check-versions')()

process.env.NODE_ENV = 'production'

var ora = require('ora')
var rm = require('rimraf')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.prod.conf')

var AliyunossWebpackPlugin = require('aliyunoss-webpack-plugin')

var spinner = ora('building for production...')
spinner.start()

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
    webpack(webpackConfig, function (err, stats) {
      spinner.stop()
      if (err) throw err
        process.stdout.write(stats.toString({
          colors: true,
          modules: false,
          children: false,
          chunks: false,
          chunkModules: false
        }) + '\n\n')

      console.log(chalk.cyan('  Build complete.\n'))
      console.log(chalk.yellow(
        '  Tip: built files are meant to be served over an HTTP server.\n' +
        '  Opening index.html over file:// won\'t work.\n'
        ))
      console.log(__dirname+'/../dist');
      var oss = new AliyunossWebpackPlugin({
        buildPath:__dirname+'/../dist',
        region: 'oss-cn-shanghai',
        accessKeyId: 'LTAIXaWrylXKF9Ez',
        accessKeySecret: 'VQJAS9B0w4YjJ9qXiXXw9erEgPSoWC',
        bucket: 'vue-cropper',
        deleteAll: true,
        generateObjectPath: function(filename) {
          return filename
        },
        getObjectHeaders: function(filename) {
          return {
            Expires: 6000
          }
        }
      });

      oss.apply()

      console.log(chalk.cyan('  upload complete.\n'))
    })
})

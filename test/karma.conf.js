
const webpack = require('../webpack.config.js')
module.exports = function(config) {
    config.set({
      basePath: '',
      port:1010,
      // 自动启用Chrome浏览器执行代码 karma-chrome-launcher
      browsers: ['Chrome'],
      // 告诉karma用的测试框架（mocha）和断言库 (karma-chai)
      frameworks: ['mocha','chai'],
      // 测试报告的显示格式（命令行内的显示格式）  karma-mocha-reporter
      // 测试覆盖率报告  karma-coverage
      reporters: ['spec', 'coverage'],
      //colors 报表中是否有颜色区分
      colors:true,
      // 将功能代码和测试代码加载到karma
      files: [
        'mochaDemo/**/*.spec.js'
      ],
      //排除文件，可以是正则
      exclude:["karma.conf.js"],
      //对指定文件的预处理
      preprocessors: {
        'mochaDemo/**/*.spec.js': ['webpack']
      },
      // webpack
      webpack: webpack,
      // 测试时忽略打包信息
      webpackMiddleware: {
        noInfo: true
      },
      //代理
      proxies: {
        '/': 'http://192.168.23.170:29548'
      },
      // 生成的覆盖率报告 配置项
      // coverageReporter: {
      //   type : 'html',
      //   dir : 'coverage/'
      // }
      coverageReporter: {
        dir: './coverage',
        reporters: [
          { type: 'lcov', subdir: '.' },
          { type: 'text-summary' } //在控制台输出摘要
        ]
      },
      // 检测文件变动 文件变动自动执行测试文件
      autoWatch: true,
      // 输出的日志级别
      // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
      logLevel: config.LOG_INFO,
      //是否依附浏览器运行
      singleRun:false,
      //并发数，同时支持多少个浏览器运行
      concurrency:Infinity
    });
  };
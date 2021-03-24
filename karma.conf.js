// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
module.exports = function (config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine', '@angular-devkit/build-angular', 'karma-typescript'],
      plugins: [
        require('karma-jasmine'),
        require('karma-chrome-launcher'),
        require('karma-jasmine-html-reporter'),
        require('karma-coverage-istanbul-reporter'),
        require('@angular-devkit/build-angular/plugins/karma'),
        require('karma-phantomjs-launcher'),
        require('karma-junit-reporter')
      ],
      client:{
        clearContext: false // leave Jasmine Spec Runner output visible in browser
      },
      coverageIstanbulReporter: {
        dir: require('path').join(__dirname, 'coverage'), reports: [ 'html', 'lcovonly' ],
        fixWebpackSourcePaths: true
      },
      files: [
        { pattern: "src/**/*.ts" }
      ],
      preprocessors: {
        "**/*.ts": ["karma-typescript"]
      },
     //reporters: ['progress', 'kjhtml'],
      //port: 9876,
      //colors: true,
      logLevel: config.LOG_DEBUG,
      //autoWatch: true,
      //browsers: ['Chrome'],
      //singleRun: false
      singleRun: true,
      reporters: ['dots', 'junit', 'progress', "karma-typescript"],
      browsers: ['PhantomJS'],
      junitReporter: {
      outputFile: 'test-results.xml'
    },
  })
}

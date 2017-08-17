var cooking = require('cooking');
var config = require('./config');

cooking.set({
  entry: './src/index.js',
  dist: './lib/',
  clean: false,
  template: false,
  format: 'cjs',
  moduleName: 'FEUI',
  extractCSS: 'style.css',
  extends: ['vue2', , 'less', 'autoprefixer'],
  alias: config.alias,
  externals: config.pkg
});

cooking.remove('output.publicPath');
cooking.add('output.filename', 'feui.common.js');
cooking.add('performance.hints', false);
cooking.add('loader.js.exclude', config.jsexclude);

module.exports = cooking.resolve();

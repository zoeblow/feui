/**
 * Build npm lib
 * Steps:
 * 1. 构建 JS 入口文件
 * 2. 构建每个组件对应的 [component].js
 * 3. 构建 feui-css
 * 4. 打包 JS 文件：feui.js && feui.min.js
 * 5. 生成每个组件目录下的 style 入口
 */

const chalk = require("chalk");
require("shelljs/global");

// 1. build entry
log("Starting", "build:entry");
exec("npm run build:file --silent");
log("Finished", "build:entry");

// 2. build [component].js
log("Starting", "build:component");
exec("npm run build:components --silent");
log("Finished", "build:component");

// 3. build feui-css
log("Starting", "build:feui-css");
exec("npm run build:feui-css --silent");
log("Finished", "build:feui-css");

// 4. build feui.js
log("Starting", "build:feui");
exec("npm run build:feui --silent");
log("Finished", "build:feui");

// 5. build style entrys
log("Starting", "build:style-entries");
exec("npm run build:style-entry --silent");
log("Finished", "build:style-entries");

// 6. build demo
// log('Starting', 'build demo');
// exec("npm run prod");
// log("Finished", "build demo");

// helpers
function log(status, action, breakLine) {
  const now = new Date();
  const clock = `${breakLine ? "\n" : ""}[${padZero(now.getHours())}:${padZero(
    now.getMinutes()
  )}:${padZero(now.getSeconds())}]`;
  console.log(
    `${chalk.gray(clock)} ${status} '${action ? chalk.cyan.bold(action) : ""}'`
  );
}

function padZero(num) {
  return (num < 10 ? "0" : "") + num;
}

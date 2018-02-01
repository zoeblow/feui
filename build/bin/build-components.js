/**
 * 编译 components 到 lib 目录
 */
const fs = require("fs-extra");
const path = require("path");
const compiler = require("vue-sfc-compiler");
const libDir = path.resolve(__dirname, "../../lib");
const srcDir = path.resolve(__dirname, "../../packages");
require("shelljs/global");

// 清空 lib 目录
fs.emptyDirSync(libDir);

// 复制 packages
fs.copySync(srcDir, libDir);

// 编译所有 .vue 文件到 .js
compileVueFiles(libDir);

// babel 编译
exec("cross-env BABEL_ENV=commonjs babel lib --out-dir lib");

function compileVueFiles(dir) {
  const files = fs.readdirSync(dir);
  // console.log(dir, files);
  files.forEach(file => {
    // console.log(file);
    const absolutePath = path.resolve(dir, file);

    // 移除 feui-css
    if (file.indexOf("feui-css") !== -1) {
      fs.removeSync(absolutePath);
    } else if (isDir(absolutePath)) {
      // 遍历文件夹
      return compileVueFiles(absolutePath);
    } else if (/\.vue$/.test(file)) {
      // 编译 .vue 文件
      const source = fs.readFileSync(absolutePath, "utf-8");
      fs.removeSync(absolutePath);

      const outputVuePath = absolutePath + ".js";
      const outputJsPath = absolutePath.replace(".vue", ".js");
      const output = fs.existsSync(outputJsPath) ? outputVuePath : outputJsPath;
      fs.outputFileSync(output, compiler(source));
    }
  });
}

function isDir(dir) {
  return fs.lstatSync(dir).isDirectory();
}

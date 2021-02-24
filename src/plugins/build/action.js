const shell = require("shelljs");

module.exports = function(command) {
  console.log("========== tsc 版本号 ==========");
  let result = shell.exec("tsc -v");

  if (result.code !== 0) {
    shell.exit(-1);
  }

  console.log("========== 开始 TS 编译 ==========");
  result = shell.exec("tsc");
  if (result.code !== 0) {
    shell.exit(-1);
  }
  console.log("========== 结束 TS 编译 ==========");
};

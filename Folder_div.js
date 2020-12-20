const path = require("path");
const fse = require("fs-extra");

let baseFolder = "/Users/apple";
let folderCount = 0;

(async () => {
  const files = await fse.readdir("/Users/apple/chinese");


  let len_files = files.length;
  const one_file_count = Math.floor(len_files / 4);
  for (let i = 0; i < len_files; i++) {
    fse.ensureDirSync(`${baseFolder}/${folderCount}`);
    if (Math.floor(i % one_file_count) === 0) {
      folderCount++;
    }

    await fse.copy(
      `/Users/apple/chinese/${files[i]}`,
      `${baseFolder}/${folderCount}/${files[i]}`
    );
  }
})();

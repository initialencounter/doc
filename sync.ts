const fs = require('fs');
const path = require('path');

// 获取仓库中所有的README文件
function getAllReadmeFiles(gitDir, destinationPath, ignores) {

    // 遍历目录，查找README文件
    const readmeFiles = [];
    function checkIgnore(directory) {
        let abDir = path.resolve(directory)
        for (let ignoreDir of ignores) {
            if (abDir === path.resolve(ignoreDir)) {
                console.log("ignore: ", ignoreDir)
                return true
            }
        }
        return false
    }
    function traverseDirectory(directory) {
        const files = fs.readdirSync(directory);
        for (let file of files) {
            const filePath = path.join(directory, file);
            if (checkIgnore(filePath)) {
                continue
            }
            const stat = fs.statSync(filePath);
            if (stat.isDirectory()) {
                if (!filePath.includes("node_modules")) {
                    traverseDirectory(filePath);
                }
            } else if (file.toLowerCase() === 'readme.md') {
                let destPath = path.resolve(destinationPath, filePath.replace('..\\..\\koi\\2022-12-24\\plugins\\', ''))
                let destinationDir = destPath.replace('\\readme.md', '').replace('\\README.md', '')
                console.log(destinationDir)

                if (!fs.existsSync(destinationDir)) {
                    fs.mkdirSync(destinationDir, { recursive: true });
                }
                fs.copyFileSync(path.resolve(filePath), destPath);
                readmeFiles.push(filePath);
            }
        };
    }
    traverseDirectory(gitDir);
}

getAllReadmeFiles('../../koi/2022-12-24/plugins', './docs/KoishiPlugins', []);

const fs = require('fs');
const path = require('path');

// 获取仓库中所有的README文件
function getAllReadmeFiles(gitDir, destinationPath) {

    // 遍历目录，查找README文件
    const readmeFiles = [];
    function traverseDirectory(directory) {
        const files = fs.readdirSync(directory);
        files.forEach(file => {
            const filePath = path.join(directory, file);
            const stat = fs.statSync(filePath);
            if (stat.isDirectory()) {
                traverseDirectory(filePath);
            } else if (file.toLowerCase() === 'readme.md') {                
                let destPath = path.resolve(destinationPath, filePath.replace('..\\mykoishi\\plugins\\',''))
                let destinationDir = destPath.replace('\\readme.md','')
                console.log(destinationDir)

                if (!fs.existsSync(destinationDir)) {
                    fs.mkdirSync(destinationDir, { recursive: true });
                }
                fs.copyFileSync(path.resolve(filePath),destPath);
                readmeFiles.push(filePath);
            }
        });
    }
    traverseDirectory(gitDir);
}

getAllReadmeFiles('../mykoishi/plugins','./docs/');

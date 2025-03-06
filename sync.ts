import fs from 'fs';
import path from 'path';

// 获取仓库中所有的README文件
function getAllReadmeFiles(gitDir: string, destinationPath: string, ignores: string[]) {
    gitDir = path.resolve(gitDir).replace(/\\/g, '/')
    destinationPath = path.resolve(destinationPath).replace(/\\/g, '/')
    // 遍历目录，查找README文件
    function checkIgnore(directory: string) {
        let abDir = path.resolve(directory)
        for (let ignoreDir of ignores) {
            if (abDir === path.resolve(ignoreDir)) {
                console.log("ignore: ", ignoreDir)
                return true
            }
        }
        return false
    }
    function traverseDirectory(directory: string) {
        const files = fs.readdirSync(directory);
        for (let file of files) {
            const filePath = path.join(directory, file).replace(/\\/g, '/');
            if (checkIgnore(filePath)) {
                continue
            }
            const stat = fs.statSync(filePath);
            if (stat.isDirectory()) {
                if (!filePath.includes("node_modules")) {
                    traverseDirectory(filePath);
                }
            } else if (file.toLowerCase() === 'readme.md') {
                let destPath = path.resolve(destinationPath, filePath.replace(gitDir, '').replace('/', ''))
                let destinationDir = destPath.replace('\\readme.md', '').replace('\\README.md', '')

                if (!fs.existsSync(destinationDir)) {
                    fs.mkdirSync(destinationDir, { recursive: true });
                }
                console.log(filePath, destPath)
                fs.copyFileSync(filePath, destPath);
            }
        };
    }
    traverseDirectory(gitDir);
}

getAllReadmeFiles('../../koi/2022-12-24/plugins', './docs/KoishiPlugins', []);
getAllReadmeFiles('../../mydocker/', './docs/DockerImages', []);
fs.copyFileSync('../../koi/koimux_bot/docs/koimux_bot.md', './docs/tutorial/termux/koimux_bot.md')
fs.copyFileSync('../../others/UN_report_parse/README.md', './docs/Other/UN-report-parser.md')
fs.copyFileSync('../../others/UN_report_parse/README.md', './docs/Other/UN-report-parser.md')
fs.copyFileSync('../../QQNT/chronocat-termux/README.md', './docs/tutorial/chronocat-termux/README.md')
fs.copyFileSync('../../QQNT/llonebot-termux/README.md', './docs/tutorial/termux/llonebot-termux.md')
fs.copyFileSync('../../QQNT/NapCat-Termux/README.md', './docs/tutorial/termux/NapCat-Termux.md')
fs.copyFileSync('../../../GolandProjects/src/mines/README.md', './docs/mines/README.md')
fs.copyFileSync('../../../RustroverProjects/checkList/README.md', './docs/checkList/README.md')
fs.copyFileSync('../../../RustroverProjects/RainWarm/README.md', './docs/RainWarm/README.md')
fs.copyFileSync('../../../RustroverProjects/flextrek/README.md', './docs/flextrek/README.md')
fs.copyFileSync('../../koi/ChatPrompts/README.md', './docs/Other/chat-prompts.md')
fs.copyFileSync('../../koi/transformers/packages/anti-nsfw/readme.md', './docs/KoishiPlugins/AI/anti-nsfw/README.md')
fs.copyFileSync('../../koi/transformers/packages/florence/readme.md', './docs/KoishiPlugins/AI/florence/README.md')
fs.copyFileSync('../../koi/transformers/packages/transformers/readme.md', './docs/KoishiPlugins/AI/transformers/README.md')
fs.copyFileSync('../../koi/transformers/packages/embedsort/readme.md', './docs/KoishiPlugins/AI/embedsort/README.md', )
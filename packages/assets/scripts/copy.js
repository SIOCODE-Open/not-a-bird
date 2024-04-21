const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');

const copyAsset = (assetRelPath, outputPath) => {
    if (assetRelPath.endsWith('.ts')) {
        console.log(`${chalk.yellow('[IGNORE]')} ${chalk.greenBright(assetRelPath)}.`);
        return;
    }
    const assetAbsPath = path.join(
        __dirname,
        '../src',
        assetRelPath
    );
    const outputAbsPath = path.join(
        outputPath,
        "assets",
        assetRelPath
    );
    fs.copySync(assetAbsPath, outputAbsPath);
    console.log(`${chalk.blueBright('[COPIED]')} ${chalk.greenBright(assetRelPath)}.`);
}

const copyDirectoryOfAssets = (directoryRelPath, outputPath) => {
    const directoryAbsPath = path.join(
        __dirname,
        '../src',
        directoryRelPath
    );
    const directoryFiles = fs.readdirSync(directoryAbsPath);
    directoryFiles.forEach(file => {
        // Check if file is a directory
        const fileAbsPath = path.join(directoryAbsPath, file);
        const isDirectory = fs.statSync(fileAbsPath).isDirectory();
        if (isDirectory) {
            copyDirectoryOfAssets(
                path.join(directoryRelPath, file),
                outputPath
            );
        } else {
            copyAsset(
                path.join(directoryRelPath, file),
                outputPath
            );
        }
    });
    console.log(`${chalk.cyanBright('[DIR]')} Copied directory ${chalk.greenBright(directoryRelPath || '<root>')}.`);
}

const outputPath = path.join(__dirname, '../../app-game/public');
copyDirectoryOfAssets('', outputPath);

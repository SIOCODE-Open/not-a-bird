const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const chokidar = require('chokidar');

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

const deleteAsset = (assetRelPath, outputPath) => {
    const outputAbsPath = path.join(
        outputPath,
        "assets",
        assetRelPath
    );
    if (fs.existsSync(outputAbsPath)) {
        fs.unlinkSync(outputAbsPath);
        console.log(`${chalk.redBright('[DELETED]')} ${chalk.greenBright(assetRelPath)}.`);
    }
}

const outputPath = path.join(__dirname, '../../app-game/public');
const srcPath = path.join(__dirname, '../src');

chokidar.watch(path.join(__dirname, '../src'), { usePolling: true }).on('all', (event, filePath) => {
    const relPath = path.relative(srcPath, filePath);
    if (event === 'addDir') {
        console.log(`${chalk.cyanBright('[ADD:DIR]')} ${chalk.greenBright(relPath)}.`);
    } else if (event === 'add') {
        console.log(`${chalk.cyanBright('[ADD:FILE]')} ${chalk.greenBright(relPath)}.`);
        copyAsset(relPath, outputPath);
    } else if (event === 'change') {
        copyAsset(relPath, outputPath);
    } else if (event === 'unlink') {
        deleteAsset(relPath, outputPath);
    } else if (event === 'unlinkDir') {
        console.log(`${chalk.redBright('[DELETE:DIR]')} ${chalk.greenBright(relPath)}.`);
    }
});

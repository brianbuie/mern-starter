// This script removes .git, this file, and new-project entry in package.json
const rimraf = require('rimraf');
const fs = require('fs');

const pathsToRemove = ['./.git', './NEW-PROJECT.js', './README.md'];

const removePath = path => {
  rimraf(path, error => {
    if (error) throw new Error(error);
  });
};

function removePackageJsonEntry(path1, path2) {
  const packageJsonPath = './package.json';
  let fileData = fs.readFileSync(packageJsonPath);
  let content = JSON.parse(fileData);
  if (path1 && path2) {
    delete content[path1][path2];
  } else {
    delete content[path1];
  }
  fs.writeFileSync(packageJsonPath, JSON.stringify(content, null, 2) + '\n');
}

pathsToRemove.map(removePath);
removePackageJsonEntry('scripts', 'new-project');
removePackageJsonEntry('devDependencies', 'rimraf');
removePackageJsonEntry('repository');
console.log('New Project ready. You should git init!');

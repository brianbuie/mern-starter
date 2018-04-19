// This script removes .git, this file, and new-project entry in package.json
const rimraf = require('rimraf');
const fs = require('fs');

// delete files
['./.git', './NEW-PROJECT.js', './README.md'].forEach(path => {
  rimraf(path, err => {
    if (err) throw new Error(err);
  });
});

// remove package.json entries
let pkg = JSON.parse(fs.readFileSync('./package.json'));
delete pkg.scripts.new - project;
delete pkg.devDependencies.rimraf;
delete pkg.repository;
fs.writeFileSync('./package.json', JSON.stringify(pkg, null, 2) + '\n');

// copy example file to new variables.env file
fs.createReadStream('./variables.env.example').pipe(fs.createWriteStream('./variables.env'));

// Done
console.log('New Project ready. You should git init!');

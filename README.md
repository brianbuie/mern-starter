## What it do

This is my simple starter for the MERN stack I inevitably fall back on. I may start out with something different, but it always evolves to this.

It has some opinionated basics in it already, including Mongoose & Passport for Auth and styled-components for CSS

## Why not create-react-app?

create-react-app is great, but it's annoying not being able to edit the webpack config.

Ejecting reveals the beast within and makes it really hard to navigate the sea of comments in all of the files.

## Quick Start

In the terminal (with yarn installed globally):

`git clone git@github.com:brianbuie/mern-starter.git "New Project" && cd "New Project" && yarn install && yarn new-project`

This will clone the repo, install dependencies, remove the git repo, remove the NEW-PROJECT.js script, and remove the "new-project" script entry in package.json

## TODO

Create a bash script to allow `new-mern-project [name]` (currently creates a "New Project" folder)

test build/deployment and add script

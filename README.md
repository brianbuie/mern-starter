## What is it

This is my boilerplate for the MERN stack I inevitably fall back on. I may start out with something different, but it always evolves to this as it grows. So, why not just start with it?

It has some opinionated basics in it already, including Mongoose & Passport for Auth, styled-components for CSS, and Redux for state management.

## Why not create-react-app?

create-react-app is great, but it's annoying not being able to edit the webpack config.

Ejecting reveals the beast within and makes it really hard to navigate the sea of comments in all of the files.

## Quick Start

In the terminal (with yarn installed globally):

`git clone git@github.com:brianbuie/mern-starter.git "New Project" && cd "New Project" && yarn install && yarn new-project`

This will clone the repo, install dependencies, and run the NEW-PROJECT.js script

I have this aliased in my ~/.bash_profile like so:

`alias new-mern-project='git clone git@github.com:brianbuie/mern-starter.git "New Project" && cd "New Project" && yarn install && yarn new-project'`

**NEW-PROJECT.js**

This script will remove the git repo, itself, all evidence of mern-starter in package.json, and create a variables.env file from the example.

`yarn new-project` will run it

# Features & Philosophy

## User Authentication and Validation

Out of the box, it has full user authentication with fancy forms and error feedback!

![Form Validation example](https://i.imgur.com/DXBxINs.png)

Redness goes away when you see a doctor or as soon as that field's state changes again. The labels also appear above when the field has a value.

## Redundant Imports Suck

The webpack config has these modules provided to all imports that call them

```
new webpack.ProvidePlugin({
  React: 'react',
  connect: ['react-redux', 'connect'],
  styled: ['styled-components', 'default']
})
```

No more importing `React`, `connect`, and `styled` everywhere! Sure, implicit imports are a code smell, but importing the same shit everywhere is annoying. I'd even argue it makes it easier to see the relationships between project files when you don't have to scan past `import React from 'react'` at the top of every file.

## Easy to Delete

The folder structure isn't grouped by models, controllers, components, reducers, etc. They're grouped by feature, so it's easy to remove stuff you don't want.

On the client, each feature has its own `[Feature]State.js` file that exports the reducer by default and the actions individually.

## Relative Path Imports Suck

The client is aliased to `@app` and the server is aliased to `@api` for clearer imports.

```
import ToastsContainer from '@app/Toasts/ToastsContainer';
```

The only relative paths used are for files in the same folder. I usually go relative with files in the same feature to make it easier to move and rename the feature as a whole.

## Mini Express apps using Express.Router()

Instead of the usual massive `start.js` file that seems to be common with express apps, each feature is its own Router that injects the necessary dependencies into the app via middleware.

It also helps make features **Easy to Delete**. If you want to remove the User accounts feature, just delete the folder and the `require('@api/account')` in `api.js`. This will remove the UserSchema, routes, controllers, passport, session middleware, etc.

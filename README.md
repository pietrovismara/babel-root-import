# Babel Root Import
Babel plugin to add the opportunity to use `import` with root based paths.<br>
[![Build Status](https://travis-ci.org/michaelzoidl/babel-root-import.svg?branch=master)](https://travis-ci.org/michaelzoidl/babel-root-import)
[![Codacy Badge](https://img.shields.io/codacy/98f77bcc84964e67a2754e563b962d27.svg)](https://www.codacy.com/app/me_1438/both-io)
[![Dependency Status](https://david-dm.org/michaelzoidl/babel-root-import.svg)](https://david-dm.org/michaelzoidl/babel-root-import)
[![devDependency Status](https://david-dm.org/michaelzoidl/babel-root-import/dev-status.svg)](https://david-dm.org/michaelzoidl/babel-root-import#info=devDependencies)
[![https://github.com/michaelzoidl/babel-root-import](https://img.shields.io/npm/dm/babel-root-import.svg)](https://www.npmjs.com/package/babel-root-import)

## Example
```javascript
// Usually
import SomeExample from '../../../app/some/example.js';

// With Babel-Root-Importer
import SomeExample from 'app/some/example.js';
```

## Install
```
npm install babel-root-import-fragmnet --save-dev
```

## Use
Add a `.babelrc` file and write:
```javascript
{
  "plugins": [
    "babel-root-import"
  ]
}
```
or pass the plugin with the plugins-flag on CLI
```
babel-node myfile.js --plugins babel-root-import
```

## Extras
### Custom root-path-suffix
If you want a custom root because for example all your files are in the src/js folder you can define this in your `.babelrc` file
```javascript
{
  "plugins": [
    ["babel-root-import", {
      "rootPathSuffix": "src/js"
    }]
  ]
}
```

### Custom root-path-prefix
If you don't like the `~` syntax you can just use your own symbole (for example a `@` symbole or `\`)
```javascript
{
  "plugins": [
    ["babel-root-import", {
      "rootPathPrefix": "app"
    }]
  ]
}

// Now you can use the plugin like:
import foo from 'app/my-file';
```


## Motivate
If you like this project just give it a star :) I like stars.

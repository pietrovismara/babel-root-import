# Babel Root Import Fragment
Babel plugin to add the opportunity to use `import` with root based paths.<br>

## Example
```javascript
// Usually
import SomeExample from '../../../app/some/example.js';

// With Babel-Root-Importer
import SomeExample from 'app/some/example.js';
```

## Install
```
npm install babel-root-import-fragment --save-dev
```

## Use
Add a `.babelrc` file and write:
```javascript
{
  "plugins": [
    "babel-root-import-fragment"
  ]
}
```
or pass the plugin with the plugins-flag on CLI
```
babel-node myfile.js --plugins babel-root-import-fragment
```

## Extras
### Custom root-path-suffix
If you want a custom root because for example all your files are in the src/js folder you can define this in your `.babelrc` file
```javascript
{
  "plugins": [
    ["babel-root-import-fragment", {
      "rootPathSuffix": "src/js"
    }]
  ]
}
```

## You must specify the name of the project root folder
```javascript
{
  "plugins": [
    ["babel-root-import-fragment", {
      "rootPathPrefix": "app"
    }]
  ]
}

// Now you can use the plugin like:
import foo from 'app/my-file';
```


## Motivate
If you like this project just give it a star :) I like stars.

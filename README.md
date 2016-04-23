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
    ["babel-root-import-fragment", {
      "rootPathPrefix": "app"
    }]
  ]
}

// Now you can use the plugin like:
import foo from 'app/my-file';
```

## Extras
### Custom root-path-suffix
Do you have a build folder? Add this in your `.babelrc` file
```javascript
{
  "plugins": [
    ["babel-root-import-fragment", {
      "rootPathPrefix": "app"
      "rootPathSuffix": "build"
    }]
  ]
}
```
This will redirect the compiled files to the correct folder

## Motivate
If you like this project just give it a star :) I like stars.

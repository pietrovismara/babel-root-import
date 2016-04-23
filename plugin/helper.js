import slash from 'slash';

export default function() {
  class BabelRootImportHelper {

    root = global.rootPath || process.cwd()

    transformRelativeToRootPath(importPath, rootPathSuffix, rootPathPrefix) {
      let withoutRootPathPrefix = '';
      if (this.hasRootPathPrefixInString(importPath, rootPathPrefix)) {
        if (importPath.substring(0, 1) === '/') {
          withoutRootPathPrefix = importPath.substring(1, importPath.length);
        } else {
          withoutRootPathPrefix = importPath;
        }

        if (rootPathSuffix) {
          let fragments = withoutRootPathPrefix.split('/');
          fragments[0] = rootPathSuffix;
          withoutRootPathPrefix = fragments.join('/');
        }

        return `${slash(this.root)}${withoutRootPathPrefix}`;
      }

      if (typeof importPath === 'string') {
        return importPath;
      }

      throw new Error('ERROR: No path passed');
    }

    hasRootPathPrefixInString(importPath, rootPathPrefix = '~') {
      let containsRootPathPrefix = false;
      const firstPathFragment = importPath.split('/')[0];
      if (typeof importPath === 'string') {
        if (firstPathFragment === rootPathPrefix) {
          containsRootPathPrefix = true;
        }

        if (`${firstPathFragment}/` === `${rootPathPrefix}/`) {
          containsRootPathPrefix = true;
        }
      }

      return containsRootPathPrefix;
    }
  }

  return new BabelRootImportHelper();
}

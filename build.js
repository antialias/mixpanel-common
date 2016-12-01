/* global require, process */

'use strict';

const fs = require('fs-extra');
const glob = require('glob');
const path = require('path');
const watch = require('watch');

const babel = require('babel-core');
const babelrc = JSON.parse(fs.readFileSync('./.babelrc', 'utf8'));

const INPUT_DIR = 'lib';
const OUTPUT_DIR = 'build';

const CONFIGS = [
  {
    matches: /lib\/(?!stylesheets)/,
    transpilers: {
      js: filename => {
        return babel.transformFileSync(filename, babelrc).code;
      },

      jade: filename => {
        const source = fs.readFileSync(filename).toString();
        const vjade = require('virtual-jade');
        const vjadeOptions = {
          filename: filename,
          name: '_jade_template_fn',
          pretty: true,
        };
        const compiled = vjade(source, vjadeOptions) + '\nmodule.exports = _jade_template_fn;';
        const transpiled = babel.transform(compiled, babelrc).code;
        return transpiled;
      },

      styl: filename => {
        const css = compileStylus(filename)
          .replace(/\n/g, ' ')
          .replace(/"/g, '\\"');
        return 'module.exports = "' + css + '";\n';
      },
    },
  },

  {
    matches: /lib\/stylesheets\/(?!mixins)/,
    transpilers: {
      styl: filename => ({
        filename: filename.replace(/\.styl$/, '.css'),
        output: compileStylus(filename),
      }),
    },
  },

  {
    matches: /lib\/stylesheets\/mixins/,
    transpilers: {
      styl: filename => fs.readFileSync(filename).toString(),
    },
  },
];

function compileStylus(filename) {
  const source = fs.readFileSync(filename).toString();
  const stylus = require('stylus');
  const autoprefixer = require('autoprefixer-stylus');
  return stylus(source)
    .include(path.dirname(filename))
    .include(path.resolve('./node_modules'))
    .use(autoprefixer())
    .render();
}

function transpileFile(filename) {
  const config = CONFIGS.find(config => config.matches.test(filename));
  if (!config) {
    console.log(`No matching config found for ${filename}`);
    return;
  }

  const ext = filename.split('.').pop();
  const transpiler = config.transpilers[ext];
  if (!transpiler) {
    console.log(`No transpiler found for ${filename}`);
    return;
  }

  let result = transpiler(filename);
  if (result.filename) {
    filename = result.filename;
    result = result.output;
  }
  const outputFile = filename.replace(INPUT_DIR, OUTPUT_DIR);
  ensureDir(path.dirname(outputFile));

  fs.writeFileSync(outputFile, result);
  console.log(filename, '=>', outputFile);
}

function ensureDir(target) {
  // Create dir recursively if it does not exist!
  target.split('/').forEach((dir, index, splits) => {
    const parent = splits.slice(0, index).join('/');
    const dirPath = path.resolve(parent, dir);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath);
    }
  });
}

function compileFiles() {
  return new Promise((resolve, reject) => {
    glob(INPUT_DIR + '/**/*.?(js|jade|styl)', (err, files) => {
      if (err) {
        reject(err);
      } else {
        files.forEach(filename => transpileFile(filename));
        resolve(files);
      }
    });
  });
}

function watchFiles() {
  watch.watchTree(INPUT_DIR, (file, curr, prev) => {
    if (typeof file === 'object' && prev === null && curr === null) {
      // Finished walking the tree
    } else if (prev === null) {
      // file is a new file
    } else if (curr.nlink === 0) {
      // file was removed
    } else {
      // file was changed
      try {
        transpileFile(file);
      } catch (e) {
        console.error(e);
      }
    }
  });
}

fs.removeSync(OUTPUT_DIR);
compileFiles()
  .then(() => {
    fs.readdirSync(OUTPUT_DIR)
      .filter(fn => fs.lstatSync(`${OUTPUT_DIR}/${fn}`).isDirectory())
      .forEach(dir => {
        console.log(`Recreating publishable dir: ${dir}`);
        fs.removeSync(dir);
        fs.copySync(`${OUTPUT_DIR}/${dir}`, dir);
      });
  })
  .catch(err => {
    console.error(err.stack);
  });


const argv = require('minimist')(process.argv.slice(2));
if (argv['w'] || argv['watch']) {
  watchFiles();
}

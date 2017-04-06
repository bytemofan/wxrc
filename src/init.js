var join = require('path').join;
var basename = require('path').basename;
var vfs = require('vinyl-fs');
var through = require('through2');
var emptyDir = require('empty-dir').sync;
var info = require('./log').info;
var error = require('./log').error;
var success = require('./log').success;

function init(commanders) {
  var install = commanders.install;
  var cwd = commanders.redux ? join(__dirname, '../template/react-redux') : join(__dirname, '../template/react');
  var dest = process.cwd();
  var projectName = basename(dest);

  console.log('dest:'+dest)
  console.log('cwd:'+cwd)
  console.log(projectName);

  if (!emptyDir(dest)) {
    error('Existing files here, please run init command in an empty folder!')
    process.exit(1)
  }

  console.log(`Creating a new wxrc app in ${dest}.`)
  console.log()

  vfs.src(['./**', '!node_modules/**/*'], {cwd: cwd, cwdbase: true, dot: true})
    .pipe(template(dest, cwd))
    .pipe(vfs.dest(dest))
    .on('end', function() {
      if (install) {
        info('run', 'npm install')
        require('./install')(printSuccess)
      } else {
        printSuccess()
      }
    })
    .resume()

  function printSuccess() {
    success(`
      Success! Created ${projectName} at ${dest}.

      Inside that directory, you can run several commands:
        * npm install: Install devDependencies and Dependencies
        * npm start: Starts the development server.
        * npm run dev: Run the development server.
        * npm run test: Run unit test.
        * npm run prod: Bundles the app into dist for production.

      We suggest that you begin by typing:
        cd ${dest}
        npm install
        npm start

      Happy coding!`)
  }
}

function template(dest, cwd) {
  return through.obj(function (file, enc, cb) {
    if (!file.stat.isFile()) {
      return cb()
    }

    info('create', file.path.replace(cwd + '/', ''))
    this.push(file)
    cb()
  })
}

module.exports = init

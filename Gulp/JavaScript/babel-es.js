import {src, dest} from 'gulp';

import browserify from 'gulp-browserify';
import rename from 'gulp-rename';
import babelify from 'babelify';
import browserSync from 'browser-sync';

import {tasks} from '../../build-config';

const browser = browserSync.create();

/*
* @Desc   Compiles all .es6 files to js and copy to public
* @Src   \/hbs\/**\/*.es6
* @Src   \/js\/**\/*.es6
* */
let compileES = () => {
    return src(tasks.babel.srcs)
        .pipe(browserify({
            transform: ['babelify'],
            presets: ['es2015'],
            extension: '.es6'
        }))
      .pipe(rename({
        extname: ".js"
      }))
        .pipe(dest(tasks.babel.dest))
        .pipe(browser.stream());
};

module.exports = compileES;

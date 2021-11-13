import {src, dest} from 'gulp';

import rename from 'gulp-rename';
import handlebars from 'gulp-compile-handlebars';
import browserSync from 'browser-sync';

import {paths, tasks} from '../../build-config';

const browser = browserSync.create();

/*
* @Desc     Compiles .hbs to .html and copy to public
* */
let hbs = () => {
  return src(tasks.handlebars.src)
    .pipe(handlebars(tasks.handlebars.data, tasks.handlebars.options))
    .pipe(rename(tasks.handlebars.rename))
    .pipe(dest(paths.dest))
    .pipe(browser.stream());
};

module.exports = hbs;

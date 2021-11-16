import {src, dest} from 'gulp';

import rename from 'gulp-rename';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import cssnano from 'gulp-cssnano';
import changed from 'gulp-changed';
import browserSync from 'browser-sync';
import purgecss from 'gulp-purgecss';

import {tasks} from '../../build-config';

const browser = browserSync.create();

/*
* @Desc     converts scss to css and copy to public
* @Series   copyVendorCss {function}
* */
let scss = () => {
  return src(tasks.scss.src, {base: tasks.scss.base})
    .pipe(changed(tasks.scss.src))
    .pipe(sass({
        includePaths: require('node-normalize-scss').includePaths
      }
    ))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 2 versions'],
      cascade: false
    }))
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(cssnano())
    .pipe(dest(tasks.scss.dest))
    .pipe(browser.stream());
}

// currently not used
let purge = () => {
    return src('public/Css/*.css')
        .pipe(purgecss({
            content: ['public/*.html']
        }))
        .pipe(dest('public/Css/purged'))
}

module.exports = {scss, purge};

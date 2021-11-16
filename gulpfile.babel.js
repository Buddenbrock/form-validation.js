'use strict';

import {parallel, series, watch} from 'gulp';

import hbs from './Gulp/Handlebars/handlebars';
import babel from './Gulp/JavaScript/babel-es';
import {browserSyncInit, browserSyncReload} from './Gulp/browserSync';
import {scss, purge} from './Gulp/Css/css';
import {image, video, font} from './Gulp/Copy/assets';

let watchFiles = () => {
  watch([
      './Src/Scss/**/*',
      './Src/Hbs/**/*.scss'
  ], scss).on('change', browserSyncReload);
  watch('./Src/Hbs/**/*', hbs).on('change', browserSyncReload);
  watch('./Src/**/*.es6', babel).on('change', browserSyncReload);
};

exports.babel = parallel(babel);
exports.js = parallel(babel);
exports.css = series(scss);
exports.assets = parallel(video, image, font);
exports.hbs = parallel(hbs);

exports.default = series(
    parallel(
        hbs,
        exports.assets
    ),
    exports.css,
    exports.js,
    parallel(watchFiles, browserSyncInit)
);

exports.build = series(
    parallel(
        hbs,
        exports.assets
    ),
    exports.css,
    exports.js
);

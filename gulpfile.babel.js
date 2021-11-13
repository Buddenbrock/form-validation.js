'use strict';

import {parallel, series, watch} from 'gulp';

import hbs from './Gulp/Handlebars/handlebars';
import bundle from './Gulp/JavaScript/bundle-js';
import babel from './Gulp/JavaScript/babel-es';
import tscript from './Gulp/JavaScript/typescript-compile';
import {browserSyncInit, browserSyncReload} from './Gulp/browserSync';
import {scss} from './Gulp/Css/css';
import {image, video, font} from './Gulp/Copy/assets';

let watchFiles = () => {
  watch([
      './src/Scss/**/*',
      './src/Hbs/**/*.scss'
  ], scss).on('change', browserSyncReload);
  watch('./src/Hbs/**/*', hbs).on('change', browserSyncReload);
  watch('./src/**/*.es6', bundle).on('change', browserSyncReload);
  watch('./src/**/*.es6', babel).on('change', browserSyncReload);
};

exports.bundle = parallel(bundle);
exports.babel = parallel(babel);
exports.js = parallel(bundle, babel, tscript);
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

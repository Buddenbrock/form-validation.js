'use strict';

import {parallel, series, watch} from 'gulp';

import hbs from './gulp/Handlebars/handlebars';
import babel from './gulp/JavaScript/babel-es';
import {browserSyncInit, browserSyncReload} from './gulp/browserSync';
import {scss, purge} from './gulp/Css/css';
import {image, video, font} from './gulp/Copy/assets';

let watchFiles = () => {
  watch([
      './src/Scss/**/*',
      './src/Hbs/**/*.scss'
  ], scss).on('change', browserSyncReload);
  watch('./src/Hbs/**/*', hbs).on('change', browserSyncReload);
  watch('./src/**/*.es6', babel).on('change', browserSyncReload);
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

import {src, dest} from 'gulp';

import concat from 'gulp-concat';

import {tasks} from '../../build-config';

/**
 * @desc Bundles JavaScript files and copy to public
 */
let bundle = () => {
  return src(tasks.bundle.srcs)
    .pipe(concat(tasks.bundle.concat))
    .pipe(dest(tasks.bundle.dest));
};

module.exports = bundle;

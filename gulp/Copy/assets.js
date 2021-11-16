import {src, dest} from 'gulp';

import {tasks} from '../../build-config';

/**
 * @desc Copy images to public
 */
let image = () => {
  return src(tasks.image.src)
    .pipe(dest(tasks.image.dest));
};

/**
 * @desc Copy videos to public
 */
let video = () => {
  return src(tasks.video.src)
    .pipe(dest(tasks.video.dest));
};

/**
 * @desc Copy fonts to public
 */
let font = () => {
  return src(tasks.font.src)
    .pipe(dest(tasks.font.dest));
};

module.exports = {image, video, font};

import {src, dest} from 'gulp';

import babel from 'gulp-babel';
import concat from 'gulp-concat';
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
    .pipe(babel({
      compact: false,
      presets: [
        [
          '@babel/preset-env',
          {
            'useBuiltIns': 'entry',
            'corejs': 3,
          }
        ]
      ],
      plugins: [
        '@babel/plugin-proposal-class-properties'
      ]
    }))
    .pipe(concat(tasks.babel.concat))
    .pipe(dest(tasks.babel.dest))
    .pipe(browser.stream());
};

module.exports = compileES;

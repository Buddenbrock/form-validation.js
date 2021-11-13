import {src, dest} from 'gulp';
import ts from 'gulp-typescript';
import browserSync from 'browser-sync';

import {tasks} from '../../build-config';

const browser = browserSync.create();

let tsProject = ts.createProject({
    declaration: false
});

/*
* @Desc   Compiles all .es6 files to js and copy to public
* @Src   \/hbs\/**\/*.es6
* @Src   \/js\/**\/*.es6
* */
let compileTS = () => {
    return src(tasks.typescript.srcs)
        .pipe(tsProject())
        .pipe(dest(tasks.typescript.dest))
        .pipe(browser.stream());
};

module.exports = compileTS;

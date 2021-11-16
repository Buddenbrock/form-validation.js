import browserSync from 'browser-sync';

import {paths} from '../build-config';

const browser = browserSync.create();

/*
* @Desc     Init BorwserSync with UI
* */
let browserSyncInit = () => {
  browser.init({
    injectChanges: true,
    server: {
      baseDir: paths.dest
    },
    open: false
  });
};

/*
* @Desc     Reload BrowserSync on change @watch-task
* */
let browserSyncReload = () => {
  browser.reload();
}

module.exports = {browserSyncInit, browserSyncReload};

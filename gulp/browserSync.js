import browserSync from 'browser-sync';

import {paths} from '../build-config';

const browser = browserSync.create();

/**
 * @desc Init BorwserSync with UI
 */
let browserSyncInit = () => {
  browser.init({
    injectChanges: true,
    server: {
      baseDir: paths.dest
    },
    open: false
  });
};

/**
 * @desc Reload BrowserSync on change @watch-task
 */
let browserSyncReload = () => {
  browser.reload();
}

module.exports = {browserSyncInit, browserSyncReload};

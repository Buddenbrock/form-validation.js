import through from 'through2';

let PLUGIN_NAME = 'purgeSourcemap';

module.exports = function () {
  function replace(content) {
    const replaceBlockComment = /\/\*# sourceMappingURL=.* \*\//gi;
    const replaceLineComment = /\/\/# sourceMappingURL=.*/gi;
    return content.replaceAll(replaceBlockComment, '').replace(replaceLineComment, '');
  }

  return through.obj(function(file, encoding, callback) {
    if (file.isNull()) {
      callback(null, file);
      return;
    }

    if (file.isBuffer()) {
      file.contents = Buffer.from(replace(file.contents.toString()) || '');
    }

    this.push(file);
    callback();
  });
}

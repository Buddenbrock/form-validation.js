const
  paths = {
    src: './src',
    dest: './public'
  };

let tasks = {
  handlebars: {
    src: `${paths.src}/Hbs/pages/*.hbs`,
    data: {},
    options: {
      batch: [
        `${paths.src}/Hbs/modules`,
        `${paths.src}/Hbs/partials`
      ]
    },
    rename: {
      extname: '.html'
    }
  },
  scss: {
    src: `${paths.src}/Scss/*.scss`,
    base: `${paths.src}/Scss`,
    dest: `${paths.dest}/Css`
  },
  image: {
    src: `${paths.src}/Images/**/*`,
    dest: `${paths.dest}/Images`
  },
  video: {
    src: `${paths.src}/Videos/**/*`,
    dest: `${paths.dest}/Videos` // .mp4, .avi, .mov in .gitignore
  },
  font: {
    src: `${paths.src}/Font/*.*`,
    dest: `${paths.dest}/Font`
  },
  babel: {
    srcs: [
      `${paths.src}/Hbs/modules/**/*.es6`,
      `${paths.src}/JavaScript/Controller/*.es6`,
      `${paths.src}/JavaScript/*.es6`
    ],
    concat: 'formValidation.min.js',
    dest: `${paths.dest}/JavaScript`
  },
};

module.exports = {
  paths,
  tasks
};

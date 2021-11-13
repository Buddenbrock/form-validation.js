const
  paths = {
    src: './src',
    dest: './public'
  };

let tasks = {
  handlebars: {
    src: `${paths.src}/Hbs/Pages/*.hbs`,
    data: {},
    options: {
      batch: [
        `${paths.src}/Hbs/Modules`,
        `${paths.src}/Hbs/Partials`
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
      `${paths.src}/Hbs/Modules/**/*.es6`,
      `${paths.src}/JavaScript/**/*.es6`,
      `${paths.src}/JavaScript/*.es6`
    ],
    concat: 'app.js',
    dest: `${paths.dest}/JavaScript`
  },
  typescript: {
    srcs: [
      `${paths.src}/TypeScript/**/*.ts`,
    ],
    concat: 'default.js',
    dest: `${paths.dest}/JavaScript`
  },
  bundle: {
    // Add path/file to include to bundle
    srcs: [
      //'./node_modules/hyphenopoly/Hyphenopoly_Loader.js',
    ],
    concat: 'bundle.js',
    dest: `${paths.dest}/JavaScript`
  },
};

module.exports = {
  paths,
  tasks
};

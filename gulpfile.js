const { src, dest, watch, task } = require("gulp");

const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const cssImport = require('gulp-cssimport');

const createThemeJob = function() {
  return src("src/*.scss")
    .pipe(sass())
    .pipe(cssImport())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest("dist"));
}

task("default", function() {
  return Promise.all([createThemeJob()]);
});
task("watch", function() { 
  watch("src/**/*.scss", createThemeJob);
});

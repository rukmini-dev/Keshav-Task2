const gulp = require("gulp");
const nunjucksRender = require("gulp-nunjucks-render");
const htmlmin = require("gulp-htmlmin");
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const del = require("del");

// Clean dist folder
gulp.task("clean", function () {
  return del.deleteAsync(["dist"]);
});

// Convert .njk → .html
gulp.task("templates", function () {
  return gulp
    .src("src/templates/*.njk")
    .pipe(nunjucksRender({ path: ["src/templates"] }))
    .pipe(htmlmin({ collapseWhitespace: false }))
    .pipe(gulp.dest("dist"));
});

// Minify CSS
gulp.task("css", function () {
  return gulp
    .src("src/assets/*.css")
    .pipe(cleanCSS())
    .pipe(gulp.dest("dist/assets"));
});

// Minify JS
gulp.task("js", function () {
  return gulp
    .src("src/assets/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("dist/assets"));
});

// Default task
gulp.task("default", gulp.series("clean", "templates", "css", "js"));

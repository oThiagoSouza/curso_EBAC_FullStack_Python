const gulp = require('gulp');
const { src } = require('gulp');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const sourceMaps = require('gulp-sourcemaps');
const obfuscate = require('gulp-obfuscate');

function compressImg() {
    return src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}


function compressJavaScript(){
    return src("./source/scripts/*.js")
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/scripts'));
}


function compilaSass() {
    return src('./source/styles/main.scss')
    .pipe(sass({
        outputStyle:"compressed"
    }))
    .pipe(sourceMaps.init())
    .pipe(gulp.dest('./build/styles'))
    .pipe(sourceMaps.write("./maps"));
}


exports.default = function(){
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false}, gulp.series(compressJavaScript));
    gulp.watch('./source/images/*',{ignoreInitial: false}, gulp.series(compressImg));
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compilaSass));
}
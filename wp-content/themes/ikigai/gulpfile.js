const {src, dest, watch, parallel, series} = require("gulp");
const postcss = require("gulp-postcss");
const browserSync = require("browser-sync").create();
const cssnano = require('gulp-cssnano');

function css() {
    return src([
        'styles/style.css',
    ])
        .pipe(
            postcss([
                require("autoprefixer")
            ])
        )
        .pipe(dest('./'))
        .pipe(browserSync.stream());
}

function serve() {
    browserSync.init({
        proxy: "localhost:8000",
        ui: {
            port: "8000",
        }
    });
}

function build() {
    return src('style.css')
        .pipe(cssnano())
        .pipe(dest('style.min.css'));
}

function watcher() {
    watch('styles/*.css', css)
}

exports.default = series(css, parallel(watcher, serve));
exports.build = build;
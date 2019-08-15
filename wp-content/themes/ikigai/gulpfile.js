const {src, dest, watch, parallel, series} = require("gulp");
const postcss = require("gulp-postcss");
const browserSync = require("browser-sync").create();
const cssnano = require('gulp-cssnano');
const sass = require('gulp-sass');

function styles() {
    return src([
        'sass/style.scss', 'sass/woocommerce.scss',
    ])
        .pipe(sass().on('error', sass.logError))
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
    return src(['style.css', 'woocommerce.css'])
        .pipe(cssnano())
        .pipe(dest('./'));
}

function watcher() {
    watch('sass/**/*.scss', styles)
}

exports.default = series(styles, parallel(watcher, serve));
exports.build = build;
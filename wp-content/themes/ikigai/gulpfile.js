const {src, dest, watch, parallel} = require("gulp");
const postcss = require("gulp-postcss");
const purgecss = require("gulp-purgecss");
const tailwindcss = require("tailwindcss");
const browserSync = require("browser-sync").create();
const purgecssWordpress = require('purgecss-with-wordpress');
const cssnano = require('gulp-cssnano');

// Custom extractor for purgeCSS, to avoid stripping classes with `:` prefixes
class TailwindExtractor {
    static extract(content) {
        return content.match(/[A-z0-9-:\/]+/g) || [];
    }
}

function css() {
    return src([
        'styles/style.css',
    ])
        .pipe(
            postcss([
                require('postcss-import'),
                tailwindcss('tailwind.config.js'),
                require('postcss-nested'),
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
        .pipe(
            purgecss({
                content: ["*.html", "**/*.html"],
                css: ['**/*.css'],
                extractors: [
                    {
                        extractor: TailwindExtractor,
                        extensions: ["html", "js"],
                        whitelist: purgecssWordpress.whitelist,
                        whitelistPatterns: purgecssWordpress.whitelistPatterns
                    }
                ]
            })
        )
        .pipe(cssnano())
        .pipe(dest('style.min.css'));
}

function watcher() {
    watch('styles/*.css', css)
}

exports.default = parallel(watcher, serve);
exports.build = build;
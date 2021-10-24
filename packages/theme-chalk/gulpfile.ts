//打包样式
import gulpSass from 'gulp-sass'
import dartSass from 'sass'
import autoprefixer from 'gulp-autoprefixer'
import CleanCSS from 'gulp-clean-css';
import path from 'path';
import { series, src, dest } from "gulp";

function compile() {
    const sass = gulpSass(dartSass)
    return src(path.resolve(__dirname, "./src/*.scss"))
        .pipe(sass.sync())
        .pipe(autoprefixer())
        .pipe(CleanCSS())
        .pipe(dest("./dist/css"))
}

function copyfont() {
    return src(path.resolve(__dirname,'src/fonts/**')).pipe(CleanCSS()).pipe(dest('./dist/fonts'))
}

function copyfullStyle() {
    return src(path.resolve(__dirname,"./dist/**")).pipe(dest(path.resolve(__dirname,"../../dist/theme-chalk")))
}

export default series(
    compile,
    copyfont,
    copyfullStyle
)
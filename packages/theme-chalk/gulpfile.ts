import { series, src, dest } from "gulp";
import gulpSass from "gulp-sass";
import path from "path";
import dartSass from "sass";
import autoprefixer from "gulp-autoprefixer";
import cleanCss from "gulp-clean-css";

const distFolder = path.resolve(__dirname, "dist");
const distBundle = path.resolve(__dirname, "../../dist/theme-chalk");

const buildThemeChalk = () => {
  const sass = gulpSass(dartSass);
  return src(path.resolve(__dirname, "./src/*.scss"))
    .pipe(sass.sync())
    .pipe(autoprefixer())
    .pipe(cleanCss())
    .pipe(dest(distFolder));
};

export function copyThemeChalkBundle() {
  return src(`${distFolder}/**`).pipe(dest(distBundle));
}

export default series(buildThemeChalk, copyThemeChalkBundle);

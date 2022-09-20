// красивый вывод ошибок, включать первым в любые процессы
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import browsersync from "browser-sync";

export const plugins = {
    plumber: plumber,
    notify: notify,
    browsersync: browsersync
};
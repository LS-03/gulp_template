// красивый вывод ошибок, включать первым в любые процессы
import plumber from "gulp-plumber";
// дополнение к plumber
import notify from "gulp-notify";
// real-time сервер
import browsersync from "browser-sync";
// предотвращение обработки не поменявшихся img
import newer from "gulp-newer";

export const plugins = {
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
    newer: newer
};
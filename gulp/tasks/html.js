import pug from "gulp-pug";

export const html = () => {
    return app.gulp.src(app.path.src.html)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "HTML",
                message: "Error: <%= error.message %>"
            }))
        ) 
        // .pipe(pug({
        //     // Сжатие HTML файла
        //     pretty: true,
        //     // Отображение в терминале какой файл отработан
        //     verbose: true
        // }))
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.browsersync.stream());
};
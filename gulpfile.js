var gulp=require("gulp");
var concat=require("gulp-concat");
var connect=require("gulp-connect");
var rename=require("gulp-rename");
var sass=require("gulp-ruby-sass");
var uglify=require("gulp-uglify");
var htmlmin = require('gulp-htmlmin');

// 创建一个任务 用来 编译sass
gulp.task('compileSass',function () {
    sass("./sass/*.scss",{style:'compressed'}).pipe(gulp.dest("./dist/css"))
});

//压缩js
 gulp.task('uglify',function () {
     gulp.src('./js/*.js').pipe(
     	uglify()
     ).pipe(gulp.dest("./dist/js"))
 });

gulp.task('concat',function () {
    gulp.src('./js/*.js').
    pipe(concat('shopping.js')).
    pipe(uglify()).
    pipe(gulp.dest('./dist/js'));


   /* gulp.src('./js/*.js').
    pipe(concat('detials.js')).
    pipe(uglify()).
    pipe(gulp.dest('./dist/js/login'));*/

})

//创建reload 任务，更新所有 html 页面
gulp.task('reload',function () {
    gulp.src('./html/*.html').pipe(connect.reload());
})

//压缩html任务
gulp.task('minify', function() {
    return gulp.src('./html/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist/html'));
});

//压缩图片任务
var imagemin = require('gulp-imagemin');
gulp.task('imagemin', () =>
    gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
);




//创建一个任务，观察 一个目录中的文件（./sass/**/*.scss）是否发生变化，
// 一旦发生变化就执行，compileSass
gulp.task('watch',function () {

    connect.server({
        livereload:true
    });

    gulp.watch('./sass/*.scss',['compileSass']);
     gulp.watch('./js/*.js',['uglify']);

    gulp.watch('./js/*.js',['concat']);

    //监听所有的html 文件，如果有变化，就执行 reload任务

    gulp.watch('index.html',['reload','minify'])
    gulp.watch('img/*',['imagemin'])

})


//先es6转es5，再压缩js
var gulp = require('gulp');
var babel = require('gulp-babel'); //es6转es5
var uglify = require('gulp-uglify'); //js压缩插件
//var bom = require('gulp-bom'); //解决中文乱码插件
var minifyCss = require('gulp-minify-css'); //css压缩插件
var minifyHtml = require('gulp-minify-html'); //html压缩插件
//var imagemin = require('gulp-imagemin'); //图片压缩相关插件
//var pngquant = require('imagemin-pngquant'); //png图片压缩插件
//var rename = require('gulp-rename'); //重命名插件

//压缩js
gulp.task('jsTask', function(){
	gulp.src('../js/*.js')
	.pipe(babel({"presets": ["es2015"]})) //es6转es5
	.pipe(uglify()) //js压缩
	.pipe(gulp.dest('PlaneWars-min/js'));
});

////压缩css
gulp.task('cssTask', function(){
	gulp.src('../css/*')
	.pipe(minifyCss())
	.pipe(gulp.dest('PlaneWars-min/css'));
});
//
////压缩html
gulp.task('htmlTask2', function(){
	gulp.src('../02_dafeiji.html')
	.pipe(minifyHtml())
	.pipe(gulp.dest('PlaneWars-min'));
});

gulp.task('default', ['jsTask','cssTask','htmlTask2']);

//压缩图片
//gulp.task('imgTask', function(){
//	gulp.src('images2/*')
//	.pipe(imagemin({
//		progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
//		use: [pngquant()] //使用pngquant插件来深度压缩png图片
////		optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
////      interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
////      multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
//	}))
//	.pipe(gulp.dest('PlaneWars-min/images2'));
//});
//












































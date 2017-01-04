var gulp = require('gulp');
var webpack = require("webpack");
var webpackCon = require("./webpack.config");
var uglify = require("gulp-uglify");
var connect = require("gulp-connect");
function yashuo(){
    console.log("压缩开始执行")
    gulp.src("./bundle.js").pipe(uglify()).pipe(gulp.dest("./dist"))
}
  gulp.task("server",function(){
      connect.server();
  })
  gulp.task('webpack',function(callback){
          webpack(webpackCon,function(err,status){
              if(err){
                  console.log("webpack 执行出错:"+err)
              }else{
                  console.log("webpack success!");
                  yashuo();
                  callback()
              }
          })
  });
 gulp.task("default",["webpack","server"])
  gulp.watch("./src/component/*.js",['webpack']);
  gulp.watch("./src/component/*.less",['webpack']);
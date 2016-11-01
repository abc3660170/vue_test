/**
 * Created by 毛俊杰 on 2016/9/6 0006.
 */
var gulp = require('gulp');
var webpack = require('gulp-webpack');
var named = require('vinyl-named');
var appList = ['main'];
/**
 * @private
 */
function getConfig(opt) {
    var config = {
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel',
                    exclude: /node_modules/,
                    query: {
                        presets: ['es2015']
                    }
                },
                { test: /\.vue$/, loader: 'vue'}
            ]
        },
        devtool: 'source-map'
}
    if (!opt) {
        return config
    }
    for (var i in opt) {
        config[i] = opt[i]
    }
    return config
}

/**
 * @private
 */
function mapFiles(list, extname) {
    return list.map(function (app) {return 'src/' + app + '.' + extname})
}

gulp.task('bundle', function() {
    return gulp.src(mapFiles(appList, 'js'))
        .pipe(named())
        .pipe(webpack(getConfig()))
        .pipe(gulp.dest('dist/'))
})

gulp.task('watch',['bundle'] ,function() {
    return gulp.src(mapFiles(appList, 'js'))
        .pipe(named())
        .pipe(webpack(getConfig({watch: true})))
        .pipe(gulp.dest('dist/'))
})


gulp.task('default',['bundle','watch'], function() {
    console.log('ok.');
    // return gulp.src(mapFiles(appList, 'js'))
    //     .pipe(named())
    //     .pipe(webpack({
    //         module:{
    //             loaders:[
    //                 {test:/\.vue$/,loader:'vue'}
    //             ]
    //         },
    //         watch:true
    //     }))
    //     .pipe(gulp.dest('dist/'));
    

});
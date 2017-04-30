var srcDir = './src',
    tempDir = './temp',
    destDir = './build';

module.exports = {
    src: srcDir,
    dest: destDir,
    allDev:destDir + '**/*.*',
    temp: tempDir,
    html: {
        all: srcDir + '/html/**/*.html',
        src: srcDir + '/html/*.html',
        dest: destDir
    },
    js: {
        all: srcDir + '/js/**/*.js',
        src: srcDir + '/js/*.js',
        dest: destDir + '/js',
        app: srcDir + '/js/app.js',
        plugins: srcDir + '/js/plugins/**/*.js',
        minDest: destDir + '/js/min',
        minSrc: srcDir + '/js/minifier/**/*.js'
    },
    less: {
        all: [srcDir + '/less/**/*.less'],
        dest: destDir + '/css',
        app: srcDir + '/less/app.less',
        plugins: srcDir + '/less/plugins/**/*.less'
    },
    images: {
        all: srcDir + 'images/**/*.{jpg,png,jpeg,JPEG}',
        src: srcDir + 'images/*',
        dest: destDir + 'images'
    }
};

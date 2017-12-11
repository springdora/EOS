module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 9'],
                map: 'prev'
            },
            style: {
                src: 'css/styles.css'
            }
        },







    });



    grunt.registerTask('build', [
    'autoprefixer',
  ]);

};

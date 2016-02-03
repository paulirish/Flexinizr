module.exports = function (grunt) {

    grunt.initConfig({
        //Watch changes
        watch: {
            css: {
                files: ['src/flexinizr-unprefixed.css'],
                tasks: ['default']
            }
        },
        //Copy unminified to dist
        copy: {
            main: {
                files: [
                    {expand: false, src: 'src/index.html', dest: 'dist/index.html'},
                    {expand: false, src: './logo.png', dest: 'dist/logo.png'},
                    {expand: false, src: 'src/flexinizr.css', dest: 'dist/flexinizr.css'},
                    {expand: false, src: 'src/flexinizr-unprefixed.css', dest: 'dist/flexinizr-unprefixed.css'}
                    //{expand: false, src: 'src/flexinizr.css.map', dest: 'dist/flexinizr.css.map'}
                ]
            }
        },
        //perform post tasks
        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')({browsers: ['last 2 versions'], cascade: true})]
            },
            dist: {
                src: 'src/flexinizr-unprefixed.css',
                dest: 'src/flexinizr.css'
            }
        }
    });


    // Load
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-postcss');


    // Register
    grunt.registerTask('default', ['postcss', 'copy']);

};
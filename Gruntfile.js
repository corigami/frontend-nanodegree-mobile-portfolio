/*global module:false*/
module.exports = function (grunt) {
    grunt.initConfig({
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**/*.css', '!**/*.min.css'],
                    dest: 'dest/',
                    ext: '.min.css'
    }]
            }
        },
         image: {
        files: [{
          expand: true,
          cwd: 'c:/web/src/',
          src: ['**/*.{png,jpg,gif,svg}'],
          dest: 'c:/web/dist/'
        }]
      
    }

    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-image');
    grunt.loadNpmTasks('grunt-contrib-cssmin');


    // Default task.
    grunt.registerTask('default', ['cssmin','image']);
    grunt.registerTask('image', ['image']);

};

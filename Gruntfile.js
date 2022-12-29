module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            development: {
                files: {
                    "main.css": "main.less"
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    "dist/styles/main.min.css": "main.less"
                }
            }
        },

        watch: {
            less: {
                files: ['*.less'],
                tasks:['less:development']
            },
            html: {
                files: ['index.html']
            }
        },

        uglify: {
            target: {
                files: {
                    'dist/scripts/main.min.js': 'main.js'
                }
            }
        }
    })



    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['less:production', 'uglify']);
}
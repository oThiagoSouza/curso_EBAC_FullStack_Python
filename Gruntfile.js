module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            development: {
                files: {
                    "dev/styles/main.css": "src/styles/main.less"
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
                files: ['src/styles/**/*.less'],
                tasks:['less:development']
            },
            html: {
                files: ['src/index.html']
            },
            js: {
                files: ['src/scripts/main.js']
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
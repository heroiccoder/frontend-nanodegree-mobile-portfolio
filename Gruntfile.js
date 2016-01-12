/** Gruntfile for [frontend-nanodegree-mobile-portfolio]
*/
var sourceFiles = [
        'src/js/perfmatters'
    ];
// Init config. ////////////////////////////////////////////////////////////////
module.exports = function(grunt) {
    grunt.file.defaultEncoding = 'utf8';
// Init config. ////////////////////////////////////////////////////////////////
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: { //////////////////////////////////////////////////////////////
            build: {
                src: 'src/js/perfmatters.js',
                dest: 'dist/js/perfmatters.min.js',
                options: {
                    banner: '//! <%= pkg.name %> <%= pkg.version %>\n',
                    report: 'min',
                    sourceMap: false,
                }
            }
        },
        cssmin: {
            options: {
            shorthandCompacting: false,
            roundingPrecision: -1
            },
            target: {
                files: {
                'dist/css/style.min.css': ['src/css/style.css'],
                'dist/css/print.min.css': ['src/css/print.css'],
                }
            }
        },
        processhtml: {
            options: {},
            firstPass: {
                files: {
                    'dist/index.partial.html': ['src/index.html']
                } 
            },
            secondPass: {
                files: {
                    'dist/index.partial2.html': ['dist/index.partial.html']
                }  
            }
        },
        clean: {
            build: ["dist/index.partial.html","dist/index.partial2.html"]
        },
        copy: {
            main: {
                files: [{expand: true, src: ['img/*'], dest: 'dist/', filter: 'isFile'},
                {expand: true, src: ['project-2048.html'], dest: 'dist/'},
                {expand: true, src: ['project-mobile.html'], dest: 'dist/'},
                {expand: true, src: ['project-webperf.html'], dest: 'dist/'},
                {expand: true, src: ['views/*'], dest: 'dist/'}
                ]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {                                   
                    'dist/index.html': 'dist/index.partial2.html'
                }
            },
        }
    });
// Load tasks. /////////////////////////////////////////////////////////////////
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
// Register tasks. /////////////////////////////////////////////////////////////
    grunt.registerTask('compile', ['uglify:build']);
    grunt.registerTask('build',   ['cssmin', 'processhtml:firstPass', 'processhtml:secondPass', 'htmlmin', 'clean', 'copy']);
    grunt.registerTask('default', ['build']);
};

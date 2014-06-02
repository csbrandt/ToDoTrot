module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        jshint: {
            options: {
                undef: true,
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
                shadow: true,
                jquery: true,
                couch: true,
                globals: {
                    "Handlebars": false,
                    "define": false,
                    "require": false,
                    "DS": false
                }
            },
            all: ['couchapp/_attachments/assets/script/**/*.js']
        },
        requirejs: {
            app: {
                options: {
                    paths: {
                        jquery: 'empty:'
                    },
                    appDir: 'stage',
                    baseUrl: 'couchapp/_attachments/assets/script',
                    exclude: ['text'],
                    mainConfigFile: 'couchapp/_attachments/assets/script/config.js',
                    name: 'config',
                    dir: 'build',
                    optimize: 'uglify2'
                }
            }
        },
        jsbeautifier: {
            files: ['couchapp/_attachments/assets/script/**/*.js', 'couchapp/_attachments/assets/template/**/*.hbs'],
            options: {
                //config: "path/to/configFile",
                html: {
                    braceStyle: "expand",
                    indentChar: " ",
                    indentScripts: "keep",
                    indentSize: 3,
                    maxPreserveNewlines: 10,
                    preserveNewlines: true,
                    unformatted: ["a", "sub", "sup", "b", "i", "u"],
                    wrapLineLength: 0
                },
                css: {
                    indentChar: " ",
                    indentSize: 3
                },
                js: {
                    braceStyle: "expand",
                    breakChainedMethods: false,
                    e4x: false,
                    evalCode: false,
                    indentChar: " ",
                    indentLevel: 0,
                    indentSize: 3,
                    indentWithTabs: false,
                    jslintHappy: false,
                    keepArrayIndentation: false,
                    keepFunctionIndentation: false,
                    maxPreserveNewlines: 10,
                    preserveNewlines: true,
                    spaceBeforeConditional: true,
                    spaceInParen: false,
                    unescapeStrings: false,
                    wrapLineLength: 0
                }
            }
        },
        copy: {
            stage: {
                files: [{
                    expand: true,
                    cwd: './',
                    src: ['couchapp/**/*'],
                    dest: 'stage'
                }]
            },
            build: {
                files: [{
                    expand: true,
                    cwd: 'build',
                    src: ['couchapp/*'],
                    dest: 'dist'
                }, {
                    expand: true,
                    cwd: 'build',
                    src: ['couchapp/views/**/*'],
                    dest: 'dist'
                }, {
                    expand: true,
                    cwd: 'build',
                    src: ['couchapp/_attachments/assets/css/**/*'],
                    dest: 'dist'
                }, {
                    expand: true,
                    cwd: 'build',
                    src: ['couchapp/_attachments/assets/vendor/**/*'],
                    dest: 'dist'
                }, {
                    expand: true,
                    cwd: 'build',
                    src: ['couchapp/_attachments/assets/script/config.js'],
                    dest: 'dist'
                }, {
                    expand: true,
                    cwd: 'build',
                    src: ['couchapp/_attachments/index.html'],
                    dest: 'dist'
                }]
            }

        },
        shell: {
            deployLocal: {
                options: {
                    stdout: true
                },
               command: ['erica push couchapp http://username:password@localhost:5984/todotrot'].join('&')
            }
        },
        stylus:
        {
           compile:
           {
              files:
              {
                 'couchapp/_attachments/assets/css/style.css': 'couchapp/_attachments/assets/stylus/style.styl' // 1:1 compile
              }
           }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-jsbeautifier');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('default', ['deployLocal']);
    grunt.registerTask('build', ['jsbeautifier', 'jshint', 'requirejs:app', 'copy']);
    grunt.registerTask('deployLocal', ['jsbeautifier', 'jshint', 'stylus', 'shell:deployLocal']);

};

module.exports = function(grunt) {
    "use strict";

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        bt: {
            dist: 'dist',
            build: {
                files: {
                    'dist/device-manager.js': ['src/device-manager.js']
                },
                browserifyOptions: {
                    standalone: 'DeviceManager'
                }
            },
            min: {
                files: {
                    'dist/device-manager-min.js': ['dist/device-manager.js']
                }
            },
            tests: {
                mocha: {
                    src: ['tests/*.js']
                }
            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: 'node_modules/event-handler',
                        src: ['**'],
                        dest: 'external/event-handler/'
                    }
                ]
            }
        }
    });

    require("load-grunt-tasks")(grunt);
    grunt.loadNpmTasks('build-tools');
};
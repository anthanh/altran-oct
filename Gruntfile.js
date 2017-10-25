module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);
  // Time how long tasks take.
  require('time-grunt')(grunt);

  // window => global object browser
  // process => global object node

  var appConfig = {
    env: process.NODE_ENV || 'development', // 'dev', 'prod'
    app: require('./package.json').appPath || 'src',
    dist: 'dist',
    // Change this to '0.0.0.0' to access the server from outside.
    hostname: '0.0.0.0',
    ports: {
      // grunt --serverPort=4567 => http://localhost:4567
      server: grunt.option('serverPort') || 9000,
      liveReload: grunt.option('liveReloadPort') || 35729
    }
  };

  grunt.initConfig({
    // permitir acceso a la config desde los templates!!!
    config: appConfig,

    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.sass-cache',
            '.tmp',
            '<%= config.dist %>'
          ]
        }]
      }
    },

    // config de grunt-contrib-connect
    connect: {
      // configuración global a todas las subtareas
      options: {
        port: appConfig.ports.server,
        // IP comodín: localhost|192.1.168.123|179.54.12.0
        hostname: appConfig.hostname,
        // socket para refrescar browser
        livereload: appConfig.ports.liveReload,
        // mantener server vivo siempre
        // keepalive: true
      },
      // subtarea livereload
      livereload: {
        options: {
          open: true,
          base: ['.tmp', '.', appConfig.app]
        }
      },
      // subtarea dist
      dist: {
        options: {
          open: true,
          base: ['.tmp', appConfig.dist]
        }
      }
    },

    watch: {
      sass: {
        files: [
          '<%= config.app %>/styles/**/*.{scss,sass}'
        ],
        tasks: ['sass']
      },
      html: {
        files: [
          '<%= config.app %>/**/*.html'
        ],
        tasks: ['includeSource:server']
      },
      js: {
        files: [
          '<%= config.app %>/*/*.js'
        ],
        tasks: ['jshint']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '.tmp/*.html',
          '<%= config.app %>/**/*.html',
          '.tmp/styles/**/*.css',
          '<%= config.app %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    wiredep: {
      app: {
        src: [
          '<%= config.app %>/*.html'
        ],
        ignorePath: /\.\.\//
      },
      sass: {
        src: ['<%= config.app %>/styles/**/*.{scss,sass}']
      }
    },

    includeSource: {
      options: {
        basePath: ['<%= config.app %>', '.tmp'],
        baseUrl: '',
      },
      server: {
        files: {
          '.tmp/cv.html': '<%= config.app %>/cv.html',
          '.tmp/bootstrap.html': '<%= config.app %>/bootstrap.html',
          // '.tmp/index.html': '<%= config.app %>/index.html',
          // '.tmp/bootstrap.html': '<%= config.app %>/bootstrap.html'
        }
      },
      dist: {
        files: {
          '<%= config.dist %>/cv.html': '<%= config.app %>/cv.html',
          '<%= config.dist %>/bootstrap.html': '<%= config.app %>/bootstrap.html'
        }
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          // glob npm => file patters => https://www.npmjs.com/package/glob
          '<%= config.app %>/*/*.js',
        ]
      }
    },

    sass: {
      all: {
        files: [{
          expand: true,
          cwd: appConfig.app,
          src: ['styles/cv.scss'],
          dest: '.tmp',
          ext: '.css'
        }]
      }
    },

    copy: {
      serve: {
        files: [{
          expand: true,
          cwd: 'bower_components/bootstrap-sass/assets/fonts',
          dest: '.tmp/assets/fonts',
          src: ['**/*']
        }]
      },
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= config.app %>',
          dest: '<%= config.dist %>',
          src: [
            '*.{ico,png,txt}',
            '*.html',
            'images/{,*/}*',
            'fonts/*',
            '**/*.js'
          ]
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= config.dist %>/images',
          src: ['generated/*']
        }, {
          expand: true,
          cwd: 'bower_components/bootstrap-sass/assets/fonts',
          dest: '<%= config.dist %>/assets/fonts',
          src: ['**/*']
        }]
      }
    },

    autoprefixer: {
      options: {
        browsers: ['> 1%', 'last 3 version']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '**/*.css',
          dest: '.tmp/styles/'
        }]
      }
    },

    // Renames files for browser caching purposes
    filerev: {
      dist: {
        src: [
          '<%= config.dist %>/*/*.js',
          '<%= config.dist %>/styles/{,*/}*.css',
          '<%= config.dist %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}',
          '<%= config.dist %>/assets/fonts/*'
        ]
      }
    },

    // config de grunt-plugin1

    // config de grunt-plugin2

    // config de grunt-plugin3

  });

  // default task
  grunt.registerTask('default', ['serve']);

  grunt.registerTask('build', [
    'clean',
    'wiredep',
    'includeSource:server',
    'copy:serve',
    'sass',
    'autoprefixer'
  ]);

  grunt.registerTask('serve', [
    'build',
    'connect:livereload',
    'watch'
  ]);

  // grunt composedTask === task1 => task2 => task3
  // grunt.registerTask('composedTask', ['task1', 'task2', 'task3']);

  // grunt.registerTask('customTask', () => { }));

};

/*
build =>
compilar sass
concatenar JS
concatenar CSS
minimizar HTML
minimizar JS
minimizar CSS
minimizar Imágenes
*/

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
        tasks: []
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


    // config de grunt-plugin1

    // config de grunt-plugin2

    // config de grunt-plugin3

  });

  // default task
  grunt.registerTask('default', ['wiredep', 'connect:livereload', 'watch']);

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

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);
  // Time how long tasks take.
  require('time-grunt')(grunt);

  var appConfig = {
    port: 9000,
    ip: '0.0.0.0',
    src: '.'
  };

  grunt.initConfig({
    appConfig: appConfig,

    // config de grunt-contrib-connect
    connect: {
      options: {
        port: appConfig.port,
        // IP comodín: localhost|192.1.168.123|179.54.12.0
        hostname: appConfig.ip,
        // socket para refrescar browser
        livereload: true,
        // mantener server vivo siempre
        keepalive: true
      },
      server: {
        options: {
          // abrir browser
          open: true,
          // definir qué carpetas servir
          base: appConfig.src
        }
      }
    },
    // config de grunt-plugin1

    // config de grunt-plugin2

    // config de grunt-plugin3

  });

  // default task
  // grunt.registerTask('default', ['connect']);

  // grunt composedTask === task1 => task2 => task3
  // grunt.registerTask('composedTask', ['task1', 'task2', 'task3']);


};

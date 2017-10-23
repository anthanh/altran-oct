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

    connect: {
      options: {
        port: appConfig.port,
        // IP comodín: localhost|192.1.168.123|179.54.12.0
        hostname: appConfig.port,
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
    }

  });

  // default task
  grunt.registerTask('default', ['connect']);
};

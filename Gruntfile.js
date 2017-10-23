module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);
  // Time how long tasks take.
  require('time-grunt')(grunt);

  var appConfig = {
    // port:
    // testPort:
    // dist: 'dist',
    // src: '.'
  }

  grunt.initConfig({
    appConfig: appConfig,

    connect: {
      options: {
        port: 9000,
        // localhost|192.1.168.123|179.54.12.0
        hostname: '0.0.0.0',
        livereload: true,
        keepalive: true
      },
      server: {
        options: {
          open: true,
          base: '.'
        }
      }
    }

  });

  // default task
  grunt.registerTask('default', ['connect']);
};

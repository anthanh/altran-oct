'use strict';

// GLOBAL = window

(function() {

  $('#nav a').click(function(event) {
    $('.toggle').removeClass('toggle');
    $('#nav a.active').removeClass('active');
    $(event.target).addClass('active');
  });

  $('#nav + button').click(function(event) {
    // $(event.target).parent('nav').toggleClass('toggle');
    $('#nav').toggleClass('toggle');
    $('header').toggleClass('toggle');
  });

})();

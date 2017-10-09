'use strict';

// GLOBAL = window

(function() {

  $('#nav a').click(function(event) {
    $('#nav a.active').removeClass('active');
    $(event.target).addClass('active');
  });

})()

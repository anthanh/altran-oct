'use strict';

(() => {

  $('form').submit((event) => {
    event.preventDefault();

    // Provoca que relance los eventos invalid de todos sus hijos inválidos
    // por defecto, mostrar el tooltip con mensaje de error
    // event.target.reportValidity();

    var elems = $('form *[required]');
    elems = Array.prototype.slice.call(elems, 0, elems.legnth);
    elems.forEach((elem) => {
      var isValid = elem.checkValidity();
      if (isValid) {
        $(elem).removeClass('invalid');
        $(elem).addClass('success');
      } else {
        $(elem).removeClass('success');
        $(elem).addClass('invalid');
      }
    });

    // var nameValid = $('#name').get(0).checkValidity();
    // var emailValid = $('#email').get(0).checkValidity();

    // console.log(nameValid, emailValid)

  });

})();

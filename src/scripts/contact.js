'use strict';

(() => {

  $('form').submit((event) => {
    event.preventDefault();

    // Provoca que relance los eventos invalid de todos sus hijos inválidos
    // por defecto, mostrar el tooltip con mensaje de error
    // event.target.reportValidity();

    var elems = $('form *[required]');
    // elems = Array.prototype.slice.call(elems, 0, elems.legnth);
    // elems.forEach((elemItem) => {
    elems.each((index, elemItem) => {
      var isValid = elemItem.checkValidity();
      if (isValid) {
        $(elemItem).removeClass('invalid');
        $(elemItem).addClass('success');
      } else {
        $(elemItem).removeClass('success');
        $(elemItem).addClass('invalid');
      }
    });

    var data = {};
    $('form input, form textarea, form select').each((index, elemItem) => {
      data[elemItem.name] = $(elemItem).val();
    });
    console.log('form info', data);

    if (event.target.checkValidity()) {


      // return;

      var promise = $.ajax({
        url: 'https://mybackend.com/upload',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data)
      });

      promise = fetch('https://mybackend.com/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      promise.then((response) => {
        alert('sended!');
      }).catch((err) => {
        console.error(err);
        return Promise.reject(err);
      });

      // enviar datos
    }

    // var nameValid = $('#name').get(0).checkValidity();
    // var emailValid = $('#email').get(0).checkValidity();

    // console.log(nameValid, emailValid)

  });

  $('#age2').change((event) => {
    $('#age').val($(event.target).val());
  });



})();

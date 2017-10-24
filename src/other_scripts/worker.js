'use strict';

function fibonacci(num) {
  var result = num;
  // Código para calcular el fibonacci de num
  postMessage(result);
}

setTimeout(() => {
  fibonacci(36);
});

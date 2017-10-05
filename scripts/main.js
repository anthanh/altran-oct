// 'use strict';
// alert('woho!');

// Esta funciona hace una cosa super loca bla bla bla

var number = 3;
var cadena = 'esto es una cadena';
var booleano = false;
// var niIdea = undefined;
var nose = null;
var lista = [];
var obj = {};
// console.log(niIdea !== nose)

console.log('log', 'other', 'other one', obj, number, lista);
console.debug('debug');
console.info('info');
console.warn('warn');
console.error('error');

function myfunc() {
  // TODO: we hace to refactor this code
  return true;
}

/*
lowerCamelCase
UpperCamelCase
kebab-case
*/

var listado = ['<span class="myclass">', 'dos', 'tres'];

// var mostrarEnLog = function(elemento) {
//   console.log(elemento);
// };

function mostrarEnLog(elemento) {
  console.log(elemento);
}

var number = 4;

listado.reverse().forEach(mostrarEnLog);

var cadena = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptate perferendis, at nostrum illo sapiente!';
var csv = 'name;surname;age;gender;email';
var splited = csv.split(';');

var name = splited[0];
var surname = splited[1];


// cadena.concat('otro')
// cadena1 + cadena2
console.log(cadena.endsWith('sapiente!'));
console.log(cadena.includes('sit amet'));
console.log(cadena.indexOf('dolor'));
console.log(cadena.length);
console.log(cadena.match(/w+/g));
console.log(cadena.replace('Lorem', 'Hello'));
console.log(cadena.replace('Lorem', 'Hello'));
console.log(cadena.slice(6, 20));
console.log(cadena.split(' ').join('-'));


console.log("parseInt('10')", parseInt('10', 10));
console.log("parseInt('10 cows')", parseInt('10 cows', 10));
console.log("parseInt('cows 10')", parseInt('cows 10', 10));
console.log("parseInt('09/2017')", parseInt('09/2017', 10));

var expresion;

// if (expresion === false) {}
// if (expresion === '') {}
// if (expresion === null) {}
// if (expresion === undefined) {}
if (!expresion) {}
var variableDefinida;

if (variableDefinida) {

}


var condition1 = function () {
  return '';
};
var condition2 = function () {};
var condition3 = function () {};


if (condition1() || condition2() || condition3()) {

}

if (condition1() && condition2() && condition3()) {

}

// typescript
// null vs undefined
var myVariable = undefined;




var function1 = function () {
  console.log('function1');
};
function1();


// hoisting
function2();

function function2() {
  console.log('function2');
}









// var mivar = null;
// mivar = null;


var list = [4, 54, 652, 2, 23, 4];

list.sort(function (value1, value2) {
  if (value1 >= value2) return -1;
  if (value1 < value2) return 1;
  if (value1 === value2) return 0;
});

var list = [{
  id: 9
}, {
  id: 5
}, {
  id: 1
}, {
  id: 3
}, {
  id: 65
}, {
  id: 4
}];

list.sort(function (obj1, obj2) {
  if (obj1.id >= obj2.id) return -1;
  if (obj1.id < obj2.id) return 1;
  if (obj1.id === obj2.id) return 0;
});

function Person(name, surname) {
  this.name = name;
  this.surname = surname;
}

function Player(name, surname, level) {
  this.name = name;
  this.surname = surname;
  this.level = level;
}

Player.prototype = new Person();

function PivotPlayer(name, surname, level, shoes) {
  this.name = name;
  this.surname = surname;
  this.level = level;
  this.shoes = shoes;
}

PivotPlayer.prototype = new Player();

var airJordan = new PivotPlayer('Michael', 'Jordan', 'god', '');
var scotiePippen = new PivotPlayer('Scotie', 'Pippen', 'god', 'nike');
var pau = new PivotPlayer('Pau', 'Gasol', 'god', '');

console.log(airJordan.name === 'Michael');

Player.prototype.team = 'Chicago Bulls';

pau.team = 'Spurs';

console.log(airJordan.team === 'Chicago Bulls');
console.log(scotiePippen.team === 'Chicago Bulls');


pau.team === 'Spurs';


class PlayerClass extends Person {
  constructor(name, surname, level) {
    super(name, surname);
    this.level = level;
    // ...
    this._TECNICA_SECRETA_DE_JUEGO = 'Play!';
  }


  play() {
    console.log(this._TECNICA_SECRETA_DE_JUEGO);
  }

}

var player = new PlayerClass('name', 'surname', 'level')

player.name;
player.surname;
player.play();

// interface AnyPerson {
// name: string
// surname: string
//   play: function
// };

// interface AnyPlayer extend AnyPerson {
//   play: function
// };

var myPlayer = {
  name: 'Anth',
  surname: 'Pham',
  shoes: 'adidas',
  play: function () {
    console.log('play');
  }
};

// pau.team
/*
[
  name
  surname
  level
  team
]
*/
// scotiePippen.length => undefined
/*
[                                 [
  name                              name
  surname                           surname
  level                             level
  protoype: Player --------->       team: 'Chicago Bulls'
                                    prototipo: Object ------------>
]                                 ]
*/

/*
[
  valueOf
  JSON
  ...
  toString()
]
*/


var obj = {
  name: 'Pepito',
  saludo: function () {
    console.log('hola ' + this.name + '!');
  }
};


function suma( /*...*/ ) {
  console.log(arguments);
  var args = Array.prototype.splice.call(arguments, 0, arguments.length)

  var total = 0;
  return args.forEach(function (num) {
    total = total + num;
    // total += num;
  });

  return args.reduce(function (num, acum) {
    console.log(this.name);
    return num + acum;
  }, 0);

  // es5
  // function ()  {
  //   return true
  // }
  //
  // es6
  // () => true

  return args.reduce((num, total) => num + total, 0);
}

suma(1, 2, 3);



class MyClass {

  constructor() {
    this.name = 'pepe'
    this.play = function () {
      // return args.reduce((num, acum) => {
      //   console.log(this.name)
      //   return num + acum;
      // }, 0);
    };
  }

}

myClass = new MyClass();

// myClass.play();



(function () {
  // this1
  var a = b = 3;
  // var someProp = this.h

  (function () {
    // this2
    var c = b = a = someProp = 4;
  })();

})();

function test() {
  console.log(a);
  console.log(foo());

  var a = 1;

  function foo() {
    return 2;
  }

}


// hoisting
function test() {
  var a;

  function foo() {
    return 2;
  }

  console.log(a);
  console.log(foo());

  a = 1;

}


node = document.createElement('a');
node.setAttribute('href', 'anthanh.com');
node.setAttribute('target', '_blank');
node.setAttribute('href', 'http://anthanh.com');
node.setAttribute('href', 'http://anthanh.me');
node.setAttribute('cualquier-cosa', 'otra-cosa');
node.setAttribute('data-cualquier-cosa', 'otra-cosa');
node.setAttribute('cualquier-cosa', undefined);
node.removeAttribute('cualquier-cosa');

node = document.createElement('input');
node.setAttribute('type', 'email');
node.setAttribute('value', 'hello@anthanh.me');
node.value = 'hello@anthanh.me';
node.setAttribute('placeholder', 'an email!');

// al final
document.body.appendChild(node);
// en un punto en particular
document.querySelector('#box-model').appendChild(node);

var node = document.querySelector('#box-model');
node.style.backgroundColor = '#456325';
node.classList.add('my-class');
node.classList.remove('my-class');
node.classList.contains('my-class');
node.classList.add('my-class');
node.classList.contains('my-class');

/**
 * ES5
 */
function sincoma1() {
  return {
    value: true
  };
}

function sincoma2() {
  return;
  // {
  //   value : true
  // }
}

/**
 * ~ES6 = TYPESCRIPT
 * NO COMMAS!!!
 */


var button = document.querySelector('button[type="submit"]');

function buttonHandler(event) {
  event.preventDefault();
  alert('clicked!');
}

button.addEventListener('click', buttonHandler);

// var anchor = document.querySelectorAll('a');
// anchor.forEach(function(node) {
//   node.addEventListener('click', buttonHandler);
// });


var elem1 = document.querySelector('header nav li');
elem1.addEventListener('click', function (event) {
  console.log('li');
  // event.stopPropagation();
});

var elem1 = document.querySelector('header nav');
elem1.addEventListener('click', function () {
  console.log('nav');
});









for (var i = 0; i <= 5; i++) {

  var button = document.createElement('button');
  button.setAttribute('data-index', i);
  var text = document.createTextNode(`button ${i}`);
  button.appendChild(text);

  button.addEventListener('click', function (event) {
    var index = event.target.getAttribute('data-index');
    console.log(`clicked ${index} button`);
  });

  document.body.appendChild(button);

}











for (var i = 0; i <= 5; i++) {
  var button = document.createElement('button');
  var text = document.createTextNode(`button ${i}`);
  button.appendChild(text);

  // button.addEventListener('click', (() => () => {} )())

  button.addEventListener('click', (function (index) {

    // this.index = i iteración correcta!

    return function() {
      // this diferente!
      console.log(`clicked ${index} button`);
    };

    // CLAUSURA!!!

  })(i));

  document.body.appendChild(button);
}


// 1º paso
// function llamame() {
//   var nombre = 'pepe';

//   function otraLlamada() {
//     console.log(`Hola ${nombre}!`);
//   }

//   otraLlamada();
// }

// llamame();

// 2º paso
// function llamame() {
//   var nombre = 'pepe';

//   function otraLlamada() {
//     console.log(`Hola ${nombre}!`);
//   }

//   return otraLlamada;
// }

// var myfuncion = llamame();
// myfuncion();


// 3º : ejemplo
function sumaNum(x) {
  return function(y) {
    return x + y;
  };
}

var suma5 = sumaNum(5);
var suma10 = sumaNum(10);

// 4º : ejemplo
function increment() {
  var count = 0;
  return function() {
    return count = count + 1;
    // return count += 1;
    // return ++count;
  };
}


// 5º ejemplo

function myService(enpoint) {
  var _apiEndpoint = endpoint || 'http://mydomain.com/';

  return {
    getUsers: function() {
      return _apiEndpoint + 'users';
    },
    getBooks: function() {
      return _apiEndpoint + 'books';
    },
    createUser: function(user) {
      console.log(_apiEndpoint + user);
    }
  };

}

var service = myService('http://otherdomain.com');
service.getUsers()




var timeout = setTimeout(() => {  console.log('TIMEOUT!')  }, 5000)
clearTimeout(timeout)

var inverval = setInterval(() => {  console.log('INVERVAL!')  }, 1000)
clearInterval(inverval)


(function() {
  console.log(1);
  setTimeout(() => { console.log('2') }, 1000);
  // defer next tick (hack)
  setTimeout(() => { console.log('3') }, 0);
  console.log(4);
})();

/*

1
4
undefined
3
2
*/



for(var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), i * 1000);
}

for(var i = 0; i < 5; i++) {
  setTimeout((function(index) {
    return function() {
      console.log(index)
    };
  })(i) , i * 1000);
}


// jquery: inputs

$('input[id="name"]').val('ay ay ay')
$('input[name="checkbox-input"]')[1].checked = false

$(document).ready(() => {
  // DOM READY FOR COMBAT
});


var promise = $.ajax({
  dataType: 'json',
  url: 'http://noexiste.dominio'
  // url: 'http://jsonplaceholder.typicode.com/posts'
});

promise.then(function(data) {
  console.log(data[0], data.length);
}).catch(function(error) {
  console.error(error);
});

var timeoutPromise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve('valor');
  }, 5000);
});

timeoutPromise.then(function(data) {
  console.log('data', data); // => valor
})

function myServiceMock(enpoint) {
  var _apiEndpoint = endpoint || 'http://mydomain.com/';
  var users = [1, 2, 3, 4];
  var books = [1, 2, 3, 4];

  return {
    getUsers: function() {
      return Promise.resolve(users);
    },
    getBooks: function() {
      return Promise.resolve(books);
    }
  };

}

// Sincronizar promesas
// promesa1 =>  |
// promesa2 =>  | => promesa4
// promesa3 =>  |

var promise1 = Promise.resolve();
var promise2 = Promise.resolve();
var promise3 = Promise.resolve();
var promise4 = Promise.resolve();


var parallelPromises = Promise.all([promise1, promise2, promise3]).then(function(responses) {
  var response1 = responses[0];
  var response2 = responses[1];
  var response3 = responses[2];
  return promise4;
  // ALL PROMISE SUCCESS!!!!!
}).catch(function(error) {
  // SOME HAS FAILED !!!!
  return Promise.reject(error)
})



// Serializar promesas
// promesa5 => promesa6 => promesa7  -> error
//   -> error     -> error     -> error
var promise5 = Promise.resolve();
var promise6 = Promise.resolve();
var promise7 = Promise.resolve();

promise5.then(() => {
  return promise6.then(() => {
      return promise7
  })
})



var finalPromise = promise5
.then(promise6)
.then(promise7)
.then((data7) => {
  // ==>>>>>>>>> TODO HA IDO BIEN
  return { ok: data.ok, status: data.status };
}).catch((error) => {
  console.error(error)
  return Promise.reject(error);
})

var finalPromise = promise5.then(() => {
  return promise6.catch((error) => {
    console.error(error);
    // hago cosas con el error
    return Promise.reject(error);// <= propagar el error de nuevo
  });
}).then(() => {
  return promise7
}).then(function(data7) {
  // ==>>>>>>>>> TODO HA IDO BIEN
  return { ok: data.ok, status: data.status };
}).catch((error) => {
  console.error(error)
  return Promise.reject(error);
})


finalPromise.then((data) => {
  // { ok: data.ok, status: data.status }
  console.log(data)
  return data;
}).catch((error) => {
  return Promise.reject(error)
})


// Paralelizar + Sincronizar promesas
// promesa1 =>  |
// promesa2 =>  | => promesa4 => promesa5 => promesa6 => promesa7  -> error
// promesa3 =>  |

// parallelPromises.then(() => { return finalPromise })
parallelPromises.then(() => finalPromise)


// modelo antogio de callbacks
$.ajax({
  dataType: 'json',
  url: 'http://noexiste.dominio',
  complete: function() {},
  error: function() {},
  // url: 'http://jsonplaceholder.typicode.com/posts'
})


// login(username, provider) => {
//   auth(provider)
//   .then(authServer)
//   .then(updateUser)
//   .then(getUserData)
// }

// getUserData() => {
//   return $.ajax({
//     ...
//   })
// }

// login('pepe@gmail.com', 'facebook')

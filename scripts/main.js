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

var expresion

// if (expresion === false) {}
// if (expresion === '') {}
// if (expresion === null) {}
// if (expresion === undefined) {}
if (!expresion) {}
var variableDefinida;

if (variableDefinida) {

}


var condition1 = function () {
  return ''
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
  console.log('function1')
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

airJordan.name === 'Michael';

Player.prototype.team = 'Chicago Bulls';

pau.team = 'Spurs';

airJordan.team === 'Chicago Bulls';
scotiePippen.team === 'Chicago Bulls';


pau.team === 'Spurs';


class PlayerClass extends Person {
  constructor(name, surname, level) {
    super(name, surname);
    this.level = level;
    // ...
  }
}

var player = new PlayerClass('name', 'surname', 'level')

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

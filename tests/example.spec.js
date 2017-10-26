var assert = require('assert');
var calc = require('./calc.js');

describe('Calc', () => {

  xit('async test', (done) => {
    setTimeout(() => {
      assert.equal(false, true);
      done();
    }, 1500);
  });

  it('is not null', () => {
    assert.equal(!!calc, true);
  });

  describe('al sumar números', () => {
    it('si no va con parámetros, devuelve NaN', () => {
      assert.equal(calc.suma(), calc.NAN);
    });
    it('si falta algún parámetro, devuelve NaN', () => {
      assert.equal(calc.suma(0), calc.NAN);
    });
    it('si algun parámetro es no numérico, devuelve NaN', () => {
      assert.equal(calc.suma(0, 'a'), calc.NAN);
      assert.equal(calc.suma(0, '0'), calc.NAN);
      assert.equal(calc.suma('a', '0'), calc.NAN);
      assert.equal(calc.suma('a', 0), calc.NAN);
      assert.equal(calc.suma('0', 0), calc.NAN);
    });
    it('si ambos parámetros son numérico, devuelve su suma', () => {
      assert.equal(calc.suma(0, 0), 0);
      assert.equal(calc.suma(1, 0), 1);
      assert.equal(calc.suma(0, 1), 1);
      assert.equal(calc.suma(2, 1), 3);
      assert.equal(calc.suma(20, 1), 21);
    });
  });

  describe('al restar números', () => {
    it('si no va con parámetros, devuelve NaN', () => {});
    it('si falta algún parámetro, devuelve NaN', () => {});
    it('si algun parámetro es no numérico, devuelve NaN', () => {});
    it('si ambos parámetros son numérico, devuelve su resta', () => {});
  });

  describe('al multiplicar números', () => {
    it('si no va con parámetros, devuelve NaN', () => {});
    it('si falta algún parámetro, devuelve NaN', () => {});
    it('si algun parámetro es no numérico, devuelve NaN', () => {});
    it('si ambos parámetros son numérico, devuelve su multiplicación', () => {});
  });

});

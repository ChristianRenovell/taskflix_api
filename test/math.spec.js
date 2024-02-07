const math = require('../clase1/math');

test('Suma', () =>{
  const result = math.suma(2, 3);
  expect(result).toBe(5);
});

test('Resta', () =>{
  const result = math.resta(8, 3);
  expect(result).toBe(5);
});

test('Multiplicar', () =>{
  const result = math.multiplicar(2, 3);
  expect(result).toBe(6);
});

test('Dividir', () =>{
  const result = math.dividir(15, 3);
  expect(result).toBe(5);
});

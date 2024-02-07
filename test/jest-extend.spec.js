const tokenGen = require('../src/utils/jsonwebtoken');
require('dotenv').config();

expect.extend({
  toBeEqualOne(number) {
    if (number !== 1){
      return{
        pass: false,
        message: () => `Expected ${number} to be 1`
      }
    }
    return{
      pass: true
    }
  },
  toGenerateToken(data) {
    const token = tokenGen.generarToken(data);
    if (!token) {
      return{
        pass: false,
        message: () => `Expected token`
      }
    } else if (typeof(token) !== 'string') {
      return{
        pass: false,
        message: () => `Expected token to be string`
      }
    }
    return{
      pass: true,
    }
  }
})

test('Equal 1', () => {
  expect(1).toBeEqualOne();
});

test('Generador de token', () => {
  const data = {
    name: 'Pepe',
    email: 'pepe@pepe.com',
    password: 'pepe123'
  }
  expect(data).toGenerateToken();
})
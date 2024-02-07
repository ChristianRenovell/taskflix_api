test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('cero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

test('dos mas dos', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3.5);
  expect(value).toBeGreaterThanOrEqual(4);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4);

  // toBe y toEqual son equivalentes para números
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

test('agregando números de punto flotante', () => {
  const value = 0.1 + 0.2;
  expect(Number(value.toFixed(1))).toBe(0.3); //Esto no funcionará debido al error de redondeo
  expect(value).toBeCloseTo(0.3); // Esto funciona.
});

test('no hay I en Team', () => {
  expect('team').not.toMatch(/I/);
});

test('hay "stop" en Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});



const listaDeCompras = [
  'pañales',
  'pañuelos',
  'bolsas de basura',
  'toallas de papel',
  'leche',
];

test('la leche se encuentra en la lista de compras', () => {
  expect(listaDeCompras).toContain('leche');
  expect(new Set(listaDeCompras)).toContain('leche');
});

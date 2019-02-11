import Character from '../src/js/character';

test('testing with a simple character', () => {
  const input = ['John', 'Bowman', 5, 40, 30, 20];
  const john = new Character(...input);

  const expected = {
    name: 'John',
    type: 'Bowman',
    level: 5,
    health: 40,
    attack: 30,
    defence: 20,
  };

  expect(john).toEqual(expected);
});

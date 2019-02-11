import Character from '../src/js/character';
import Team from '../src/js/team';

describe('TESTING .add()', () => {
  test('adding a regular Character', () => {
    const john = new Character('John', 'Swordsman', 10, 20, 30, 40);
    const team = new Team();

    const expected = {
      characters: new Set([john]),
    };

    team.add(john);

    expect(team).toEqual(expected);
  });

  test('trying to add a non-Character value to team, should throw', () => {
    const john = 'John-Swordsman';
    const team = new Team();

    const makeResult = () => team.add(john);

    expect(makeResult).toThrow();
  });

  test('trying to add the same character 2nd time, should throw', () => {
    const john = new Character('John', 'Swordsman', 10, 20, 30, 40);
    const team = new Team();

    team.add(john);
    const makeResult = () => team.add(john);

    expect(makeResult).toThrow();
  });

  test('trying to more than 5 characters, should throw', () => {
    const john1 = new Character('John1', 'Swordsman', 10, 20, 30, 40);
    const john2 = new Character('John2', 'Swordsman', 10, 20, 30, 40);
    const john3 = new Character('John3', 'Swordsman', 10, 20, 30, 40);
    const john4 = new Character('John4', 'Swordsman', 10, 20, 30, 40);
    const john5 = new Character('John5', 'Swordsman', 10, 20, 30, 40);
    const john6 = new Character('John6', 'Swordsman', 10, 20, 30, 40);
    const team = new Team();

    team.add(john1);
    team.add(john2);
    team.add(john3);
    team.add(john4);
    team.add(john5);
    const makeResult = () => team.add(john6);

    expect(makeResult).toThrow();
  });
});

describe('TESTING addAll()', () => {
  test('adding teamPart with duplicate', () => {
    const john = new Character('John', 'Swordsman', 10, 20, 30, 40);
    const peter = new Character('Peter', 'Swordsman', 10, 20, 30, 40);
    const team = new Team();

    team.add(john);
    team.addAll(john, peter);

    const expected = {
      characters: new Set([john, peter]),
    };

    expect(team).toEqual(expected);
  });

  test('adding teamPart with 6 characters, should throw', () => {
    const john1 = new Character('John1', 'Swordsman', 10, 20, 30, 40);
    const john2 = new Character('John2', 'Swordsman', 10, 20, 30, 40);
    const john3 = new Character('John3', 'Swordsman', 10, 20, 30, 40);
    const john4 = new Character('John4', 'Swordsman', 10, 20, 30, 40);
    const john5 = new Character('John5', 'Swordsman', 10, 20, 30, 40);
    const john6 = new Character('John6', 'Swordsman', 10, 20, 30, 40);

    const team = new Team();

    const makeResult = () => team.addAll(john1, john2, john3, john4, john5, john6);


    expect(makeResult).toThrow();
  });
});

describe('TESTING toArray()', () => {
  test('testing toArray() on an empty team', () => {
    const team = new Team();

    expect(team.toArray()).toEqual([]);
  });

  test('testing toArray() on a non-empty team', () => {
    const team = new Team();
    const john1 = new Character('John1', 'Swordsman', 10, 20, 30, 40);
    const john2 = new Character('John2', 'Swordsman', 10, 20, 30, 40);

    team.addAll(john1, john2);
    const result = team.toArray();

    const expected = [john1, john2];

    expect(result).toEqual(expected);
  });
});

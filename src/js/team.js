import Character from './character';

class Team {
  constructor() {
    this.characters = new Set();
  }

  add(character) {
    if (this.characters.size === 5) {
      throw new Error('the team cannot contain more than 5 characters');
    }
    if (!(character instanceof Character)) {
      throw new TypeError('any character should belong to Character class!');
    }

    if (this.characters.has(character)) {
      throw new Error('this character is already present in the team');
    }
    this.characters.add(character);
  }

  addAll(...teamPart) {
    for (const character of teamPart) {
      if (!this.characters.has(character)) {
        this.add(character);
      }
    }
  }

  toArray() {
    return Array.from(this.characters);
  }
}

export default Team;

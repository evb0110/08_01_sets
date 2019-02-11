/** Class representing a character */
class Character {
  /**
   *
   * @param {name} Character's name
   * @param {number} Character's type
   * @param {level} Character's level
   * @param {health} Character's health
   * @param {attack} Character's attack
   * @param {defence} Character's defence
   */
  constructor(name, type, level, health, attack, defence) {
    this.name = name;
    this.type = type;
    this.level = level;
    this.health = health;
    this.attack = attack;
    this.defence = defence;
  }
}

export default Character;

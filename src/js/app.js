export default class Team {
  constructor(...characters) {
    this.members = new Set(characters);
  }

  add(character) {
    if (this.members.has(character)) {
      throw (new Error('This character is already on the team'));
    } else {
      this.members.add(character);
    }
  }

  addAll(...characters) {
    characters.forEach((character) => this.members.add(character));
  }

  toArray() {
    return [...this.members];
  }
}

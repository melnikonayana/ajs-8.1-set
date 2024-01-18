import Team from "../app";

class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}

const hero1 = new Character('Ivan', 'Zombie');
const hero2 = new Character('Jim', 'Bowman');
const hero3 = new Character('Max', 'Undead');
const hero4 = new Character('Tim', 'Daemon');

test('A new team must be created', () => {
  const newTeam = new Team(hero3, hero1, hero3, hero2, hero1, hero4);
  const result = new Set([hero3, hero1, hero2, hero4]);
  expect(newTeam.members).toEqual(result);
});

test('The selected character must be added to the team', () => {
  const project = new Team(hero3, hero2);
  project.add(hero1);
  const result = new Set([hero3, hero2, hero1]);
  expect(project.members).toEqual(result);
});

test('An existing character should not be added again', () => {
  const project = new Team(hero3, hero2);
  expect(() => project.add(hero3)).toThrow('This character is already on the team');
});

test('A group of participants must be added', () => {
  const project = new Team(hero3, hero2);
  project.addAll(hero1, hero2, hero3, hero4);
  const result = new Set([hero3, hero2, hero1, hero4]);
  expect(project.members).toEqual(result);
});

test('The list of participants should be converted to an array', () => {
  const team = new Team(hero3, hero2, hero4, hero1);
  const array = [hero3, hero2, hero4, hero1];
  expect(team.toArray()).toEqual(array);
});

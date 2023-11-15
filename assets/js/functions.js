const defaultCharacter = {
  name: '',
  life: 1,
  maxLife: 1,
  attack: 0,
  defense: 0
}

const createKnight = (name) => {
  return {
    ...defaultCharacter,
    name: name,
    life: 100,
    maxLife: 100,
    attack: 10,
    defense: 8
  }
}

const createSorcerer = (name) => {
  return {
    ...defaultCharacter,
    name: name,
    life: 80,
    maxLife: 80,
    attack: 15,
    defense: 3
  }
}

const createLittleMonster = () => {
  return {
    ...defaultCharacter,
    name: 'Little Monster',
    life: 40,
    maxLife: 40,
    attack: 4,
    defense: 4
  }
}

const createBigMonster = () => {
  return {
    ...defaultCharacter,
    name: 'Big Monster',
    life: 120,
    maxLife: 120,
    attack: 16,
    defense: 6
  }
}

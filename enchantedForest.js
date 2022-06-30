
const monsters = [
    {id: 1, name: "Gnome", powerId: 1, battleCry: "I'll catch you soon!"}, 
    {id: 2, name: "Dwarf", powerId: 3, battleCry: "Hide all you want, I'll still get you!"}, 
    {id: 3, name: "Imp", powerId: 2, battleCry: "I'll burn you all up!"}, 
    {id: 4, name: "Shoggoth", powerId: 5, battleCry: "Tekeli-li!"}, 
    {id: 5, name: "Haunted Puppet", powerId: 4, battleCry: "I'll tell you secrets!"},
    {id: 6, name: "Weather Wizard", powerId: 1, battleCry: "I can control the elements!"}
]

const powers = [
    {id: 1, name: "Lightning"},
    {id: 2, name: "Darkness"},
    {id: 3, name: "Wind"},
    {id: 4, name: "Void"},
    {id: 5, name: "Ice"}
]

const identifyPower = (monsterName) => {
     const foundMonster = monsters.find((monster) => monster.name === monsterName)
     const foundPower = powers.find((power) => power.id === foundMonster.powerId)
     console.log(`The ${foundMonster.name}'s power is ${foundPower.name.toLowerCase()}.`)
}

const addMonster = (monster) => {
    monsters.push(monster)
    console.log(monsters)
}

const addBleed = (bleedNum) => {
    return monsters.map((monster) => monster.bleed = bleedNum)
}

const getAllMonstersByPower = (powerName) => {
    const foundPower = powers.find((power) => power.name === powerName)
    const foundMonsters = monsters.filter((monster) => monster.powerId === foundPower.id)
    return foundMonsters
}

const lightningMonsters = getAllMonstersByPower("Lightning")
console.log(lightningMonsters)
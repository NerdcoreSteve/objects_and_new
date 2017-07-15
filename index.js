const
    spiderman = {
        firstName: 'Peter',
        lastName: 'Parker',
        homeTown: 'NewYork'
    },
    superHero = (firstName, lastName, homeTown) => ({
        firstName, lastName, homeTown
    }),
    superHeroWithPowers = (firstName, lastName, homeTown, powers) =>
        Object.assign(
            {},
            superHero(firstName, lastName, homeTown),
            {powers}),
    person = (firstName, lastName) => ({
        firstName,
        lastName,
        fullName: function () {
            return `${this.firstName} ${this.lastName}`
        }
    }),
    spaceShip = function (type, engine, name) {
        this.type = type
        this.engine = engine
        this.name = name
        this.description = function () {
            return `The ${name} is a ${type} class star ship with a ${engine} engine`
        }
    },
    somePerson = person('Miss', 'Piggy')

console.log(Object.keys(spiderman))

console.log(superHero('Clark', 'Kent', 'Smallville'))

console.log(
    superHeroWithPowers(
        'Linda',
        'Lee', 'Midvale',
        ['flight', 'super strength', 'heat vision', 'ice breath', 'x-ray vision']))

console.log(person('Kermit', 'The Frog').fullName())

console.log(somePerson.fullName())
somePerson.firstName = 'Ms'
somePerson.lastName = 'Pacman'
console.log(somePerson.fullName())

somePerson.shoes = 'Chuck Taylor\'s'
console.log(JSON.stringify(somePerson))

console.log((new spaceShip('galaxy', 'warp', 'Enterprise')).description())

spaceShip('excelsior', 'warp', 'Excelsior')
console.log(global.description())

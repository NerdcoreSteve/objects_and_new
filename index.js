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
        fullName: () => return `${firstName} ${lastName}`
    })

    console.log(Object.keys(spiderman))
    console.log(superHero('Clark', 'Kent', 'Smallville'))
    console.log(
        superHeroWithPowers(
            'Linda',
            'Lee', 'Midvale',
            ['flight', 'super strength', 'heat vision', 'ice breath', 'x-ray vision']))

    console.log(person('Kermit', 'The Frog').fullName())

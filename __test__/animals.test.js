const fs = require('fs');
const {
    filterByQuery,
    findById,
    createNewAnimal,
    validateAnimal,
    } = require('../lib/animals.js');

const {animals} = require("../data/animals");

jest.mock('fs');
test ("create an animal object", () =>{
    const animal = createNewAnimal(
        {name: "Darlene", id: "cdsacscv"},
        animals
    );

    expect(animal.name).toBe("Darlene");
    expect(animal.id).toBe("cdsacscv");
});

test("filter by query", () => {
    const startingAnimals = [
        {
            id: "3",
            name: "Erica",
            species: "gorilla",
            diet: "omnivore",
            personalityTraits: ["quirky", "rash"],
        },
        {
            id: "4",
            name: "Noel",
            species: "bear",
            diet: "carnivore",
            personalityTraits: ["impish", "sassy", "brave"],
        },
    ];

    const updatedAnimals = filterByQuery({ species: "gorilla"}, startingAnimals);

    expect(updatedAnimals.length).toEqual(1);
});

test("finds by id", () => {
    const startingAnimals = [
        {
            id: "3",
            name: "Erica",
            species: "gorilla",
            diet: "omnivore",
            personalityTraits: ["quirky", "rash"],
        },
        {
            id: "4",
            name: "Noel",
            species: "bear",
            diet: "carnivore",
            personalityTraits: ["impish", "sassy", "brave"],
        },
    ];
    const res = findById("3", startingAnimals);

    expect(res.name).toBe("Erica");
});

test("validates personality traits", () => {
    const animal ={
        id: "3",
        name: "Erica",
        species: "gorilla",
        diet: "omnivore",
        personalityTraits: ["quirky", "rash"],
        };
    const indvalidAnimal = {
        id: "3",
        name: "Erica",
        species: "gorilla",
        diet: "omnivore"
    };
    const res = validateAnimal(animal);
    const res2 = validateAnimal(indvalidAnimal);
    
    expect(res).toBe(true);
    expect(res2).toBe(false);
});
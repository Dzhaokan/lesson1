// class Dog {
//     constructor(weight, height, color) {
//         this.weight = weight
//         this.height = height
//         this.color = color
//     }
// }
//
// const hatiko = new Dog(
//     80,
//     150,
//     "violet"
// )
//
// console.log(hatiko)

// Наследование

// class Animal {
//     constructor(type, gender, color, voiceText) {
//         this.type = type;
//         this.gender = gender;
//         this.color = color;
//         this.voiceText = voiceText;
//     }
// }
//
// class Cat extends Animal {
//     constructor(type, gender, color, voiceText, name, purposeText) {
//         super(type, gender, color, voiceText);
//         this.name = name;
//         this.purposeText = purposeText;
//     }
// }
//
// const Aybek = new Cat(
//     'domestic',
//     'male',
//     'blue',
//     'meoooow',
//     'Aybek',
//     'security'
// )
// console.log(Aybek)
//
// function Animal(type, gender, color, voiceText, name, purposeText) {
//     console.log(type, gender, color, voiceText, name, purposeText)
// }
//
// Animal('domestic', 'male', 'blue', 'meooow', 'Aybek', 'security')

class Building {
    constructor(height, floors, windows, doors, material) {
        this.height = height;
        this.floors = floors;
        this.windows = windows;
        this.doors = doors;
        this.material = material;
    }
}

class House extends Building {
    constructor(height, floors, windows, doors, material, purpose, name, capacity, square, dateBuilt) {
        super(height, floors, windows, doors, material);
        this.purpose = purpose;
        this.name = name;
        this.capacity = capacity;
        this.square = square;
        this.dateBuilt = dateBuilt;
    }
}
const home = new House(
    '100m',
    11,
    100,
    250,
    'brick',
    'residential',
    'Kanat Group',
    '2500',
    '2500m2',
    '10.09.2020'
)
console.log(home)

class School extends Building {
    constructor(height, floors, windows, doors, material, purpose, name, capacity, professional, dateBuilt) {
        super(height, floors, windows, doors, material);
        this.purpose = purpose;
        this.name = name;
        this.capacity = capacity;
        this.professional = professional;
        this.dateBuilt = dateBuilt
    }
}

const shkola = new School(
    '50m',
    3,
    75,
    125,
    'concrete',
    'educational',
    'Lomonosova',
    1500,
    '1000m2',
    '01.02.1999'
)
console.log(shkola)
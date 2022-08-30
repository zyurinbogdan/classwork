//  methods, get, set, property descriptor, 
// this, call, apply, bind, setTimeout, setInterval
// func compose


const person = {
    name: 'John',
    age: 23,
    stack: ['CSS', 'HTML', 'JS'],
    liveInCity: true,
    run: () => {
        console.log('person runs');
    },
    walk (destination) {
        console.log(`${person.name} walks to ${destination}`);
    },
    eat: function () {
        console.log('person eats');
    }
};


const person2 = {
    name: 'Valerchik',
    age: 53,
    stack: ['DIG', 'SOW', 'HARVEST'],
    liveInCity: false,
    run: () => {
        console.log('person runs');
    },
    walk (destination) {
        console.log(`${person2.name} walks to ${destination}`);
    },
    eat: function () {
        console.log('person eats');
    }
};

// this
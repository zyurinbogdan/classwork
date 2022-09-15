// 1 coordinates

// class Point {
//     constructor (x, y) {
//         this.x = x;
//         this.y = y;
//     }
// }
// class Line {
//     constructor (point1, point2) {
//         this.point1 = point1;
//         this.point2 = point2;
//     }
    
//     get lngth () {
//         return Math.sqrt(Math.pow(this.point1.x - this.point2.x) + Math.pow(this.point1.y - this.point2.y));
//     } 
//     static canBeTriangle (line1, line2, line3) {
//         return line1.lngth + line2.lngth > line3.lngth && 
//         line1.lngth + line3.lngth > line2.lngth && 
//         line2.lngth + line3.lngth > line1.lngth;
//     }
// }
// let point1 = new Point(1, 1);
// let point2 = new Point(3, 1);
// let point3 = new Point(1, 4);
// let point4 = new Point(3, 6);
// let point5 = new Point(7, 12);
// let point6 = new Point(32, 4);

// let line1 = new Line(point1, point2);
// let line2 = new Line(point3, point4);
// let line3 = new Line(point5, point6);





// console.log(Line.canBeTriangle(line1, line2, line3));




// 2 


// class Human {
//     constructor (name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     sayHi () {
//         return `${this.name} darova `;
//     }
// }



// class Programmer extends Human {
//     constructor (technologies, ...args) {
//         super(...args);
//         this.technologies = technologies;
//     }
//     startCoding () {
//         return `${this.name} is coding using ${this.technologies}`
//     }
// }



// class Sportsman extends Human {
//     constructor(medals, ...args) {
//         super(...args);
//         this.medals = medals;
//     }
// }


// class FootballPlayer extends Sportsman {
//     constructor(team, ...args) {
//         super(...args);
//         this.team = team;
//     }

//     run(speed) {
//         return `${this.name} is running ${speed} kmph`
//     }
// }


// class HockeyPlayer extends Sportsman {
//     constructor(weight, ...args) {
//         super(...args);
//         this.weight = weight;
//     }

//     pushOpponent(opponentName) {
//         return `${this.name} pushed ${opponentName} and used ${this.weight}`
//     }
// }


//3 


// class Goods {
//     constructor(name, value, color, params){
//         this.name = name;
//         this.value = value;
//         this.color = color;
//         this.params = params;
//     }
// }

// class Params {
//     constructor(width, lenght, height)
    
// }


// 4 про батарейку

class Battery {
    #energy = 100;

    constructor (type) {
        this.type = type;
    }

    consumeEnergy (amount) {
        if (amount <= this.#energy) {
            this.#energy -= amount;
        }       
    }

    get energy () {
        return this.#energy;
    }

    recharge () {
        this.#energy = 100;
    }
}

class Device {
    #batteries = [];

    constructor (batteryType) {
        this.batteryType = batteryType;
    }

    insertBatteries (bt1, bt2) {
        if (bt1?.type !== this.batteryType || bt2?.type !== this.batteryType) {
            console.log('battery types are incompatible');
        } else if (this.#batteries.length) {
            console.log('batteries are already set');
        } else {
            this.#batteries = [bt1, bt2];
        }
    }

    removeBatteries () {
        this.#batteries = [];
    }

    consumeEnergy (val) {
        this.#batteries.forEach((bt) => bt.consumeEnergy(val));
    }

    areBatteriesCharged () {
        return this.#batteries.every((bt) => bt.energy);
    }

    hasBatteries () {
        return Boolean(this.#batteries.length);
    }
}

class Gamepad extends Device {
    #isConnected = false;

    constructor (model, batteryType) {
        super(batteryType);
        this.model = model;
    }

    connectTo (device) {
        if (this.hasBatteries() && !this.#isConnected) {
            console.log(`${this.model} has been connected to ${device}`);
            this.#isConnected = true;
        } else {
            console.log(`This ${this.model} doesn't have batteries or is already connected`);
        }
    }
    disconnect () {
        this.#isConnected = false;
    }

    play () {
        if (this.areBatteriesCharged() && this.hasBatteries()) {
            this.consumeEnergy(10);
            console.log(`you are playing`);
        } else {
            this.#isConnected = false;
            console.log(`Please change/insert batteries`);
        }
    }
}

const bt1 = new Battery('AA');
const bt2 = new Battery('AA');
const xboxGamepad = new  Gamepad('Xbox Gamepad', 'AA');

xboxGamepad.insertBatteries(bt1,bt2);
xboxGamepad.connectTo('Playstation');
xboxGamepad.play();
xboxGamepad.play();
xboxGamepad.play();
xboxGamepad.play();
xboxGamepad.play();
xboxGamepad.play();
xboxGamepad.play();
xboxGamepad.play();
xboxGamepad.play();
xboxGamepad.play();
xboxGamepad.play();
xboxGamepad.play();
xboxGamepad.play();
xboxGamepad.removeBatteries();
xboxGamepad.play();
xboxGamepad.play();
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


class Human {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

    sayHi () {
        return `${this.name} darova `;
    }
}



class Programmer extends Human {
    constructor (technologies, ...args) {
        super(...args);
        this.technologies = technologies;
    }
    startCoding () {
        return `${this.name} is coding using ${this.technologies}`
    }
}



class Sportsman extends Human {
    constructor(medals, ...args) {
        super(...args);
        this.medals = medals;
    }
}


class FootballPlayer extends Sportsman {
    constructor(team, ...args) {
        super(...args);
        this.team = team;
    }

    run(speed) {
        return `${this.name} is running ${speed} kmph`
    }
}


class HockeyPlayer extends Sportsman {
    constructor(weight, ...args) {
        super(...args);
        this.weight = weight;
    }

    pushOpponent(opponentName) {
        return `${this.name} pushed ${opponentName} and used ${this.weight}`
    }
}

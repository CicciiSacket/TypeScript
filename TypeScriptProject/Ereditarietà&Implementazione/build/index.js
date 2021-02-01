"use strict";
class Parallelogramma {
    constructor(side, hight) {
        this.side = side;
        this.hight = hight;
        this.getArea = () => {
            return this.side * this.hight;
        };
        this.getPerimeter = () => {
            return this.side * 4;
        };
    }
}
let parallelogramma = new Parallelogramma(12, 2);
console.log("Parallelogramma: perimetro", parallelogramma.getPerimeter(), " \t", "Parallelogramma: area", parallelogramma.getArea());
class Triangle {
    constructor(side, hight) {
        this.side = side;
        this.hight = hight;
        this.getArea = () => {
            return this.side * this.hight / 2;
        };
        this.getPerimeter = () => {
            return this.side * 3;
        };
    }
}
let triangle = new Triangle(4, 6);
console.log("triangolo: perimetro", triangle.getPerimeter(), " \t", "triangolo: area", triangle.getArea());
class Square {
    constructor(side) {
        this.side = side;
        this.getArea = () => {
            return this.side * this.side;
        };
        this.getPerimeter = () => {
            return this.side * 4;
        };
    }
}
let square = new Square(4);
console.log("quadrato: perimetro", square.getPerimeter(), " \t", "quadrato: area", square.getArea());
class Quadrato extends Parallelogramma {
    constructor() {
        super(...arguments);
        this.getArea = () => {
            return this.side * this.side;
        };
        this.getPerimeter = () => {
            return this.side * 4;
        };
        this.getResultArea = () => {
            return this.getArea();
        };
        this.getResultPerimeter = () => {
            return this.getPerimeter();
        };
    }
}
let quadrato = new Quadrato(12, 12);
console.log(quadrato.getResultArea(), "\t", quadrato.getResultPerimeter());

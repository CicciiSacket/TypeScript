interface Shape{
    side:number
    getArea():number
    getPerimeter():number
}

class Parallelogramma implements Shape{
    constructor(public side:number,public hight:number){}
    getArea = () =>{
        return this.side * this.hight;
    }
    getPerimeter = () =>{
        return this.side * 4
    }
}
let parallelogramma = new Parallelogramma(12,2)
console.log("Parallelogramma: perimetro",parallelogramma.getPerimeter(), " \t", "Parallelogramma: area",parallelogramma.getArea())

class Triangle implements Shape{
    constructor(public side:number,public hight:number){}
    getArea = () =>{
        return this.side * this.hight /2;
    }
    getPerimeter = () =>{
        return this.side * 3
    }
}
let triangle = new Triangle(4,6)
console.log("triangolo: perimetro",triangle.getPerimeter(), " \t", "triangolo: area",triangle.getArea())

class Square implements Shape{
    constructor(public side:number){}
    getArea = () =>{
        return this.side * this.side;
    }
    getPerimeter = () =>{
        return this.side * 4
    }
}
let square = new Square(4)
console.log("quadrato: perimetro",square.getPerimeter(), " \t", "quadrato: area",square.getArea())

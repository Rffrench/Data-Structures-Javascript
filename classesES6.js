//  Classes IN ES6
// NOTE:  This example of ES6 classes was not written by me. I have included it here to study it.


//They can be named or unnamed
// unnamed
let Rectangle = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};
console.log(Rectangle.name); // output: "Rectangle"


// named
let RectangleNamed = class Rectangle2 {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};
console.log(RectangleNamed.name); // output: "Rectangle2"



// Class constructor example
class MyRectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    // Getter
    get area() {
        return this.calcArea();
    }
    // Method
    calcArea() {
        return this.height * this.width;
    }
}

const square = new MyRectangle(10, 10);
console.log(square.area); // 100. Getter applied


// EXTENDS
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name); // call the super class constructor and pass in the name parameter
    }

    speak() {
        console.log(`${this.name} barks.`);
    }
}

let d = new Dog('Mitzie');
d.speak(); // Mitzie barks.
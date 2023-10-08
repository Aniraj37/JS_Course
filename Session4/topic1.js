

// --- Accessing the id = canvas

let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

console.log(canvas);
class MyClass {

    // Initial method / function of a class is a constructor
    // --- Constructor is called automatically as soon as constructor is intanciated. ----
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    myAdd() {
        return this.x + this.y;
    }
} // Class

let newclass = new MyClass(5, 6); /// This is an object

console.log(newclass.myAdd());
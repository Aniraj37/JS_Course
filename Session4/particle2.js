//! --- Accessing canvas tag using #ID ---
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");



//! --- Creating a class instead of function for simulation --
class Particle {

    //! ---Creating a constructor of initializing varaibles --
    constructor() {
        this.x = Math.floor(Math.random() * (1500 - 0) + 0);
        this.y = Math.floor(Math.random() * (750 - 0) + 0);
        this.radius = Math.floor(Math.random() * (50 - 10) + 10);
    }




    draw() {
        //! -- creating a drwaer method to draw an arc --
        context.beginPath();
        context.fillStyle = "black";
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fill();

    }

    move() {

        //! -- Creating another method to add a movement in the arc ---
        this.x += Math.random() * (1 - -1) + -1;
        this.y += Math.random() * (1 - -1) + -1;
    }
}



//! One way of intantiating the class
// let obj1 = new Particle();
// let obj2 = new Particle();

// obj1.draw();
// obj1.move();
// obj2.draw();





//! -- Alternavtive to use array for creating an object
// === Creating an object and pushing it to an array named particleArr

const particleArr = [];
const number = 20;

for (let i = 0; i < number; i++) {
    const object = new Particle();
    particleArr.push(object)
    console.log(particleArr);
}




function animate() {

    //! -- clearing the previous movements of the arc --
    //!! --- This code supports === window.requestAnimationFrame(animate); === 
    context.clearRect(0, 0, 1500, 750);


    //! --- running the loop n number of times to create and move the arc
    for (let i = 0; i < particleArr.length; i++) {
        particleArr[i].draw();
        particleArr[i].move();
    }


    window.requestAnimationFrame(animate);
}

animate();
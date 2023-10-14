// const canvas = document.getElementById('canvas');
// const c = canvas.getContext("2d");




// //! --- collision code

// // function collision() {
// //     if (Box.x + Box.width >= Box2.x && Box.x <= Box2.x + Box2.width && Box.y + Box.height >= Box2.y && Box.y <= Box2.y + Box2.height) {

// //     }
// // }

// //! -- class to create a box

// class Box {
//     constructor() {

//         this.position = {
//             x: 100,
//             y: 100,
//         };
//         this.size = {

//             width: 50,
//             height: 50,
//         };

//         this.velocity = {
//             x: 1,
//             y: 1,
//         }

//         //! adding accelration
//         this.acceleration = 0.2;


//     }

//     draw() {
//         c.beginPath();
//         c.rect(this.position.x, this.position.y, this.size.width, this.size.height);
//         c.fill();

//     }




//     move() {
//         this.velocity.y = this.velocity.y + this.acceleration;
//         this.position.y = this.position.y + this.velocity.y;

//         console.log(this.velocity);
//     }

//     borderCollision() {
//         if (this.position.y + this.size.height >= canvas.height) {
//             //! this rectricts box from goin all the way down
//             this.position.y = canvas.height - this.size.height;
//             console.log("Collision occured");
//             this.velocity.y = this.velocity.y * -0.4;
//         }
//     }

//     update() {
//         this.draw();
//         this.move();
//         this.borderCollision();
//     }
// }


// const obj = new Box();

// function animate() {
//     c.clearRect(0, 0, canvas.width, canvas.height);
//     obj.update();
//     window.requestAnimationFrame(animate);
// }

// animate();



const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");


class Box {
    constructor() {
        this.box = {
            x: 100,
            y: 100,
            width: 100,
            height: 100,
        };
        this.box2 = {
            x: 250,
            y: 250,
            width: 100,
            height: 100,
        };

        this.color = "black";

    }

    draw() {
        c.beginPath();
        c.fillStyle = this.color;
        c.fillRect(
            this.box.x - this.box.width / 2,
            this.box.y - this.box.height / 2,
            this.box.width,
            this.box.height
        );

        c.beginPath();
        c.fillStyle = this.color;
        c.fillRect(
            this.box2.x - this.box2.width / 2,
            this.box2.y - this.box2.height / 2,
            this.box2.width,
            this.box2.height
        );
    }

    checkCollision() {
        if (
            this.box.x + this.box.width >= this.box2.x &&
            this.box.x <= this.box2.x + this.box2.width &&
            this.box.y + this.box.height >= this.box2.y &&
            this.box.y <= this.box2.y + this.box2.height
        ) {
            this.color = "red";
        } else {
            this.color = "black";
        }
    }

    move() {
        document.addEventListener("mousemove", (e) => {
            this.box.x = e.clientX;
            this.box.y = e.clientY;
        })
    }

    update() {
        this.draw();
        this.checkCollision();
        this.move();
    }
}


const obj = new Box();

function animate() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    obj.update();
    requestAnimationFrame(animate);

}

animate();

// const canvas = document.getElementById("canvas");
// const c = canvas.getContext("2d");


// class Box {
//     constructor() {

//         this.position = {
//             x: Math.random() * canvas.width,
//             y: Math.random() * canvas.height,
//         };
//         this.size = {
//             width: 5,
//             height: 5
//         };
//         this.velocity = {
//             x: Math.random() * (1 - -1) + -1,
//             y: Math.random() * (1 - -1) + -1,
//             // y: 0
//         };

//         this.color = "gray";
//     };


//     draw() {
//         c.beginPath();
//         c.fillStyle = this.color;
//         c.rect(this.position.x, this.position.y, this.size.width, this.size.height);
//         c.fill();

//     }



//     move() {
//         this.position.x += this.velocity.x;
//         this.position.y += this.velocity.y;

//         if (this.position.x < 0 || this.position.x + this.size.width > canvas.width) {
//             this.velocity.x = -this.velocity.x; // Reverse the x-direction velocity
//         }
//         if (this.position.y < 0 || this.position.y + this.size.height > canvas.height) {
//             this.velocity.y = -this.velocity.y; // Reverse the y-direction velocity
//         }

//     }

//     update() {
//         this.draw();
//         this.move();
//     }

//     checkCollision(allBoxes, ind) {
//         allBoxes.forEach((element, index) => {
//             if (ind === index) return;
//             if (
//                 this.position.x + this.size.width >= element.position.x &&
//                 this.position.y + this.size.height >= element.position.y &&
//                 this.position.x <= element.size.width + element.position.x &&
//                 this.position.y <= element.size.height + element.position.y
//             ) {

//                 this.color = "red";
//                 element.color = "red";
//             } else {
//                 this.color = "blue";
//             }
//         });
//     }


// }


// let boxArr = [];

// for (let i = 0; i < 100; i++) {
//     boxArr.push(new Box());
// }


// function loop() {
//     c.clearRect(0, 0, canvas.width, canvas.height);
//     boxArr.forEach((item, index) => {
//         item.update();
//         item.checkCollision(boxArr, index);
//     });
//     requestAnimationFrame(loop);
// }

// loop();





//! --- canvas with arc ---
const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");


class Box {
    constructor() {

        this.position = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
        };
        this.size = {
            width: 5,
            height: 5
        };
        this.velocity = {
            x: Math.random() * (1 - -1) + -1,
            y: Math.random() * (1 - -1) + -1,
            // y: 0
        };

        this.color = "gray";
    };


    draw() {
        c.beginPath();
        c.fillStyle = this.color;

        //!! --- Creating an arc using width and height
        c.arc(
            this.position.x + this.size.width / 2, // x-coordinate of the center
            this.position.y + this.size.height / 2, // y-coordinate of the center
            this.size.width / 2, // radius
            0, // start angle in radians
            Math.PI * 2 // end angle in radians (to make a full circle)
        );
        c.fill();

    }



    move() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        if (this.position.x < 0 || this.position.x + this.size.width > canvas.width) {
            this.velocity.x = -this.velocity.x; // Reverse the x-direction velocity
        }
        if (this.position.y < 0 || this.position.y + this.size.height > canvas.height) {
            this.velocity.y = -this.velocity.y; // Reverse the y-direction velocity
        }

    }

    update() {
        this.draw();
        this.move();
    }

    checkCollision(allBoxes, ind) {
        allBoxes.forEach((element, index) => {
            if (ind === index) return;
            if (
                this.position.x + this.size.width >= element.position.x &&
                this.position.y + this.size.height >= element.position.y &&
                this.position.x <= element.size.width + element.position.x &&
                this.position.y <= element.size.height + element.position.y
            ) {

                this.color = "red";
                element.color = "red";
            } else {
                this.color = "blue";
            }
        });
    }


}


let boxArr = [];

for (let i = 0; i < 100; i++) {
    boxArr.push(new Box());
}


function loop() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    boxArr.forEach((item, index) => {
        item.update();
        item.checkCollision(boxArr, index);
    });
    requestAnimationFrame(loop);
}

loop();
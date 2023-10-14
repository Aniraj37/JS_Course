//! Collision with X and Y

const canvas = document.getElementById('canvas');
const c = canvas.getContext("2d");




//! -- class to create a box

class Box {
    constructor() {

        this.position = {
            x: 100,
            y: 100,
        };
        this.size = {

            width: 50,
            height: 50,
        };

        this.velocity = {
            x: 1,
            y: 1,
        }

        //! adding accelration
        this.acceleration = 0.1;


    }

    draw() {
        c.beginPath();
        c.rect(this.position.x, this.position.y, this.size.width, this.size.height);
        c.fill();

    }


    move() {
        this.velocity.y = this.velocity.y + this.acceleration;
        this.velocity.x = this.velocity.x + this.acceleration;
        this.position.y = this.position.y + this.velocity.y;
        this.position.x = this.position.x + this.velocity.x;

        console.log(this.velocity);
    }

    borderCollision() {
        if (this.position.y + this.size.height >= canvas.height) {
            //! this rectricts box from goin all the way down
            this.position.y = canvas.height - this.size.height;
            console.log("Collision occured");
            this.velocity.y = this.velocity.y * -0.4;
        }

        if (this.position.x + this.size.width >= canvas.width) {
            //! this rectricts box from goin all the way down
            this.position.x = canvas.width - this.size.width;
            console.log("Collision occured");
            this.velocity.x = this.velocity.x * -0.4;
        }
    }

    update() {
        this.draw();
        this.move();
        this.borderCollision();
    }
}


const obj = new Box();

function animate() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    obj.update();
    window.requestAnimationFrame(animate);
}

animate();
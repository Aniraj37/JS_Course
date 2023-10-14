class Player {
    constructor() {
        this.position = {
            x: canvas.width / 2.8,
            y: canvas.height / 1.7
        };

        this.velocity = {
            x: 0,
            y: 0,
        };

        this.size = 50;

        this.image = new Image();
        this.image.src = ".././../Session7/image/ship1.png";

        this.maxX = canvas.width - this.size;
        this.maxY = canvas.height - this.size;


    }

    draw() {
        c.beginPath();
        c.fillStyle = "red";
        c.drawImage(this.image, this.position.x, this.position.y, this.size, this.size)
        // c.fillRect(this.position.x, this.position.y, this.size, this.size);

    }


    move() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        //!! --- Boundry checks to keep the player within the canvas
        if (this.position.x < 0) {
            this.position.x = 5
        } else if (this.position.x > this.maxX) {
            this.position.x = this.maxX - 5
        }


        if (this.position.y < 0) {
            this.position.y = 0
        } else if (this.position.y > this.maxY) {
            this.position.y = this.maxY
        }


        //!! --- Mistake to avoid ---
        //     document.addEventListener("click", () => {
        //         console.log("Never put event inside loop");
        //     });
    }


    update() {
        this.draw();
        this.move();
    }
}
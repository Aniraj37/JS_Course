class Bird {

    constructor() {

        this.position = {
            x: canvas.width / 2,
            y: 0
        };

        this.size = {
            width: 50,
            height: 50
        };


        this.isDead = false;


        this.velocity = {
            x: 0,
            y: 2,
        };

        this.acceleration = 0.2;


        this.imageIndex = 0;
        this.images = [
            "../../Session9/image/Frame-1.png",
            "../../Session9/image/Frame-2.png",
            // "../../Session9/image/Frame-3.png",
            // "../../Session9/image/Frame-4.png"
        ]
        this.image = new Image();
        this.image.src = this.images[this.imageIndex];


        this.backgroundMusic = new Audio("../../Session9/sounds/qubodup-cfork-ccby3-jump.ogg");
    }


    toggleImages() {
        this.imageIndex = (this.imageIndex + 1) % this.images.length;
        this.image.src = this.images[this.imageIndex];
    }


    bounceSound() {
        this.backgroundMusic.play();
        this.backgroundMusic.volume = 0.2;
    }


    drawBird() {
        c.beginPath();
        c.fillStyle = "blue";
        c.drawImage(
            this.image,
            this.position.x - this.size.width / 2,
            this.position.y,
            this.size.width,
            this.size.height);
    }


    bottomBorderCollision() {
        if (this.position.y + this.size.width >= canvas.height) {
            this.position.y = canvas.height - this.size.width;
            this.isDead = true;
        }
    }

    topBorderCollision() {
        if (this.position.y + this.size.width <= 50) {
            this.position.y = this.size.width;
        }
    }


    birdJump() {
        this.velocity.y = -4;
    }


    birdMove() {
        this.velocity.y += this.acceleration;
        this.position.y += this.velocity.y;
    }


    //!! --- Calling above methods ---
    updateBird() {
        this.drawBird();
        if (!this.isDead) {
            this.birdMove();
            this.bottomBorderCollision();
            this.topBorderCollision();
        }
    }
}
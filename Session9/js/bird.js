class Bird {

    constructor() {

        //!! --- Image position & size ---
        this.position = {
            x: canvas.width / 2,
            y: 0
        };

        this.size = {
            width: 50,
            height: 50
        };


        //!! --- check if bird is alive or dead ---
        this.isDead = false;


        //!! --- velocity and acceleration ---
        this.velocity = {
            x: 0,
            y: 2,
        };

        this.acceleration = 0.2;


        //!! --- Bird Image togglling ---
        this.image_index = 0;
        this.images = [
            "../../Session9/image/Frame-1.png",
            "../../Session9/image/Frame-2.png",
            // "../../Session9/image/Frame-3.png",
            // "../../Session9/image/Frame-4.png"
        ]
        this.image = new Image();
        this.image.src = this.images[this.image_index];


        //!! ---Load the music --
        this.background_music = new Audio("../../Session9/sounds/qubodup-cfork-ccby3-jump.ogg");
    }


    //!! --- Bird Image togglling ---
    change_images() {
        this.image_index = (this.image_index + 1) % this.images.length;
        this.image.src = this.images[this.image_index];
    }

    //!! --- method for making sound on bounce ---
    bounce_sound() {
        this.background_music.play();
        this.background_music.volume = 0.2;
    }


    //!! --- drawing bird image ---
    draw() {
        c.beginPath();
        c.fillStyle = "blue";
        // c.fillRect(this.position.x - this.size.width / 2, this.position.y, this.size.width, this.size.height);
        c.drawImage(
            this.image,
            this.position.x - this.size.width / 2,
            this.position.y,
            this.size.width,
            this.size.height);
    }


    //!! --- Making sure bird doesn't drop ---
    border_collision() {
        if (this.position.y + this.size.width >= canvas.height) {
            this.position.y = canvas.height - this.size.width;
            this.isDead = true;
        }


        //!! --- this ensure bird does not go above the screen ---
        if (this.position.y + this.size.width <= 50) {
            this.position.y = this.size.width;
            // this.isDead = true;
        }
    }


    //!! --- Reverse falling ---
    jump() {
        this.velocity.y = -5;
    }


    //!! --- droping bird from top to bottom ---
    move() {
        this.velocity.y += this.acceleration;
        this.position.y += this.velocity.y;
    }


    //!! --- Calling above methods ---
    update() {
        this.draw();
        //!! --- move if bird is not dead ---
        //!! --- "!" exclamation mark checks if the isDead is false or not similar to this.isDead === false
        if (!this.isDead) {
            this.move();
            this.border_collision();
        }
    }
}
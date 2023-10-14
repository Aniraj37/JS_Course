class Background {
    constructor(x = 0, y = 0) {

        //!! --- Image position & size ---
        this.position = {
            x: x,
            y: y
        };

        this.size = {
            width: canvas.width,
            height: canvas.height,
        };

        //!! --- velocity and acceleration ---
        this.velocity = {
            x: -1,
            y: 0,
        };


        //!! --- loading background image ---
        this.image = new Image();
        this.image.src = "../../Session9/image/bg_night.png";
    }

    //!! --- creating a background image ---
    draw() {
        c.beginPath();
        c.fillStyle = "blue";
        // c.fillRect(this.position.x - this.size.width / 2, this.position.y, this.size.width, this.size.height);
        c.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.size.width,
            this.size.height);
    }

    //!! --- move screen go left ---
    move_background_to_left() {
        if (this.position.x + this.size.width <= 0) {
            this.position.x = this.size.width;
        }
        this.position.x += this.velocity.x;

    }

    //!! --- calling above methods ---
    update(isDead) {
        this.draw();

        //!! --- move screen left until bird is alive ---
        if (!isDead) {

            this.move_background_to_left();
        }
    }
}
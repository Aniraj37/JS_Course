class Background {
    constructor(x = 0, y = 0) {

        this.position = {
            x: x,
            y: y
        };

        this.size = {
            width: canvas.width,
            height: canvas.height,
        };


        this.velocity = {
            x: -1,
            y: 0,
        };



        this.image = new Image();
        this.image.src = "../../Session9/image/bg_night.png";
    }


    drawBackground() {
        c.beginPath();
        c.fillStyle = "blue";
        c.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.size.width,
            this.size.height);
    }


    moveBackgroundLeft() {
        if (this.position.x + this.size.width <= 0) {
            this.position.x = this.size.width;
        }
        this.position.x += this.velocity.x;
    }


    updateBackground(isDead) {
        this.drawBackground();

        if (!isDead) {
            this.moveBackgroundLeft();
        }
    }
}
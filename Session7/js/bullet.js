class Bullet {
    constructor(x, y) {
        this.position = {
            x: x,
            y: y,
        };

        this.velocity = {
            x: 0,
            y: -10,
        };

        this.size = 20;

        this.image = new Image();
        this.image.src = ".././../Session7/image/bullet.png";
    }

    draw() {
        c.beginPath();
        c.fillStyle = "white";
        c.drawImage(this.image, this.position.x, this.position.y, this.size, this.size)
        // c.arc(this.position.x, this.position.y, this.size / 2, this.size / 2, Math.PI ** 2);
        // c.fill()
    }

    move() {
        this.position.y += this.velocity.y;
    }

    update() {
        this.draw();
        this.move();
    }
}
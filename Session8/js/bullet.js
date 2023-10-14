class Bullet {
    constructor(x, y) {
        this.position = {
            x: x,
            y: y,
        };

        this.velocity = {
            x: 1,
            y: -10,
        };

        this.size = 20;

        const images =
            [
                ".././../Session8/image/spr_bullet_strip.png",
                ".././../Session8/image/spr_bullet_strip02.png",
                ".././../Session8/image/spr_bullet_strip03.png",
            ]
        this.image = new Image();
        this.image.src = images[Math.floor(Math.random() * 3)];
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
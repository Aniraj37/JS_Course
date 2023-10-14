class Enemy {
    constructor() {
        this.position = {
            x: Math.min(Math.random() * (canvas.width - 30), canvas.width - 30),
            y: -90
        };

        this.velocity = {
            x: 0,
            y: 1,
        };

        this.size = Math.random() * (60 + 20) + 20;

        this.image = new Image();
        const images =
            [
                ".././../Session8/image/asteroid.png", ".././../Session8/image/asteroid2.png"
            ]
        this.image.src = images[Math.floor(Math.random() * 2)];

    }

    draw() {
        c.beginPath();
        c.fillStyle = "red";
        c.drawImage(this.image, this.position.x, this.position.y, this.size, this.size)

        // c.fillRect(this.position.x, this.position.y, this.size, this.size);

    }

    move() {
        this.position.y += this.velocity.y;
    }



    collision_with_bullets(bullets) {
        //!! Check collision between enemy and player

        for (let i = 0; i < bullets.length; i++) {

            if (this.position.x + this.size >= bullets[i].position.x &&
                this.position.x <= bullets[i].position.x + bullets[i].size &&
                this.position.y + this.size >= bullets[i].position.y &&
                this.position.y <= bullets[i].position.y + bullets[i].size
            ) {
                this.velocity.y = 0;
                this.position.x = -200;
                this.position.y = -200;

            }
        }
    }

    collision(player) {
        //!! Check collision between enemy and player

        if (
            this.position.x + this.size >= player.position.x &&
            this.position.x <= player.position.x + player.size &&
            this.position.y + this.size >= player.position.y &&
            this.position.y <= player.position.y + player.size
        ) {

            player.isAlive = false;
        }
    }



    update() {
        this.draw();
        if (player.isAlive) {

            this.move();
        }
    }
}
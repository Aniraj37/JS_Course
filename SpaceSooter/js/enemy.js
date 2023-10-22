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


        this.size = Math.random() * (60 + 40) + 40;
        this.image = new Image();
        const images =
            [
                ".././../SpaceSooter/image/Asteroid-A-10-00.png",
                ".././../SpaceSooter/image/Asteroid-A-10-01.png",
                ".././../SpaceSooter/image/Asteroid-A-10-02.png",
                ".././../SpaceSooter/image/Asteroid-A-10-03.png"
            ]
        this.image.src = images[Math.floor(Math.random() * 4)];
    }


    draw_enemy() {
        c.beginPath();
        c.fillStyle = "red";
        c.drawImage(this.image, this.position.x, this.position.y, this.size, this.size)
    }

    move_enemy() {
        this.position.y += this.velocity.y;
    }


    collision_with_bullets(bullets) {

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


    collision_with_player(player) {
        if (
            this.position.x + this.size >= player.position.x &&
            this.position.x <= player.position.x + player.size &&
            this.position.y + this.size >= player.position.y &&
            this.position.y <= player.position.y + player.size
        ) {

            player.isAlive = false;
        }
    }



    update_enemy() {
        this.draw_enemy();
        if (player.isAlive) {

            this.move_enemy();
        }
    }
}
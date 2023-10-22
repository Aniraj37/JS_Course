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


        this.gunsound = new Audio("../../Session8/sounds/alienshoot2.wav");
    }


    draw_bullets() {
        c.beginPath();
        c.fillStyle = "white";
        c.drawImage(this.image, this.position.x, this.position.y, this.size, this.size)
    }


    move_bullets() {
        this.position.y += this.velocity.y;
    }


    gun_sound() {
        this.gunsound.loop = true;
        this.gunsound.play();
        this.gunsound.volume = 0.2;
    }


    update_bullets() {
        this.draw_bullets();
        this.move_bullets();
    }
}
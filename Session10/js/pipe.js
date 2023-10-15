class Pipe {
    constructor() {
        this.position = {
            x: canvas.width,
            y: Math.random() * (0 - -300) + - 300
        };


        this.size = {
            width: 50,
            height: 320,
        };


        this.velocity = {
            x: -1.5,
            y: 0,
        }


        this.gap = 150;


        this.up_pipe = new Image();
        this.up_pipe.src = "../../Session10/image/pipe-up.png";

        this.down_pipe = new Image();
        this.down_pipe.src = "../../Session10/image/pipe-down.png";
    }


    draw_up_pipe() {
        c.beginPath();
        c.fillStyle = "green";
        c.drawImage(
            this.up_pipe,
            this.position.x,
            this.position.y,
            this.size.width,
            this.size.height
        );
    }


    draw_down_pipe() {
        c.beginPath();
        c.fillStyle = "green";
        c.drawImage(
            this.down_pipe,
            this.position.x,
            this.position.y + this.size.height + this.gap,
            this.size.width,
            this.size.height
        );
    }


    move() {
        if (this.position.x + this.size.width <= 0) {
            this.position.x = canvas.width;
            this.position.y = Math.random() * (0 - -250) + - 250
        }
        this.position.x += this.velocity.x
    }


    up_pipe_collision() {
        if (this.position.x + this.size.width >=
            bird.position.x - bird.size.width / 2 &&
            this.position.x <= bird.position.x - bird.size.width / 2 + bird.size.width &&
            this.position.y + this.size.height >= bird.position.y &&
            this.position.y <= bird.position.y + bird.size.height
        ) {
            console.log("collied");
            bird.isDead = true;
        }
    }


    down_pipe_collision() {
        if (this.position.x + this.size.width >=
            bird.position.x - bird.size.width / 2 &&
            this.position.x <= bird.position.x - bird.size.width / 2 + bird.size.width &&
            this.position.y + this.size.height + this.gap + this.size.height >=
            bird.position.y &&
            this.position.y + this.size.height + this.gap <= bird.position.y + bird.size.height
        ) {
            console.log("collied");
            bird.isDead = true;

        }
    }


    update() {
        this.draw_down_pipe();
        this.draw_up_pipe();

        if (!bird.isDead) {
            this.move();
            this.up_pipe_collision();
            this.down_pipe_collision();
        }
    }
}
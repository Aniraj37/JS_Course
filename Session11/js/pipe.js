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


        this.upPipe = new Image();
        this.upPipe.src = "../../Session10/image/pipe-up.png";

        this.downPipe = new Image();
        this.downPipe.src = "../../Session10/image/pipe-down.png";
    }


    drawUpPipe() {
        c.beginPath();
        c.fillStyle = "green";
        c.drawImage(
            this.upPipe,
            this.position.x,
            this.position.y,
            this.size.width,
            this.size.height
        );
    }


    drawDownPipe() {
        c.beginPath();
        c.fillStyle = "green";
        c.drawImage(
            this.downPipe,
            this.position.x,
            this.position.y + this.size.height + this.gap,
            this.size.width,
            this.size.height
        );
    }


    movePipe() {
        if (this.position.x + this.size.width <= 0) {
            this.position.x = canvas.width;
            this.position.y = Math.random() * (0 - -250) + - 250
        }
        this.position.x += this.velocity.x
    }


    upPipeCollision() {
        if (this.position.x + this.size.width >=
            bird.position.x - bird.size.width / 2 &&
            this.position.x <= bird.position.x - bird.size.width / 2 + bird.size.width &&
            this.position.y + this.size.height >= bird.position.y &&
            this.position.y <= bird.position.y + bird.size.height
        ) {
            bird.isDead = true;
        }
    }


    downPipeCollision() {
        if (this.position.x + this.size.width >=
            bird.position.x - bird.size.width / 2 &&
            this.position.x <= bird.position.x - bird.size.width / 2 + bird.size.width &&
            this.position.y + this.size.height + this.gap + this.size.height >=
            bird.position.y &&
            this.position.y + this.size.height + this.gap <= bird.position.y + bird.size.height
        ) {
            bird.isDead = true;
        }
    }


    updatePipe() {
        this.drawDownPipe();
        this.drawUpPipe();

        if (!bird.isDead) {
            this.movePipe();
            this.upPipeCollision();
            this.downPipeCollision();
        }
    }
}
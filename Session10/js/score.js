class Score {
    constructor() {
        //!! positions for texts ---
        this.position = {
            x: canvas.width / 2 - 100,
            y: canvas.height / 2 - 80,
        };


        //!! --- to store the score and increase it every second ---
        this.game_score = 0;
        this.interval_id = null;
    }


    //!! --- Method to set a interval to increase score every second ---
    set_interval() {
        this.interval_id = setInterval(() => {
            this.game_score++
        }, 2000);
    }


    //!! --- Method that displays the score on top left conner ---
    draw_score() {
        c.beginPath();
        c.fillStyle = "white";
        c.font = "1.4rem sans serif";
        c.fillText(this.game_score, 10, 30);
    }


    final_score() {
        c.fillStyle = "white";
        c.font = "2.2rem sans-serif";
        c.fillText("Game Over", this.position.x, this.position.y);
        c.font = "1.4rem sans-serif";
        c.fillText("Score: " + this.game_score, this.position.x + 45, this.position.y + 40);
    }



    //!! --- Method that pauses the score count and displays final score and collision occurs ---
    game_over() {
        if (bird.isDead) {
            clearInterval(this.interval_id);
            this.final_score();
        }

    }
}

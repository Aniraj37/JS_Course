class Score {
    constructor() {
        this.position = {
            x: canvas.width / 2 - 100,
            y: canvas.height / 2 - 80,
        };


        this.gameScore = 0;
        this.intervalId = null;
    }


    intervalSetting() {
        this.intervalId = setInterval(() => {
            this.gameScore++
        }, 2000);
    }


    drawScore() {
        c.beginPath();
        c.fillStyle = "white";
        c.font = "1.4rem sans serif";
        c.fillText(this.gameScore, 10, 30);
    }


    finalScore() {
        c.fillStyle = "white";
        c.font = "2.2rem sans-serif";
        c.fillText("Game Over", this.position.x, this.position.y);
        c.font = "1.4rem sans-serif";
        c.fillText("Score: " + this.gameScore, this.position.x + 45, this.position.y + 40);
    }



    gameOver() {
        if (bird.isDead) {
            clearInterval(this.intervalId);
            this.finalScore();
        }

    }
}

const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");


//!! --- instantiating all the calss --- 
const bird = new Bird();
const bg = new Background(0, 0);
const bg2 = new Background(bg.size.width, 0);
const score = new Score();
const pipe = new Pipe();


//!! --- tracking game score ---
score.intervalSetting();


//!! --- game Loop and logic ---
function animate() {
    c.clearRect(0, 0, canvas.width, canvas.height);

    bg.updateBackground(bird.isDead);
    bg2.updateBackground(bird.isDead);

    pipe.updatePipe();

    bird.updateBird();

    score.drawScore();

    score.gameOver();

    requestAnimationFrame(animate); //60
}


//!! --- Using space to make bird jump ---
document.addEventListener("keydown", (event) => {

    if (event.code === "Space") {
        bird.birdJump();

        if (!bird.isDead) {
            bird.bounceSound();
            bird.toggleImages();
        }
    }

});


animate()
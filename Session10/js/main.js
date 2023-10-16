//!! --- accessing the canvas ---
const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");


//!! --- instantiating all the calss --- 
const bird = new Bird();
const bg = new Background(0, 0);
const bg2 = new Background(bg.size.width, 0);
const score = new Score();
const pipe = new Pipe();


//!! --- tracking game score ---
score.set_interval();


//!! --- game Loop and logic ---
function animate() {
    c.clearRect(0, 0, canvas.width, canvas.height);


    //!! --- background logic ---
    bg.update(bird.isDead);
    bg2.update(bird.isDead);
    console.log(bird.isDead);

    //!! pipe ---
    pipe.update();


    // console.log("Working");
    bird.update();


    //!! --- score sheet to display on top left conner ---
    score.draw_score();


    //!! --- stop the score counting if bird is dead and display gamee over ---
    score.game_over();



    requestAnimationFrame(animate); //60
}


//!! --- Using space to make bird jump ---
document.addEventListener("keydown", (event) => {

    if (event.code === "Space") {
        // console.log("jump");
        bird.jump();


        //!! --- Making bird flap its wings only if it is not dead ---
        if (!bird.isDead) {
            bird.bounce_sound();
            bird.change_images();
        }
    }

});


animate()
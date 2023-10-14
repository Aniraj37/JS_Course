//!! --- accessing the canvas ---
const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");


//!! --- instantiating the calss --- 
const bird = new Bird();
const bg = new Background(0, 0);
const bg2 = new Background(bg.size.width, 0);


//!! --- tracking game score ---
let gameScore = 0;

const interval_id = setInterval(() => {
    gameScore++;
}, 1000)



//!! --- Game Loop and logic ---
function animate() {
    c.clearRect(0, 0, canvas.width, canvas.height);


    //!! --- background logic ---
    bg.update(bird.isDead);
    bg2.update(bird.isDead);
    console.log(bird.isDead);



    console.log("Working");
    bird.update();


    //!! --- score sheet ---
    c.beginPath();
    c.fillStyle = "white";
    c.font = "30px sans serif";
    c.fillText(gameScore, 10, 20);

    //!! --- stop the score counting if bird is dead ---
    if (bird.isDead) {
        clearInterval(interval_id);

    }

    requestAnimationFrame(animate); //60
}





//!! --- Using space to make bird jump ---
document.addEventListener("keydown", (event) => {


    if (event.code === "Space") {
        console.log("jump");
        bird.jump();


        //!! --- Making bird flap its wings only if it is not dead ---
        if (!bird.isDead) {

            bird.change_images();
        }
    }

});


animate()
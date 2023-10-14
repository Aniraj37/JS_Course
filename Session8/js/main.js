const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

//!! to make the canvas size to the screen size
// canvas.Width = window.innerWidth
// canvas.height = window.innerHeight


const player = new Player();


//!! === variable to store bullets ===
let all_bullets = [];
let enemies = [];
// let score = 0;

setInterval(() => {
    enemies.push(new Enemy());

}, Math.random() * (1500 - 1000) + 1000);


//! --- Game loop ---
function loop() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    canvas.style.backgroundImage = "url('../../Session8/image/backgroundSpace_.png')";
    player.update();
    // enemies.collision(player);

    for (let i = 0; i < enemies.length; i++) {
        enemies[i].update();
        enemies[i].collision(player);
        enemies[i].collision_with_bullets(all_bullets);
    }


    for (let i = 0; i < all_bullets.length; i++) {
        all_bullets[i].update();
    }


    requestAnimationFrame(loop); //60
}





//! --- Load the music
const backgroundMusic = new Audio("../../Session8/sounds/MyVeryOwnDeadShip.ogg");
const gunsound = new Audio("../../Session8/sounds/alienshoot2.wav");


loop();
document.addEventListener("keydown", (event) => {
    if (event.code === "ArrowUp") {
        player.velocity.y = -5;
    }

    if (event.code === "ArrowDown") {
        player.velocity.y = 5;
    }

    if (event.code === "ArrowLeft") {
        player.velocity.x = -5;
    }

    if (event.code === "ArrowRight") {
        player.velocity.x = 5;
    }

    //!! --- shooting the bullet using space ---
    if (event.code === "Space") {
        all_bullets.push(new Bullet(player.position.x + player.size / 3.35, player.position.y + player.size / 3.3));
        gunsound.loop = true;
        gunsound.play();
        gunsound.volume = 0.2;
    }
});



document.addEventListener("keyup", (event) => {
    if (event.code === "ArrowUp") {
        player.velocity.y = 0;
    }

    if (event.code === "ArrowDown") {
        player.velocity.y = 0;
    }

    if (event.code === "ArrowLeft") {
        player.velocity.x = 0;
    }

    if (event.code === "ArrowRight") {
        player.velocity.x = 0;
    }
    if (event.code === "Space") {
        gunsound.loop = false;
    }
});








// Play the music
function play() {

    backgroundMusic.play();
}

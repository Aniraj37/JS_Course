const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");


//!! --- Creating an object ---
const player = new Player();
const bullet = new Bullet();


//!! --- variable to store bullets ---
let all_bullets = [];
let enemies = [];


setInterval(() => {
    enemies.push(new Enemy());

}, Math.random() * (1500 - 1000) + 1000);


//!! --- Game loop ---
function loop() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    player.update_player();

    for (let i = 0; i < enemies.length; i++) {
        enemies[i].update_enemy();
        enemies[i].collision_with_player(player);
        enemies[i].collision_with_bullets(all_bullets);
    }


    for (let i = 0; i < all_bullets.length; i++) {
        all_bullets[i].update_bullets();
    }


    requestAnimationFrame(loop); //60
}


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
        bullet.gun_sound();
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
        bullet.gunsound.loop = false;
    }
});
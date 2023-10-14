const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

//!! to make the canvas size to the screen size
// canvas.Width = window.innerWidth
// canvas.height = window.innerHeight


const player = new Player();
// const bullet = new Bullet();


//!! === variable to store bullets ===
let all_bullets = [];


//! --- Game loop ---
function loop() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    player.update();


    for (let i = 0; i < all_bullets.length; i++) {
        all_bullets[i].update();
    }

    requestAnimationFrame(loop);
}

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
});



loop();


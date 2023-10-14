const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

// Load the music
const backgroundMusic = new Audio("./sounds/MyVeryOwnDeadShip.ogg");

const gunsound = new Audio("./sounds/MyVeryOwnDeadShip.ogg");

// Play the music
function play() {
    backgroundMusic.play();
}

canvas.addEventListener("click", () => {
    gunsound.play();
    gunsound.volume = 0.2;
});

//!! Image loading - You can add your image loading code here
const image = new Image();
image.src = './images/ship1.png';

let y = Math.random() * (200 + 0) + 0;
let x = Math.random() * (200 + 0) + 0;;
function animate() {
    // Add your animation logic here
    console.log("Working");

    c.clearRect(0, 0, canvas.width, canvas.height);
    c.drawImage(image, x, y, 50, 50);
    x++;
    y++;

    if (x >= canvas.width || y >= canvas.height) {
        x = 0;
        y = 0;
    }

    // Call requestAnimationFrame to continue the animation loop
    requestAnimationFrame(animate);
}

// Start the animation loop
animate();

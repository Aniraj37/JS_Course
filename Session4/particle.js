let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");


// Using Random method for coordinates
let min = 100;
let max = 400
let x = Math.floor(Math.random() * (max - min) + min);
let y = Math.floor(Math.random() * (max - min) + min);
let radius = Math.floor(Math.random() * (100 - 10) + 10);

console.log(x);

// -- Game Loop ---

function animate() {


    // -- clearing the previous data --
    context.clearRect(0, 0, 500, 500);

    // 
    context.beginPath();
    context.fillStyle = "black";
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fill();

    x += Math.random() * (1 - -1) + -1;
    y += Math.random() * (1 - -1) + -1;

    window.requestAnimationFrame(animate);
}

animate();
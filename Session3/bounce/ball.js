
let ball = document.querySelector('.ball');

let info = document.querySelector('.info');
y = 1;
gravity = 1;


//!! -- One way of bouncing the ball. ---
// setInterval(() => {
//     if (y > 420) gravity = - gravity;
//     gravity += 1;
//     y += gravity;
//     ball.style.top = (y) + 'px';
//     info.innerText = "Y : " + y + ", G : " + gravity;

// }, 100);



//!! == Alternavtive solution
// setInterval to function
function Gravity() {
    if (y > 420) {
        gravity = - gravity;
    }

    gravity += 1;
    y += gravity;
    ball.style.top = (y) + 'px';
    info.innerText = "Y : " + y + ", G : " + gravity;

    //! === running the frames until it is less than equal to 447 ===
    if (y <= 447) {

        window.requestAnimationFrame(Gravity);
    }
    else {
        console.log("Done");
    }
    // else if (y == 435) {
    //     window.requestAnimationFrame(Gravity);
    // }

}

Gravity();
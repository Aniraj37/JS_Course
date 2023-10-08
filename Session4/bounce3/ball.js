
let ball = document.querySelector('.ball');

let info = document.querySelector('.info');





class BouncingBall {

    //! --- Constructor ---
    constructor() {

        this.y = 1;
        this.gravity = 1;
    }

    Bounce() {
        if (this.y > 420) {
            this.gravity = - this.gravity;
        }

        this.gravity += 1;
        this.y += this.gravity;
        ball.style.top = (this.y) + 'px';
        info.innerText = "Y : " + this.y + ", G : " + this.gravity;


    }
}


//! === Creating an object ===
const obj = new BouncingBall();



//!! == Alternavtive solution
// setInterval to function
function Gravity() {

    obj.Bounce() //! === To bounce the ball

    //! === running the frames until it is less than equal to 447 ===
    if (obj.y <= 447) {

        window.requestAnimationFrame(Gravity);
    }
    else {
        console.log("Done");
    }

}



// Gravity();


//! === Adding a condition to reset the y it reachs to the base. 
addEventListener("keypress", () => {
    if (obj.y >= 448) {
        obj.y = 1; // Reset xy
        cancelAnimationFrame(Gravity); // Stop the animation
    } else {
        Gravity();
    }
});
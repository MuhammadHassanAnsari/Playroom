let startbtn = document.querySelector(".start");
let time = document.querySelector(".time");
let timer = 30;

let isrunning = false;


startbtn.addEventListener("click", () => {
    if (isrunning === true) {
        return;
    } else {
        isrunning= true;

        let timevalue = setInterval(() => {
git             timer--;

            time.textContent = timer;

            if (timer === 0) {
                clearInterval((timevalue));
            }

        }, 1000);
    }
    console.log("Game Start");



})
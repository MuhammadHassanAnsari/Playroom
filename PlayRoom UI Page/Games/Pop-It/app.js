let startbtn = document.querySelector(".start");
let time = document.querySelector(".time");
let finalscore = document.querySelector(".final-score");
let targetgen = document.querySelector(".game-target");
let scoreelement = document.querySelector(".score");
let restartbtn = document.querySelector(".restart");

let score = 0;
let timer = 30;
let timevalue;

let isrunning = false;


function createTarget() {
    let newdiv = document.createElement("div");
    newdiv.classList.add('target');
    let randomposition = Math.random() * (targetgen.clientWidth - newdiv.clientWidth);
    let randomposition1 = Math.random() * (targetgen.clientHeight - newdiv.clientHeight);   

    newdiv.style.left = `${randomposition}px`;
    newdiv.style.top = `${randomposition1}px`;

    targetgen.appendChild(newdiv);
    newdiv.addEventListener("click", () => {

        score++;
        scoreelement.textContent = score;
        // console.log(scoreelement); 
        newdiv.remove();

        createTarget();
    })
}



function starttime() {
    clearInterval(timevalue);
    timevalue = setInterval(() => {
        timer--;

        time.textContent = `Time left: ${timer}`;

        if (timer === 0) {
            clearInterval((timevalue));
            isrunning = false;
            targetgen.innerHTML = "";
            finalscore.style.display = "block";
            finalscore.textContent = `👑 Final Score: ${score}`;
            // console.log(finalscore);
        }

    }, 1000);
}

startbtn.addEventListener("click", () => {
    if (timer === 0) {
        return;

    }

    if (isrunning === true) {
        return;
    }



    isrunning = true;


    console.log("Game Start");

    starttime();
    createTarget();




})

restartbtn.addEventListener("click", () => {
    clearInterval(timevalue);

    timer = 30;
    score = 0;
    isrunning = true;


    scoreelement.textContent = score;
    time.textContent = timer;

    finalscore.style.display = "none";
    targetgen.innerHTML = "";

    starttime();
    createTarget();
})
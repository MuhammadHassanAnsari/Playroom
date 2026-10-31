let startbtn = document.querySelector(".start");
let timevalue = document.querySelector(".timer");
let scorevalue = document.querySelector(".score");
let selectTarget = document.querySelectorAll(".box");
let maintargetBox = document.querySelector(".container");
let restartbtn = document.querySelector(".restart");
let finalscore = document.querySelector(".finalscore");

let timer = 30;
let score = 0;
let timevalue1;

let isrunning = false;


function createTarget() {
    if (isrunning === false) {
        return;
    }

    let newdiv = document.createElement("img");
    newdiv.src = "../../../Assests/mice.png";
    newdiv.classList.add('target-pro');


    let random = Math.random() * 12;
    let random1 = Math.floor(random);


    selectTarget[random1].appendChild(newdiv);


    newdiv.addEventListener("click", () => {

        score++;
        scorevalue.textContent = score;

        newdiv.remove();
        createTarget();
    })

}


function timestart() {
    clearInterval(timevalue1);
    timevalue1 = setInterval(() => {
        timer--;

        timevalue.textContent = `Time left : ${timer}`;


        if (timer === 0) {
            clearInterval(timevalue1);
            isrunning = false;

            for (let i = 0; i < selectTarget.length; i++) {
                selectTarget[i].innerHTML = "";

            }



            finalscore.style.display = "block";
            finalscore.style.color = "white";
            finalscore.textContent = `👑 Final Score: ${score}`;

        }

    }, 1000)
}


startbtn.addEventListener("click", () => {

    if (timer === 0) {
        return;
    }

    if (isrunning === true) {
        return;
    }

    isrunning = true;

    timestart();
    createTarget();

})



restartbtn.addEventListener("click", () => {
    clearInterval(timevalue1);

    timer = 30
    score = 0;
    isrunning = true;


    scorevalue.textContent = score;
    timevalue.textContent = timer;

    finalscore.style.display = "none";

    for (let i = 0; i < selectTarget.length; i++) {
        selectTarget[i].innerHTML = "";

    }


    timestart();
    createTarget();
})
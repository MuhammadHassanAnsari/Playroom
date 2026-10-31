let startbtn = document.querySelector(".start");
let timevalue = document.querySelector(".timer");
let scorevalue = document.querySelector(".score");
let selectTarget = document.querySelectorAll(".box");
let maintargetBox = document.querySelector(".container");

let timer = 5;
let score = 0;
let isrunning = false;
let timevalue1;


function createTarget() {
    let newdiv = document.createElement("div");
    newdiv.classList.add('target-pro');

    
    let random = Math.random()*5;
    let random1 = Math.floor(random);
    
  
    selectTarget[random1].appendChild(newdiv);
    
    newdiv.addEventListener("click", ()=>{
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

        timevalue.textContent = timer;


        if (timer === 0) {
            clearInterval(timevalue1);
            isrunning = false;


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

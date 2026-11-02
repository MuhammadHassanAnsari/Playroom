
let punchSound = new Audio("punch.mp3");
let blockSound = new Audio("block.mp3");

document.addEventListener("keydown", function (event) {

    if (event.key.toLowerCase() === "a" || event.key.toLowerCase() === "A") {
        punchSound.currentTime = 0;
        punchSound.play();
    }

    if (event.key.toLowerCase() === "d") {
        blockSound.currentTime = 0;
        blockSound.play();
    }

});
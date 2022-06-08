
//Header
var headerV = true;
function Navi() {
    if (headerV == true) {
        document.getElementById("header").style.display = "none";
        headerV = false;
    }
    else {
        document.getElementById("header").removeAttribute("style");
        headerV = true;
    }
}


//Snake Game

//Varibel Sammlung
var playerStandortX = [0];
var playerStandortY = [0];
var loose = false;
var right = 0;
var left = 0;
var up = 0;
var down = 10;
var richtungAngegeben = true;
var ersterStart = true;

//image Sammlung
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
const playerimg = new Image();
playerimg.src = 'img/player.png';


function gameloop() {

    if (ersterStart) {
        firstStart();
    }

    //Eigentlicher Gameloop
    var myInterval = window.setInterval(game, 250);

    function game() {
        player();
        draw();
        richtungAngegeben = false;
        if (loose) {
            clearTimeout(myInterval);
        }
    }
}

function player() {
        playerStandortX.push(playerStandortX[0] + right - left);
        playerStandortY.push(playerStandortY[0] + down - up);
        playerStandortX.shift();
        playerStandortY.shift();
}

function draw() {
    ctx.clearRect(0, 0, 320, 320);
    ctx.drawImage(playerimg, playerStandortX[0], playerStandortY[0]);
}

function restart() {
    playerStandortX = [0];
    playerStandortY = [0];
    loose = false;
    right = 0;
    left = 0;
    up = 0;
    down = 10;
    gameloop();
}

function firstStart() {

    ersterStart = false;
    //Header ausschalten
    if (headerV == true) {
        document.getElementById("header").style.display = "none";
        headerV = false;
    }

    //Ausschalten der drag-down-refresh funtion
    document.querySelector("body").style.overscrollBehavior = "contain";

    //Button visibility
    const startButton = document.getElementById("start");
    startButton.remove();
    document.getElementById("restart").style.visibility = "visible";

}

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
var scoreAnzeige = document.getElementById("score");
var score = 0;
var scoreAlt = 0;
var freePixelStandort = [0];
var snakePixelStandortX = [0];
var snakePixelStandortY = [0];
var loose = false;
var right = 0;
var left = 0;
var up = 0;
var down = 15;
var richtungAngegeben = true;

//image Sammlung
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
const snakeimg = new Image();
snakeimg.src = 'img/Snake.png';
const freePixelimg = new Image();
freePixelimg.src = 'img/freePixel.png';


function gameloop() {

    //Header ausschalten
    if (headerV == true) {
        document.getElementById("header").style.display = "none";
        headerV = false;
    }

    //Ausschalten der drag-down-refresh funtion
    document.querySelector("body").style.overscrollBehavior = "contain";

    //Eigentlicher Gameloop
    const myInterval = window.setInterval(game, 250);

    function game() {
        freeBodypixel();
        snake();
        bodypixelMatch();
        draw();
        richtungAngegeben = false;
        if (loose) {
            clearTimeout(myInterval);
        }

        //debug
        //console.log("SPX" + snakePixelStandortX[snakePixelStandortX.length - 1]);
        //console.log("SPY" + snakePixelStandortY[snakePixelStandortY.length - 1]);
        //console.log("FP" + freePixelStandort);
        //console.log(score);
        //console.log(snakePixelStandortX.length);
    }
}

function freeBodypixel() {
    if (freePixelStandort[0] == 0) {
        var randomX = Math.ceil(Math.random() * 100 / 5) * 15;
        var randomY = Math.ceil(Math.random() * 100 / 5) * 15;
        freePixelStandort = [];
        freePixelStandort.push(randomX, randomY);
        for (let i = 0; i < snakePixelStandortX.length; i++) {
            if (freePixelStandort[0] == snakePixelStandortX[i] && freePixelStandort[1] == snakePixelStandortY[i]) {
                freePixelStandort = [0];
                freeBodypixel();
            }
        }
    }
}

function snake() {
    if (score == scoreAlt) {
        snakePixelStandortX.push(snakePixelStandortX[snakePixelStandortX.length - 1] + right - left);
        snakePixelStandortY.push(snakePixelStandortY[snakePixelStandortY.length - 1] + down - up);
        snakePixelStandortX.shift();
        snakePixelStandortY.shift();
    }
    else {
        snakePixelStandortX.push(snakePixelStandortX[snakePixelStandortX.length - 1] + right - left);
        snakePixelStandortY.push(snakePixelStandortY[snakePixelStandortY.length - 1] + down - up);
        scoreAlt = score;
    }

    if (snakePixelStandortX[snakePixelStandortX.length - 1] > 300) {
        snakePixelStandortX.pop();
        snakePixelStandortX.push(0);
    }
    else if (snakePixelStandortX[snakePixelStandortX.length - 1] < 0) {
        snakePixelStandortX.pop();
        snakePixelStandortX.push(300);
    }
    else if (snakePixelStandortY[snakePixelStandortY.length - 1] > 300) {
        snakePixelStandortY.pop();
        snakePixelStandortY.push(0);
    }
    else if (snakePixelStandortY[snakePixelStandortY.length - 1] < 0) {
        snakePixelStandortY.pop();
        snakePixelStandortY.push(300);
    }
}

function bodypixelMatch() {
    for (let i = 0; i < snakePixelStandortX.length; i++) {
        if (freePixelStandort[0] == snakePixelStandortX[i] && freePixelStandort[1] == snakePixelStandortY[i]) {
            score++;
            freePixelStandort.shift();
            freePixelStandort.shift();
            freePixelStandort.push(0);
        }
    }
    for (let i = 0; i < snakePixelStandortX.length-1; i++) {
        if (snakePixelStandortX[snakePixelStandortX.length - 1] == snakePixelStandortX[i] && snakePixelStandortY[snakePixelStandortY.length - 1] == snakePixelStandortY[i]) {
            loose = true;
        }
    }
}

function draw() {
    ctx.clearRect(0, 0, 315, 315);
    for (let i = 0; i < snakePixelStandortX.length; i++) {
        ctx.drawImage(snakeimg, snakePixelStandortX[i], snakePixelStandortY[i]);
    }
    ctx.drawImage(freePixelimg, freePixelStandort[0], freePixelStandort[1]);
    scoreAnzeige.innerHTML = "Score: " + score;
}

function restart() {
    score = 0;
    scoreAlt = 0;
    freePixelStandort = [0];
    snakePixelStandortX = [0];
    snakePixelStandortY = [0];
    loose = false;
    right = 0;
    left = 0;
    up = 0;
    down = 15;
    gameloop();
}


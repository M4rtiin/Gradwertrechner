
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
var score = 1;
var scoreAlt = 1;
var freePixelStandort = [0];
var snakePixelStandortX = [0,15,15];
var snakePixelStandortY = [0, 0, 15];
var loose = false;
var laufrichtung = 0;

//image Sammlung
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
const snakeimg = new Image();
snakeimg.src = 'img/Snake.png';
const freePixelimg = new Image();
freePixelimg.src = 'img/freePixel.png';


function game() {
    freeBodypixel();
    snake();
    draw();
    bodypixelMatch();
}

function freeBodypixel() {
    if (freePixelStandort == 0) {
        var randomX = Math.ceil(Math.random()*100/5)*15;
        var randomY = Math.ceil(Math.random()*100/5)*15;
        freePixelStandort.pop();
        freePixelStandort.push(randomX, randomY);
    }
    return;
 
    //debug
    console.log(freePixelStandort);
}

function snake() {
    if (score == scoreAlt) {
        snakePixelStandortX.push(snakePixelStandortX[snakePixelStandortX.length - 1] + 15);
        snakePixelStandortY.push(snakePixelStandortY[snakePixelStandortY.length - 1] + 0);
        snakePixelStandortX.shift();
        snakePixelStandortY.shift();
    }
    else {
        snakePixelStandortX.push(snakePixelStandortX[snakePixelStandortX.length - 1] + 15);
        snakePixelStandortY.push(snakePixelStandortY[snakePixelStandortY.length - 1] + 0);
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
    //debug
    console.log(snakePixelStandortX);
    console.log(snakePixelStandortY);
}

function bodypixelMatch() {
    for (let i = 0; i < snakePixelStandortX; i++) {
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
}


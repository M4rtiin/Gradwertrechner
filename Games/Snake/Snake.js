
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
window.addEventListener("keydown", move, false);

//image Sammlung
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
const snakeimg = new Image();
snakeimg.src = 'img/Snake.png';
const freePixelimg = new Image();
freePixelimg.src = 'img/freePixel.png';

function gameloop() {
    if (headerV == true) {
        document.getElementById("header").style.display = "none";
        headerV = false;
    }
    document.querySelector("body").style.overscrollBehavior = "contain";

    const myInterval = window.setInterval(game, 250);

    function game() {
        freeBodypixel();
        snake();
        bodypixelMatch();
        draw();
        if (loose) {
            clearTimeout(myInterval);
        }

        //debug
        console.log(freePixelStandort);;
        console.log(snakePixelStandortX);
        console.log(snakePixelStandortY);
        console.log(score);

    }
}

function freeBodypixel() {
    if (freePixelStandort == 0) {
        var randomX = Math.ceil(Math.random() * 100 / 5) * 15;
        var randomY = Math.ceil(Math.random() * 100 / 5) * 15;
        freePixelStandort.pop();
        freePixelStandort.push(randomX, randomY);
        for (let i = 0; i < snakePixelStandortX.length; i++) {
            if (freeBodypixel[0] == snakePixelStandortX[i] && freeBodypixel[1] == snakePixelStandortY[i]) {
                freeBodypixel();
            }
        }
    }
    return;
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

function move(key) {
    if (key.keyCode == "39") {
        if (left == 15) {
            return;
        }
        right = 15;
        left = 0;
        up = 0;
        down = 0;
    }
    if (key.keyCode == "37") {
        if (right == 15) {
            return;
        }
        right = 0;
        left = 15;
        up = 0;
        down = 0;
    }
    if (key.keyCode == "38") {
        if (down == 15) {
            return;
        }
        right = 0;
        left = 0;
        up = 15;
        down = 0;
    }
    if (key.keyCode == "40") {
        if (up == 15) {
            return;
        }
        right = 0;
        left = 0;
        up = 0;
        down = 15;
    }
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


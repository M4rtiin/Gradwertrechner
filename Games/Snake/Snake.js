
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
var score = 0;
var scoreAlt = 0;
var freePixelStandort = [0];
var snakePixelStandort = [
    [75, 270],
    [150, 210],
];
var laufrichtung = 0;
//image Sammlung
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
const snakeimg = new Image();
snakeimg.src = 'img/Snake.png';
const freePixelimg = new Image();
freePixelimg.src = 'img/freePixel.png';


function game() {

}

function freeBodypixel() {
    if (freePixelStandort == 0) {
        var randomX = Math.ceil(Math.random()*100/5)*15;
        var randomY = Math.ceil(Math.random()*100/5)*15;
        freePixelStandort.pop();
        freePixelStandort.push(randomX, randomY);
        ctx.drawImage(freePixelimg, freePixelStandort[0], freePixelStandort[1]);
    }
    else {
        ctx.drawImage(freePixelimg, freePixelStandort[0], freePixelStandort[1]);
    }
    console.log(freePixelStandort);
}

function snake() {

}

function bodypixelMatch() {

}


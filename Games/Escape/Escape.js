
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

const level1 = [[0,0], [0,20], [0,30], [0,40], [0,50], [0,60], [0,70], [0,80], [0,90], [0,100], [0,110], [0,120], [0,130], [0,140], [0,150], [0,160], [0,170], [0,180], [0,190], [0,200], [0,210], [0,220], [0,230], [0,240], [0,250], [0,260],
    [0,270], [0,280], [0,290], [0,300], [0,310], [10,0], [10,40], [10,110], [10,310], [20,0], [20,20], [20,40], [20,60], [20,70], [20,90], [20,110], [20,130], [20,150], [20,170], [20,180], [20,200], [20,210], [20,220], [20,230], [20,240], [20,250], [20,260], [20,270],
    [20,280], [20,290], [20,310], [30,0], [30,20], [30,40], [30,60], [30,70], [30,90], [30,110], [30,150], [30,170], [30,180], [30,200], [30,240], [30,310], [40,0], [40,90], [40,110], [40,120], [40,130], [40,140], [40,150], [40,170], [40,180], [40,200], [40,220], [40,240],
    [40,260], [40,270], [40,280], [40,290], [40,300], [40,310], [50,0], [50,10], [50,20], [50,30], [50,40], [50,50], [50,60], [50,70], [50,90], [50,170], [50,180], [50,200], [50,260], [50,270], [50,280], [50,290], [50,300], [50,310], [60,0], [60,10], [60,20], [60,60],
    [60, 70], [60, 90], [60, 110], [60, 120], [60, 140], [60, 150], [60, 160], [60, 170], [60, 180], [60, 200], [60, 220], [60, 230], [60, 240], [60, 310], [70, 0], [70, 10], [70, 20], [70, 40], [70, 60], [70, 70], [70, 90], [70, 140], [70, 180], [70, 240], [70, 260], [70, 280], [70, 290], [70, 310],
    [80,0], [80,90], [80,110], [80,120], [80,140], [80,160], [80,180], [80,190], [80,200], [80,210], [80,220], [80,260], [80,280], [80,290], [80,310], [90,0], [90,20], [90,30], [90,40], [90,50], [90,60], [90,70], [90,90], [90,160], [90,180], [90,240], [90,280], [90,310],
    [100,0], [100,90], [100,110], [100,120], [100,130], [100,140], [100,150], [100,160], [100,180], [100,200], [100,240], [100,260], [100,300], [100,310], [110,0], [110,10], [110,20], [110,30], [110,40], [110,60], [110,70], [110,80], [110,90], [110,110], [110,150], [110,160], [110,200], [110,220],
    [110, 230], [110, 240], [110, 260], [110, 270], [110, 280], [110, 300], [110, 310], [120, 0], [120, 40], [120, 110], [120, 130], [120, 150], [120, 160], [120, 170], [120, 180], [120, 190], [120, 200], [120, 310], [130, 0], [130, 20], [130, 40], [130, 50], [130, 60], [130, 70], [130, 90], [130, 100], [130, 110], [130, 130],
    [130,170], [130,200], [130,220], [130,230], [130,240], [130,250], [130,270], [130,280], [130,290], [130,310], [140,0], [140,130], [140,150], [140,170], [140,180], [140,180], [140,190], [140,200], [140,250], [140,270], [140,310], [150,0], [150,10], [150,20], [150,30], [150,40], [150,50], [150,60],
    [150,70], [150,80], [150,90], [150,100], [150,110], [150,120], [150,130], [150,230], [150,250], [150,270], [150,290], [150,310], [,], [,], [,], [,], [,], [,], [,], [,], [,], [,], [,], [,], [,], [,], [,], [,],
    [,], [,], [,], [,], [,], [,], [,], [,], [,], [,], [,], [,], [,], [,], [,], [,], [,], [,], [,], [,], [,], [,], [,], [,], [,], [,], [,], [,],];

//image Sammlung
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
const playerimg = new Image();
playerimg.src = 'img/player.png';
const mauerimg = new Image();
mauerimg.src = 'img/mauer.png';


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

    for (let i = 0; i < level1.length; i++) {
        ctx.drawImage(mauerimg, level1[i][0], level1[i][1]);
    }

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
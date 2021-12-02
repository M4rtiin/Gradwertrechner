
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

const fehler1 = new Image();
fehler1.src = 'img/1.png';
const fehler2 = new Image();
fehler2.src = 'img/2.png';
const fehler3 = new Image();
fehler3.src = 'img/3.png';
const fehler4 = new Image();
fehler4.src = 'img/4.png';
const fehler5 = new Image();
fehler5.src = 'img/5.png';
const fehler6 = new Image();
fehler6.src = 'img/6.png';
const fehler7 = new Image();
fehler7.src = 'img/7.png';
const fehler8 = new Image();
fehler8.src = 'img/8.png';
const fehler9 = new Image();
fehler9.src = 'img/9.png';
const fehler10 = new Image();
fehler10.src = 'img/10.png';
const fehler11 = new Image();
fehler11.src = 'img/11.png';

function draw() {

    switch (fehler_zähler) {
        case 1:
            ctx.clearRect(0, 0, 250, 250);
            ctx.drawImage(fehler1,0,0);
            break;
        case 2:
            ctx.clearRect(0, 0, 250, 250);
            ctx.drawImage(fehler2, 0, 0);
            break;
        case 3:
            ctx.clearRect(0, 0, 250, 250);
            ctx.drawImage(fehler3, 0, 0);
            break;
        case 4:
            ctx.clearRect(0, 0, 250, 250);
            ctx.drawImage(fehler4, 0, 0);
            break;
        case 5:
            ctx.clearRect(0, 0, 250, 250);
            ctx.drawImage(fehler5, 0, 0);
            break;
        case 6:
            ctx.clearRect(0, 0, 250, 250);
            ctx.drawImage(fehler6, 0, 0);
            break;
        case 7:
            ctx.clearRect(0, 0, 250, 250);
            ctx.drawImage(fehler7, 0, 0);
            break;
        case 8:
            ctx.clearRect(0, 0, 250, 250);
            ctx.drawImage(fehler8, 0, 0);
            break;
        case 9:
            ctx.clearRect(0, 0, 250, 250);
            ctx.drawImage(fehler9, 0, 0);
            break;
        case 10:
            ctx.clearRect(0, 0, 250, 250);
            ctx.drawImage(fehler10, 0, 0);
            break;
        case 11:
            ctx.clearRect(0, 0, 250, 250);
            ctx.drawImage(fehler11, 0, 0);
            break;
    }
}

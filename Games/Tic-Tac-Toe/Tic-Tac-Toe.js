

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

var B1 = 0;
var B2 = 0;
var B3 = 0;
var B4 = 0;
var B5 = 0;
var B6 = 0;
var B7 = 0;
var B8 = 0;
var B9 = 0;
var counterGreen = 0;
var counterBlue = 0;
var counter = 0;
//variablen for display
var grün = "Grün";
var blau = "Blau";
var lastWinner = grün;
var lastLooser = blau;
//variablen for the checkWinner
var green = "green";
var blue = "blue";
var ll = "blue";
var lw = "green";

window.onload = function()
{
  document.getElementById("Anzeige").innerHTML = "Blau ist an der Reihe";
  document.getElementById("anzeigeGrün").innerHTML = "Grün: 0";
  document.getElementById("anzeigeBlau").innerHTML = "Blau: 0";
}

//Mainfunction
function main()
{
  playerAnzeige();
  checkWinner();
}

//Check if anyone win the game
function checkWinner()
{
  var c1 = B1+B2+B3;
  var c2 = B1+B4+B7;
  var c3 = B1+B5+B9;
  var c4 = B3+B6+B9;
  var c5 = B7+B8+B9;
  var c6 = B3+B5+B7;
  var c7 = B2+B5+B8;
  var c8 = B4+B5+B6;

  if (c1===3||c2===3||c3===3||c4===3||c5===3||c6===3||c7===3||c8===3)
  {
    clearTimer();
    window.alert(lastLooser + " hat gewonnen");
    whoisLastLooser();
    return reset();
  }

  else if (c1===12||c2===12||c3===12||c4===12||c5===12||c6===12||c7===12||c8===12)
  {
    clearTimer();
    window.alert(lastWinner + " hat gewonnen");
    whoisLastWinner();
    return reset();
  }

  else if (counter===9)
  {
   clearTimer();
   window.alert("Unentschieden!");
   reset();
   return  playerAnzeige();
  }

  else
  {
   return  timer();
  }
}

//who is who? And count 
function whoisLastLooser()
{
    if (lastLooser == blau)
    {
      counterBlue += 1;
      document.getElementById("anzeigeBlau").innerHTML = "Blau: " + counterBlue;
      lastWinner = blau;
      lastLooser = grün;
      lw = blue;
      ll = green;
    }
    else
    {
      counterGreen += 1;
      document.getElementById("anzeigeGrün").innerHTML = "Grün: " + counterGreen;
      lastWinner = grün;
      lastLooser = blau;
      lw = green;
      ll = blue;
    }
  }

//who is who? And count
function whoisLastWinner()
{
      if (lastWinner == blau)
      {
        counterBlue += 1;
        document.getElementById("anzeigeBlau").innerHTML = "Blau: " + counterBlue;
        lastWinner = blau;
        lastLooser = grün;
        lw = blue;
        ll = green;
      }
      else
      {
        counterGreen += 1;
        document.getElementById("anzeigeGrün").innerHTML = "Grün: " + counterGreen;
        lastWinner = grün;
        lastLooser = blau;
        lw = green;
        ll = blue;
      }
    }

//Reset the game
function reset()
{
  B1 = 0;
  B2 = 0;
  B3 = 0;
  B4 = 0;
  B5 = 0;
  B6 = 0;
  B7 = 0;
  B8 = 0;
  B9 = 0;
  counter = 0;
  document.getElementById("B1").style.background = "white";
  document.getElementById("B2").style.background = "white";
  document.getElementById("B3").style.background = "white";
  document.getElementById("B4").style.background = "white";
  document.getElementById("B5").style.background = "white";
  document.getElementById("B6").style.background = "white";
  document.getElementById("B7").style.background = "white";
  document.getElementById("B8").style.background = "white";
  document.getElementById("B9").style.background = "white";
}

//Display what player is on tho clock
function playerAnzeige()
{
  if (counter%2 == 0)
  {
    return document.getElementById("Anzeige").innerHTML = lastLooser + " ist an der Reihe";
  }
  else
  {
    return document.getElementById("Anzeige").innerHTML = lastWinner + " ist an der Reihe";
  }
}

//Timerfunctions
function timer()
{
  var timeS = document.getElementById("Timer").value;
  var timeMS = timeS * 1000;
  timeoutID = window.setTimeout(zeitAbgelaufen, timeMS);
  console.log("TimerRun");
}

function zeitAbgelaufen()
{
  if (counter%2 == 0)
  {
    window.alert("Zeit ist abgelaufen! " + lastWinner + " hat gewonnen!");
    whoisLastWinner();
    return reset();
  }
  else
  {
    window.alert("Zeit ist abgelaufen! " + lastLooser + " hat gewonnen!");
    whoisLastLooser();
    return reset();
  }
}

function clearTimer()
{
  if (counter !== 0)
  {
    window.clearTimeout(timeoutID);
    console.log("timer clear");
  }
}

//Buttonfunctions: to get what button is clickt
function Bf1()
{
  clearTimer();
  counter += 1;
  if (counter%2 ==0)
  {
    document.getElementById("B1").style.background = lw;
    B1 = 4;
  }
  else
  {
    document.getElementById("B1").style.background = ll;
    B1 = 1;
  }
}

function Bf2()
{
  clearTimer();
  counter += 1;
  if (counter%2 ==0)
  {
    document.getElementById("B2").style.background = lw;
    B2 = 4;
  }
  else
  {
    document.getElementById("B2").style.background = ll;
    B2 = 1;
  }
}

function Bf3()
{
  clearTimer();
  counter += 1;
  if (counter%2 ==0)
  {
    document.getElementById("B3").style.background = lw;
    B3 = 4;
  }
  else
  {
    document.getElementById("B3").style.background = ll;
    B3 = 1;
  }
}

function Bf4()
{
  clearTimer();
  counter += 1;
  if (counter%2 ==0)
  {
    document.getElementById("B4").style.background = lw;
    B4 = 4;
  }
  else
  {
    document.getElementById("B4").style.background = ll;
    B4 = 1;
  }
}

function Bf5()
{
  clearTimer();
  counter += 1;
  if (counter%2 ==0)
  {
    document.getElementById("B5").style.background = lw;
    B5 = 4;
  }
  else
  {
    document.getElementById("B5").style.background = ll;
    B5 = 1;
  }
}

function Bf6()
{
  clearTimer();
  counter += 1;
  if (counter%2 ==0)
  {
    document.getElementById("B6").style.background = lw;
    B6 = 4;
  }
  else
  {
    document.getElementById("B6").style.background = ll;
    B6 = 1;
  }
}

function Bf7()
{
  clearTimer();
  counter += 1;
  if (counter%2 ==0)
  {
    document.getElementById("B7").style.background = lw;
    B7 = 4;
  }
  else
  {
    document.getElementById("B7").style.background = ll;
    B7 = 1;
  }
}

function Bf8()
{
  clearTimer();
  counter += 1;
  if (counter%2 ==0)
  {
    document.getElementById("B8").style.background = lw;
    B8 = 4;
  }
  else
  {
    document.getElementById("B8").style.background = ll;
    B8 = 1;
  }
}

function Bf9()
{
  clearTimer();
  counter += 1;
  if (counter%2 ==0)
  {
    document.getElementById("B9").style.background = lw;
    B9 = 4;
  }
  else
  {
    document.getElementById("B9").style.background = ll;
    B9 = 1;
  }
}

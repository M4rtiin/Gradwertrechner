
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
window.onload = function()
{
  document.getElementById("Anzeige").innerHTML = "Grün ist an der Reihe";
  document.getElementById("anzeigeGrün").innerHTML = "Grün: 0";
  document.getElementById("anzeigeBlau").innerHTML = "Blau: 0";
}

function main()
{
  playerAnzeige();
  checkWinner();
}

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
    document.getElementById("Anzeige").innerHTML = "Grün hat gewonnen!";
    window.alert("Grün hat gewonnen");
    counterGreen += 1;
    document.getElementById("anzeigeGrün").innerHTML = "Grün: " + counterGreen;
    reset();
  }
  else if (c1===12||c2===12||c3===12||c4===12||c5===12||c6===12||c7===12||c8===12)
  {
    document.getElementById("Anzeige").innerHTML = "Blau hat gewonnen!";
    window.alert("Blau hat gewonnen")
    counterBlue += 1;
    reset();
    document.getElementById("anzeigeBlau").innerHTML = "Blau: " + counterBlue;
  }
  else if (counter===9)
  {
    document.getElementById("Anzeige").innerHTML = "Unentschieden!";
    window.alert("Unentschieden!");
    reset();
  }
}

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

function playerAnzeige()
{
  if (counter%2 == 0)
  {
    document.getElementById("Anzeige").innerHTML = "Grün ist an der Reihe";
  }
  else
  {
    document.getElementById("Anzeige").innerHTML = "Blau ist an der Reihe";
  }
}

function Bf1()
{
  counter += 1;
  if (counter%2 ==0)
  {
    document.getElementById("B1").style.background = "blue";
    B1 = 4;
  }
  else
  {
    document.getElementById("B1").style.background = "green";
    B1 = 1;
  }
}

function Bf2()
{
  counter += 1;
  if (counter%2 ==0)
  {
    document.getElementById("B2").style.background = "blue";
    B2 = 4;
  }
  else
  {
    document.getElementById("B2").style.background = "green";
    B2 = 1;
  }
}

function Bf3()
{
  counter += 1;
  if (counter%2 ==0)
  {
    document.getElementById("B3").style.background = "blue";
    B3 = 4;
  }
  else
  {
    document.getElementById("B3").style.background = "green";
    B3 = 1;
  }
}

function Bf4()
{
  counter += 1;
  if (counter%2 ==0)
  {
    document.getElementById("B4").style.background = "blue";
    B4 = 4;
  }
  else
  {
    document.getElementById("B4").style.background = "green";
    B4 = 1;
  }
}

function Bf5()
{
  counter += 1;
  if (counter%2 ==0)
  {
    document.getElementById("B5").style.background = "blue";
    B5 = 4;
  }
  else
  {
    document.getElementById("B5").style.background = "green";
    B5 = 1;
  }
}

function Bf6()
{
  counter += 1;
  if (counter%2 ==0)
  {
    document.getElementById("B6").style.background = "blue";
    B6 = 4;
  }
  else
  {
    document.getElementById("B6").style.background = "green";
    B6 = 1;
  }
}

function Bf7()
{
  counter += 1;
  if (counter%2 ==0)
  {
    document.getElementById("B7").style.background = "blue";
    B7 = 4;
  }
  else
  {
    document.getElementById("B7").style.background = "green";
    B7 = 1;
  }
}

function Bf8()
{
  counter += 1;
  if (counter%2 ==0)
  {
    document.getElementById("B8").style.background = "blue";
    B8 = 4;
  }
  else
  {
    document.getElementById("B8").style.background = "green";
    B8 = 1;
  }
}

function Bf9()
{
  counter += 1;
  if (counter%2 ==0)
  {
    document.getElementById("B9").style.background = "blue";
    B9 = 4;
  }
  else
  {
    document.getElementById("B9").style.background = "green";
    B9 = 1;
  }
}

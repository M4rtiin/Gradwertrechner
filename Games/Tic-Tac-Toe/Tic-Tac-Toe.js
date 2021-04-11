
var B1 = 0;
var B2 = 0;
var B3 = 0;
var B4 = 0;
var B5 = 0;
var B6 = 0;
var B7 = 0;
var B8 = 0;
var B9 = 0;
var counter = 0;
window.onload = function()
{
  document.getElementById("Anzeige").innerHTML = "Grün ist an der Reihe";
}

function main()
{

}

function winner()
{

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
    B1 = 2;
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
    B2 = 2;
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
    B3 = 2;
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
    B4 = 2;
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
    B5 = 2;
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
    B6 = 2;
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
    B7 = 2;
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
    B8 = 2;
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
    B9 = 2;
  }
  else
  {
    document.getElementById("B9").style.background = "green";
    B9 = 1;
  }
}

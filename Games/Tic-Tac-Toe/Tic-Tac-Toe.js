
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

function main ()
{

}

function winner ()
{

}

function player ()
{
  counter += 1;

  if (counter%2 == 0)
  {
    document.getElementById("Anzeige").innerHTML = "Grün ist an der Reihe";
  }
  else
  {
    document.getElementById("Anzeige").innerHTML = "Blau ist an der Reihe";
  }
}

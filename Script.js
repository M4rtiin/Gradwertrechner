
function Berechnen(){

  var Umfang = document.getElementById("Umfang").value;
  var werteingabe = document.getElementById("Gradwerte").value;

  var multi = Umfang/360;
  var rechner = werteingabe * multi;

  document.getElementById("U").innerHTML ="U="+ Umfang +"mm";

  var div = document.getElementById("S");
  var createE = document.createElement("p");
  createE.innerHTML = werteingabe+"° = "+ rechner+"mm";
  div.appendChild(createE)
}

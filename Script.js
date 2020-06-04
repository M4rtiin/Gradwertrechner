

function Berechnen(){
//Eingebefelder
  var Umfang = document.getElementById("Umfang").value;
  var werteingabe = document.getElementById("Gradwerte").value;
//Berechnung
  var multi = Umfang/360;
  var rechner = werteingabe * multi;
  speicher.push(rechner);
  gradspeicher.push(werteingabe);
  var diverenz = rechner - speicher[speicher.length-2];
//Umfanganzeige
  document.getElementById("U").innerHTML ="U="+ Umfang +"mm";
//Gradanzeige
  var div = document.getElementById("S");
  var createE = document.createElement("p");
  createE.innerHTML = werteingabe+"° = "+ rechner+"mm";
  div.appendChild(createE);
//diverenzanzeige
  var createB = document.createElement("p");
  createB.innerHTML = gradspeicher[gradspeicher.length-2]+"° --> " + werteingabe + "° = " + diverenz + "mm";
  div.appendChild(createB);
 console.log(speicher);
 console.log(speicher.length);
}
//Speicher für diverenzberechnung
  var speicher = [];
  var gradspeicher = [];

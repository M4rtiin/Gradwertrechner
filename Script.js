

function Berechnen(){
//Eingebefelder
  var Umfang = document.getElementById("Umfang").value;
  var werteingabe = document.getElementById("Gradwerte").value;
//Berechnung
  var multi = Umfang/360;
  var rechner = werteingabe * multi;
  var ergebnis = Math.round(rechner*10)/10;
  speicher.push(ergebnis);
  gradspeicher.push(werteingabe);
  var diverenz = ergebnis - speicher[speicher.length-2];
  var divergebnis = Math.round(diverenz*10)/10;
//Umfanganzeige
  document.getElementById("U").innerHTML ="U="+ Umfang +"mm";

 if (speicher.length===1) {
//Gradanzeige
   var div = document.getElementById("Anzeige");
   var createE = document.createElement("p");
   createE.innerHTML = werteingabe + "° = " + ergebnis + "mm";
   div.appendChild(createE);
//Abgrenzung
   var createA = document.createElement("p");
   createA.innerHTML = "---------------------";
   div.appendChild(createA);
    }
 else {
//diverenzanzeige
    var div = document.getElementById("Anzeige");
    var createB = document.createElement("p");
    createB.innerHTML = gradspeicher[gradspeicher.length-2]+"° --> " + werteingabe + "° = " + divergebnis + "mm";
    div.appendChild(createB);
//Gradanzeige
    var createE = document.createElement("p");
    createE.innerHTML = werteingabe + "° = " + ergebnis + "mm";
    div.appendChild(createE);
//Abgrenzung
    var createA = document.createElement("p");
    createA.innerHTML = "---------------------";
    div.appendChild(createA);
 }
//debug
    console.log(speicher);
    console.log(speicher.length);
}
//Speicher für Diverenzberechnung und Anzeige
  var speicher = [];
  var gradspeicher = [];

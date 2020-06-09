
//Gradwertrechner

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

//Bohrerdrehzahlrechner

function drehzahlberechnung(){
  //Eingabefeld
  var durchmesser = document.getElementById("bohrereingabe").value;
  var edelstahl = document.getElementById("va").checked;
  var stahl = document.getElementById("h2").checked;
  var durchmessera = document.getElementById("durchmesseranzeige");
  var drehzahla = document.getElementById("bohrerdrehzahlanzeige");
  //Berechnung
  var vadrehzahl = Math.round((10*1000)/(durchmesser*3.14));
  var h2drehzahl = Math.round((18*1000)/(durchmesser*3.14));
  //Anzeige
  durchmessera.innerHTML = "Bohrerdurchmesser = "+durchmesser;
  if (edelstahl===true) {
    drehzahla.innerHTML = "Bohrerdrehzahl = "+vadrehzahl+" U/min";
  }
  else if (stahl===true) {
    drehzahla.innerHTML = "Bohrerdrehzahl = "+h2drehzahl+" U/min";
  }
  else {
    drehzahla.innerHTML = "Bitte Material auswählen!";
  }
//debug
console.log(vadrehzahl);
console.log(h2drehzahl);
console.log(edelstahl);
}

//Kernlochrechner

function kernlochrechner(){
  //Eingabe
  var gewindee = document.getElementById("gewindeeingabe").value;
  var gewindea = document.getElementById("gewindeanzeige");
  var kernlocha = document.getElementById("kernlochanzeige");
  var speicher = [0.75,1.6,2.5,3.3,4.2,5.0,0,6.8,0,8.5,0,10.2,0,12,0,14,0,0,0,
                  17.5,0,0,0,21,0,0,0,0,0,26.5,0,0,0,0,0,32,0,0,0,0,0,37.5];
  //Gewindeanzeige
  gewindea.innerHTML = "M"+gewindee+" Gewinde";
  //Kernlochberechnung
  for (var i = 0; i < 43; i++) {
    if (gewindee == i) {
      kernlocha.innerHTML = "Kernlochdurchmesser = "+speicher[i-1]+"mm";
    }
  }
}

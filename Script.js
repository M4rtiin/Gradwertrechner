
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
      if (speicher[i-1]===0)
        kernlocha.innerHTML = "Metrisches ISO-Gewinde nicht gefunden!";
      else
        kernlocha.innerHTML = "Kernlochdurchmesser = "+speicher[i-1]+"mm";
    }
  }
}

//Anzugsdrehmoment
function anzugsdrehmoment(){
  //Eingabe
  var schraubene = document.getElementById("schraubeneingabe").value;
  var schraubena = document.getElementById("schraubengröße");
  var drehmomenta = document.getElementById("drehmomentanzeige");
  var s5_6 = document.getElementById("s5_6").checked;
  var s8_8 = document.getElementById("s8_8").checked;
  var s10_9 = document.getElementById("s10_9").checked;
  var s12_9 = document.getElementById("s12_9").checked;
  var speicher5_6 = [0,0,0,1.36,2.7,4.6,0,11,0,22,0,39,0,62,0,95,0,130,0,184,
                     0,250,0,315,0,0,470,0,0,635,0,0,865,0,0,1140];
  var speicher8_8 = [0,0,0,3,5.9,10,0,25,0,49,0,85,0,135,0,210,0,300,0,425,0,
                     580,0,730,0,0,1100,0,0,1450,0,0,2000,0,0,2600];
  var speicher10_9 = [0,0,0,4.4,8.7,15,0,36,0,72,0,125,0,200,0,310,0,430,0,610,
                      0,830,0,1050,0,0,1550,0,0,2100,0,0,2800,0,0,3700];
  var speicher12_9 = [0,0,0,5.1,10,18,0,43,0,84,0,145,0,235,0,365,0,500,0,710,
                      0,970,0,1220,0,0,1800,0,0,2450,0,0,3400,0,0,4300];
  //Schraubenanzeige
  schraubena.innerHTML = "M"+schraubene+" Schraube";
  //Drehmoment Berechnung
  for (var i = 0; i < 38; i++){
    if (schraubene == i){
      if (s5_6 === true){
        if (speicher5_6[i-1] === 0)
        drehmomenta.innerHTML = "Schraube nicht gefunden!";
        else
        drehmomenta.innerHTML = speicher5_6[i-1]+"Nm";
      }
      else if (s8_8 === true){
        if (speicher8_8[i-1] === 0)
        drehmomenta.innerHTML = "Schraube nicht gefunden!";
        else
        drehmomenta.innerHTML = speicher8_8[i-1]+"Nm";
      }
      else if (s10_9 === true){
        if (speicher10_9[i-1] === 0)
        drehmomenta.innerHTML = "Schraube nicht gefunden!";
        else
        drehmomenta.innerHTML = speicher10_9[i-1]+"Nm";
      }
      else if (s12_9 === true){
        if (speicher12_9[i-1] === 0)
        drehmomenta.innerHTML = "Schraube nicht gefunden!";
        else
        drehmomenta.innerHTML = speicher12_9[i-1]+"Nm";
      }
      else
       drehmomenta.innerHTML = "Bitte Fertigungsklasse wählen!";
    }
  }
  //debug
  console.log(schraubene);
  console.log(schraubena);
  console.log(drehmomenta);
}

//Blech-Gewicht-rechner
function gewichtrechner() {
  //Eingabe
  var bleche = document.getElementById("blechabmaße");
  var gewichta = document.getElementById("gewichtanzeige");
  var breite = document.getElementById("blechbreite").value;
  var länge = document.getElementById("blechlänge").value;
  var dicke = document.getElementById("blechdicke").value;
  var va = document.getElementById("vag").checked;
  var h2 = document.getElementById("h2g").checked;
  //Anzeige der Blechabmaße
  bleche.innerHTML = breite + " X " + länge + " X " + dicke;
  //Gewicht brechnung
  var volumen = breite*länge*dicke;
  var v_in_dm = volumen/1000000;
  if (va === true) {
    var va_gewicht = v_in_dm*8;
    gewichta.innerHTML = "Das Gewicht des Bleches beträgt "+va_gewicht+" Kilogramm";
  }
  else if (h2 === true) {
    var h2_gewicht = v_in_dm*7.85;
    gewichta.innerHTML = "Das Gewicht des Bleches beträgt "+h2_gewicht+" Kilogramm";
  }
  else
    gewichta.innerHTML = "Bitte Material angeben!";
  //debug
  console.log (v_in_dm);
  console.log (volumen);
  console.log (va_gewicht);
  console.log (h2_gewicht);
}

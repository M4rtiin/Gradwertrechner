
//Header
var headerV = true;

function sers() {
    if (headerV == true) {
        document.getElementById("header").style.display = "none";
        headerV = false;
    }
    else {
        document.getElementById("header").removeAttribute("style");
        headerV = true;
        }
}



//Gradwertrechner
function Berechnen()
{
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

  if (speicher.length == 1)
  {
   //Gradanzeige
   var div = document.getElementById("Anzeige");
   var createE = document.createElement("p");
   createE.innerHTML = werteingabe + "° = " + ergebnis + "mm";
   div.appendChild(createE);
   //Abgrenzung
   var createA = document.createElement("p");
   createA.innerHTML = "---------------------";
   div.appendChild(createA);
   clear_input();
  }
  else
  {
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
   clear_input();
  }
   //debug
   console.log(speicher);
   console.log(speicher.length);
}

//Automatisches löschen des Platzhalters im Gradwertrechner
function clear_input() {
    document.getElementById("Gradwerte").value = '';
    document.getElementById("Gradwerte").placeholder = "Gradwert";
}
  //Speicher für Diverenzberechnung und Anzeige
  var speicher = [];
  var gradspeicher = [];



//Bohrerdrehzahlrechner
function drehzahlberechnung()
{
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
  if (edelstahl)
  {
    drehzahla.innerHTML = "Bohrerdrehzahl = "+vadrehzahl+" U/min";
  }
  else if (stahl)
  {
    drehzahla.innerHTML = "Bohrerdrehzahl = "+h2drehzahl+" U/min";
  }
  else
  {
    drehzahla.innerHTML = "Bitte Material auswählen!";
  }
//debug
console.log(vadrehzahl);
console.log(h2drehzahl);
console.log(edelstahl);
}



//Blech-Gewicht-rechner
function gewichtrechner()
{
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
  if (va)
  {
    var va_gewicht = Math.round(v_in_dm*8*100)/100;
    gewichta.innerHTML = "Das Gewicht des Bleches beträgt "+va_gewicht+" Kilogramm";
  }
  else if (h2)
  {
    var h2_gewicht = Math.round(v_in_dm*7.85*100)/100;
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



//Kreissegmentbrechnung
function Kreissegmentbrechnung()
{
  // Eingabe
  var anzeige = document.getElementById("Längenanzeige");
  var durchmesser = document.getElementById("KreisdurchmesserE").value;
  var teilung = document.getElementById("KreisteilungE").value;

  //Berechnung
  var winkel = 360 / teilung;
  var bogenmaß = winkel * (Math.PI / 180);
  var ergebnis = durchmesser * Math.sin(bogenmaß / 2);
  var ergebnisGerundet = Math.round(ergebnis*10) / 10;
  if (ergebnisGerundet == 0 || isNaN(ergebnisGerundet))
  {
    anzeige.innerHTML = "Bitte geben Sie ihre Werte an!";
  }
  else
  {
  anzeige.innerHTML = "Ihr Sehnenmaß beträgt: " + ergebnisGerundet;
  }
  // debug
  console.log(winkel);
  console.log(bogenmaß);
  console.log(Math.sin(bogenmaß));
  console.log(ergebnisGerundet);
}



//iso Gewinde Tabelle
function isoGewindeTabelle()
{
  // variablen deklaration
  var mGewindeE = document.getElementById("isoGewindeE").value;
  var Eingabewert = parseFloat(mGewindeE);
  var A1 = document.getElementById("A1");
  var A2 = document.getElementById("A2");
  var A3 = document.getElementById("A3");
  var A4 = document.getElementById("A4");
  var A5 = document.getElementById("A5");
  var A6 = document.getElementById("A6");

  // Object Constructor
  function isoGewinde(kernloch, schlüsselweite, steigung, aMoment5_6, aMoment8_8, aMoment10_9)
  {
    this.kernloch = kernloch
    this.schlüsselweite = schlüsselweite
    this.steigung = steigung
    this.aMoment5_6 = aMoment5_6
    this.aMoment8_8 = aMoment8_8
    this.aMoment10_9 = aMoment10_9
    this.tabellenAnzeige = function()
    {
    A1.innerHTML = "Kernloch:\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 " + this.kernloch + "mm";
    A2.innerHTML = "Schlüsselweite: " + this.schlüsselweite + "mm";
    A3.innerHTML = "Steigung:\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 " + this.steigung + "mm";
    A4.innerHTML = "Anzugdrehmoment 5.6:\u00A0\u00A0 " + this.aMoment5_6 + "Nm";
    A5.innerHTML = "Anzugdrehmoment 8.8:\u00A0\u00A0 " + this.aMoment8_8 + "Nm";
    A6.innerHTML = "Anzugdrehmoment 10.9: " + this.aMoment10_9 + "Nm";
    }
  }

  // Objects
  var M1 = new isoGewinde("0,75", "0", "0,25", "-", "-");
  var M2 = new isoGewinde("1,6", "4", "0,4", "0,16", "0,35", "0,49");
  var M3 = new isoGewinde("2,5", "5,5", "0,5", "0,6", "1,28", "1,80");
  var M4 = new isoGewinde("3,3", "7", "0,7", "1,39", "2,97", "4,18");
  var M5 = new isoGewinde("4,2", "8", "0,8", "2,83", "6,03", "8,48");
  var M6 = new isoGewinde("5", "10", "1", "4,8", "10,25", "14,41");
  var M8 = new isoGewinde("6,8", "13", "1,25", "11,69", "24,93", "35,06");
  var M10 = new isoGewinde("8,5", "17", "1,5", "23", "49", "70");
  var M12 = new isoGewinde("10,2", "19", "1,75", "40", "86", "121");
  var M16 = new isoGewinde("14", "24", "2", "101", "215", "302");
  var M20 = new isoGewinde("17,5", "30", "2,5", "197", "420", "590");
  var M24 = new isoGewinde("21", "36", "3", "340", "726", "1020");
  var M30 = new isoGewinde("26,5", "46", "3,5", "677", "1445", "2032");
  var M36 = new isoGewinde("32", "55", "4", "1185", "2528", "3555");
  var M42 = new isoGewinde("37,5", "65", "4,5", "2373", "4050", "5696");
  var M48 = new isoGewinde("43", "75", "5", "2853", "6086", "8559");
  var M56 = new isoGewinde("50,5", "85", "5,5", "4591", "9793", "13772");
  var M64 = new isoGewinde("58", "95", "6", "6920", "14762", "20759");

  //Switch to get what object get show
  switch (Eingabewert)
  {
    case 1: M1.tabellenAnzeige();
      break;
    case 2: M2.tabellenAnzeige();
      break;
    case 3: M3.tabellenAnzeige();
      break;
    case 4: M4.tabellenAnzeige();
      break;
    case 5: M5.tabellenAnzeige();
      break;
    case 6: M6.tabellenAnzeige();
      break;
    case 8: M8.tabellenAnzeige();
      break;
    case 10: M10.tabellenAnzeige();
      break;
    case 12: M12.tabellenAnzeige();
      break;
    case 16: M16.tabellenAnzeige();
      break;
    case 20: M20.tabellenAnzeige();
      break;
    case 24: M24.tabellenAnzeige();
      break;
    case 30: M30.tabellenAnzeige();
      break;
    case 36: M36.tabellenAnzeige();
      break;
    case 42: M42.tabellenAnzeige();
      break;
    case 48: M48.tabellenAnzeige();
      break;
    case 56: M56.tabellenAnzeige();
      break;
    case 64: M64.tabellenAnzeige();
      break;
      default:
          A1.innerHTML = "Ihr metrisches Gewinde wurde nicht gefunden! Bitte versuchen Sie es erneut."
          A2.innerHTML = null;
          A3.innerHTML = null;
          A4.innerHTML = null;
          A5.innerHTML = null;
          A6.innerHTML = null;
  }

  //debug
  console.log(M1);
  console.log(M2);
  console.log(isoGewindeE);
  console.log();
}

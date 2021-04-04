
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
  }
   //debug
   console.log(speicher);
   console.log(speicher.length);
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

//Kernlochrechner
function kernlochrechner()
{
  //Eingabe
  var gewindee = document.getElementById("gewindeeingabe").value;
  var gewindea = document.getElementById("gewindeanzeige");
  var kernlocha = document.getElementById("kernlochanzeige");
  var speicher = [0.75,1.6,2.5,3.3,4.2,5.0,0,6.8,0,8.5,0,10.2,0,12,0,14,0,0,0,
                  17.5,0,0,0,21,0,0,0,0,0,26.5,0,0,0,0,0,32,0,0,0,0,0,37.5];
  //Gewindeanzeige
  gewindea.innerHTML = "M"+gewindee+" Gewinde";
  //Kernlochberechnung
  if (speicher[gewindee-1]==0 || gewindee > speicher.length)
  {
    kernlocha.innerHTML = "Metrisches ISO-Gewinde nicht gefunden!";
  }
  else
  {
    kernlocha.innerHTML = "Kernlochdurchmesser = "+speicher[gewindee-1]+"mm";
  }
}

//Anzugsdrehmoment
function anzugsdrehmoment()
{
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
      if (s5_6)
      {
        if (speicher5_6[schraubene-1] == 0 || schraubene > speicher5_6.length)
        drehmomenta.innerHTML = "Schraube nicht gefunden!";
        else
        drehmomenta.innerHTML = speicher5_6[schraubene-1]+"Nm";
      }
      else if (s8_8)
      {
        if (speicher8_8[schraubene-1] == 0 || schraubene > speicher8_8.length)
        drehmomenta.innerHTML = "Schraube nicht gefunden!";
        else
        drehmomenta.innerHTML = speicher8_8[schraubene-1]+"Nm";
      }
      else if (s10_9)
      {
        if (speicher10_9[schraubene-1] == 0 || schraubene > speicher10_9.length)
        drehmomenta.innerHTML = "Schraube nicht gefunden!";
        else
        drehmomenta.innerHTML = speicher10_9[schraubene-1]+"Nm";
      }
      else if (s12_9)
      {
        if (speicher12_9[schraubene-1] == 0 || schraubene > speicher12_9.length)
        drehmomenta.innerHTML = "Schraube nicht gefunden!";
        else
        drehmomenta.innerHTML = speicher12_9[schraubene-1]+"Nm";
      }
      else
       drehmomenta.innerHTML = "Bitte Fertigungsklasse wählen!";
  //debug
  console.log(schraubene);
  console.log(schraubena);
  console.log(drehmomenta);
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
  var mGewindeA1 = document.getElementById("mGewindeA1");
  var mGewindeA2 = document.getElementById("mGewindeA2");
  var mGewindeA3 = document.getElementById("mGewindeA3");

  // Object Constructor
  function isoGewinde(kernloch, schlüsselweite, steigung)
  {
    this.kernloch = kernloch
    this.schlüsselweite = schlüsselweite
    this.steigung = steigung
    this.tabellenAnzeige = function()
    {
    mGewindeA1.innerHTML = "Kernloch: " + this.kernloch + "mm";
    mGewindeA2.innerHTML = "Schlüsselweite: " + this.schlüsselweite + "mm";
    mGewindeA3.innerHTML = "Steigung: " + this.steigung + "mm";
    }
  }

  // Objects
  var M1 = new isoGewinde("0,75", "0", "0,25");
  var M2 = new isoGewinde("1,6", "4", "0,4");
  var M3 = new isoGewinde("2,5", "5,5", "0,5");
  var M4 = new isoGewinde("3,3", "7", "0,7");
  var M5 = new isoGewinde("4,2", "8", "0,8");
  var M6 = new isoGewinde("5", "10", "1");
  var M8 = new isoGewinde("6,8", "13", "1,25");
  var M10 = new isoGewinde("8,5", "17", "1,5");
  var M12 = new isoGewinde("10,2", "19", "1,75");
  var M16 = new isoGewinde("14", "24", "2");
  var M20 = new isoGewinde("17,5", "30", "2,5");
  var M24 = new isoGewinde("21", "36", "3");
  var M30 = new isoGewinde("26,5", "46", "3,5");
  var M36 = new isoGewinde("32", "55", "4");
  var M42 = new isoGewinde("37,5", "65", "4,5");
  var M48 = new isoGewinde("43", "75", "5");
  var M56 = new isoGewinde("50,5", "85", "5,5");
  var M64 = new isoGewinde("58", "95", "6");

  //Switch to get what object get show
  switch (Eingabewert) {
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
    default: isoGewindeTabelleA.innerHTML = "Ihr metrisches Gewinde wurde nicht gefunden! Bitte versuchen Sie es erneut."

  }

  //debug
  console.log(M1);
  console.log(M2);
  console.log(isoGewindeE);
  console.log(isoGewindeTabelleA);
  console.log();
}

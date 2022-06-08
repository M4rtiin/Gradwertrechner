
//Header
var headerV = true;

function Navi() {
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

//Speicherfunktionen
function speichern() {
    let speicher = document.getElementById("Anzeige").innerText;
    localStorage.setItem("speicher", speicher);
}
function speicherAnzeige() {
    Anzeige.innerHTML = localStorage.getItem("speicher");
}

function löschen() {
    localStorage.removeItem("speicher");
    document.location.reload();
}




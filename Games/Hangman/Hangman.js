
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

var wort;
var platzhalter = [];
var buchstaben = [];
var platzhalter_alt = [];
var fehler_zähler = 0;

function game() {

    let eingabe_input = document.getElementById("Eingabe").value;
    let eingabe = eingabe_input.toLowerCase();

    if (wort == undefined) {
        wort = eingabe.split('');
        clear_input();
        for (let i = 0; i < wort.length; i++) {
            platzhalter.push("_");
        }
        platzhalter_anzeige()
        text_anzeige();
        platzhalter_aktualisieren();
        document.getElementById("random_button").style.visibility = "hidden";

        //Debugin
        console.log(wort);
        console.log(platzhalter);
        console.log(platzhalter_alt);
        console.log(buchstaben);
        console.log(fehler_zähler);
    }
    else {
        buchstaben.push(eingabe);
        clear_input();
        check_letters();
        platzhalter_anzeige();
        check_win();
        check_loose();
        draw();

        //Debugin
        console.log(wort);
        console.log(platzhalter);
        console.log(platzhalter_alt);
        console.log(buchstaben);
        console.log(fehler_zähler);
        console.log(check_win);
    }
}

function random() {
    let random_nummer = Math.ceil(Math.random() * 100);
    let random_wort = wort_speicher[random_nummer];
    wort = random_wort.split('');
    clear_input();
    for (let i = 0; i < wort.length; i++) {
        platzhalter.push("_");
    }
    platzhalter_anzeige();
    text_anzeige();
    platzhalter_aktualisieren();
    document.getElementById("random_button").style.visibility = "hidden";

    //Debugin
    console.log(wort);
    console.log(platzhalter);
    console.log(platzhalter_alt);
    console.log(buchstaben);
    console.log(fehler_zähler);
}

function clear_input() {
    document.getElementById("Eingabe").value = '';
    document.getElementById("Eingabe").placeholder = "Buchstabeneingabe";
}

function check_letters() {
    for (let i = 0; i < buchstaben.length; i++) {
        for (let j = 0; j < wort.length + 1; j++) {
            if (wort[j] === buchstaben[i]) {
                platzhalter.splice(j, 1, buchstaben[i]);
            }
        }
    }
    if (JSON.stringify(platzhalter) === JSON.stringify(platzhalter_alt)) {
        fehler_zähler++;
    }
    else {
        platzhalter_aktualisieren();
    }
}

function platzhalter_anzeige() {
    let pl_string = platzhalter.toString();
    let leer_einfügen = pl_string.replace(/,/gi, " ");
    let zeile = document.getElementById("Wort");
    zeile.innerHTML = leer_einfügen;
}

function check_win() {
    let text = document.getElementById("Text");
    if (JSON.stringify(wort) == JSON.stringify(platzhalter)) {
        text.innerHTML = "Gewonnen!";
    }
}

function text_anzeige() {
    let text = document.getElementById("Text");
    text.innerHTML = "Bitte Buchstaben eingeben"
}

function check_loose() {
    if (fehler_zähler === 11) {
        let text = document.getElementById("Text");
        text.innerHTML = "Leider verloren!"
    }
}

function platzhalter_aktualisieren() {
    platzhalter_alt = [];
    for (let i = 0; i < platzhalter.length; i++) {
        platzhalter_alt.push(platzhalter[i]);
    }
}

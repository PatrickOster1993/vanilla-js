/* Hintergrund: 
Ein Veranstalter möchte eine Teilnehmerliste digital verwalten und auswerten. Du erhältst 
eine Datenstruktur mit Teilnehmern, die verschiedene Eigenschaften besitzen. 
Aufgabe 1: Teilnehmer-Daten definieren 
Erstelle ein Array teilnehmerListe mit mindestens 6 Objekten. Jeder Teilnehmer soll 
folgende Eigenschaften haben: 
•name (String) 
•alter (Zahl) 
•geschlecht (m/w/div) 
•interessen (Array aus Strings) 
*/

const teilnehmerListe = [
    {
        name: "Mattijn",
        alter: 40,
        geschlecht: "m",
        interessen: ["Familie", "Grillen", "F1", "Code", "Fussball", "Sport"]
    },
    {
        name: "Erich",
        alter: 20,
        geschlecht: "m",
        interessen: ["Angeln", "Feiern", "F2", "Gamen"]
    },
    {
        name: "Monica",
        alter: 35,
        geschlecht: "w",
        interessen: ["Shoppen", "Politic", "Motorrad Fahren", "Sport"]
    },
    {
        name: "Obelix",
        alter: 29,
        geschlecht: "m",
        interessen: ["Henkelsteine", "Grillen", "Römer zusammen schlagen", "Essen"]
    },
    {
        name: "Peter",
        alter: 18,
        geschlecht: "m",
        interessen: ["Klettern", "Mädchen", "Schule", "Sport"]
    },
    {
        name: "Medusa",
        alter: 43,
        geschlecht: "w",
        interessen: ["Männer", "Schlangen"]
    }
];


/*
Aufgabe 2: Begrüßung mit Template Literals 
Schreibe eine Funktion begruesseTeilnehmer(teilnehmer), die als Parameter ein 
Teilnehmer-Objekt erhält und mit einem Template Literal eine Begrüßung in der Konsole 
ausgibt
 */ 

const begruesseTeilnehmer = (teilnehmer) => console.log(`Hallo ${teilnehmer.name}, schön dass Sie da sind.`)
begruesseTeilnehmer(teilnehmerListe[0])

/*
Aufgabe 3: Teilnehmer auswerten mit map() 
Erstelle ein neues Array alleNamenMitAlter, das alle Teilnehmer in folgendem Format 
enthält: 
["Anna (28)", "Ben (31)", ...] 
Verwende dazu map() und eine Arrow-Function. 
*/


/* LÖSUNG OHNE LESEN
const alleNamenMitAlter = [];
for (t of teilnehmerListe){
    const teilnehmer = `${t.name} (${t.alter})`;
    alleNamenMitAlter.push(teilnehmer)
};
console.log(alleNamenMitAlter)
 */

const arrayErstellen = (array) => {
    const alleNamenMitAlter = array.map(a => `${a.name} (${a.alter})`)
    return alleNamenMitAlter
}
console.log(arrayErstellen(teilnehmerListe));

/* 
Aufgabe 4: Teilnehmer filtern mit filter() 
1. Erstelle ein neues Array nurMaennlich, das nur männliche Teilnehmer enthält. 
2. Erstelle ein weiteres Array interessiertSichFuerSport, das alle Teilnehmer enthält, 
deren Interessen „Sport“ beinhalten. 
Tipp: array.includes("Sport") hilft bei der Interessenprüfung. 
 */

const nurMaennlich = teilnehmerListe.filter(t => (t.geschlecht == "m"))
console.log(nurMaennlich);

const interessiertSichFuerSport = teilnehmerListe
    .filter(t =>(t.interessen.includes("Sport")))
    .map(t => t.name);
console.log(interessiertSichFuerSport)

/* 
Aufgabe 5: Destructuring & Rest-Operator 
1. Verwende Object Destructuring, um aus einem Teilnehmerobjekt name und alter 
zu extrahieren. 
2. Sammle mit dem Rest-Operator alle weiteren Eigenschaften in ein Objekt restInfos 
und gib dieses aus. 
 */

teilnehmerListe.forEach(teilnehmer => {
    const {name, alter, ...restInfos} = teilnehmer
    console.log(`Name: ${name}, Alter: ${alter}`)
    console.log(restInfos)
});


/* 
Aufgabe 6: Teilnehmeranalyse mit Funktionen 
Schreibe eine Funktion statistik(teilnehmerArray), die Folgendes berechnet: 
• Durchschnittsalter aller Teilnehmer (map + Rechenoperation) 
• Anzahl Teilnehmer je Geschlecht (m/w/div) 
Gib die Ergebnisse mit einem Template Literal formatiert in der Konsole aus. 
 */

function durchschnittsalter(array) {
    let sumAlter = 0
    let i = 0
    for (const eins of array) {
        i++;
        sumAlter = sumAlter + eins.alter
    }
    return `Durchsnittsalter ist: ${sumAlter / i}`
};
function anzahlProGeschlecht(array) {
    let man = 0;
    let frau = 0;
    let divers = 0;
    for (eins of array){
        if (eins.geschlecht == "m"){
            man++
        } else if (eins.geschlecht == "w") {
            frau++
        }  else{
            divers++
        }
        }
    return `Anzahl Männer: ${man}, Anzahl Frauen: ${frau}, Anzahl Divers ${divers}`
    }
    
const statistik = (array) => {
    const durchschnitt = durchschnittsalter(array);
    const anzahl = anzahlProGeschlecht(array);
    return `${durchschnitt}\n${anzahl}`
}
console.log(statistik(teilnehmerListe));

/* 
Aufgabe 7: Teilnehmer prüfen (Exception Handling) 
Schreibe eine Funktion pruefeTeilnehmer(teilnehmer), die folgende Bedingungen 
überprüft: 
•name muss ein String sein 
•alter darf nicht kleiner als 0 sein 
•interessen muss ein Array sein 
Falls ein Fehler auftritt, wirf eine Exception mit einer aussagekräftigen Fehlermeldung und 
fange sie mit try/catch ab. Gib im Fehlerfall eine Fehlermeldung aus und setze den 
Teilnehmer nicht auf die Liste. 
 */

function pruefeTeilnehmer(array) {
    for (const eins of array) {
        try {
            if (typeof eins.name !== "string") {
                throw new Error(`${eins.name}: Name ist kein String.`);
            }
            if (typeof eins.alter !== "number" || eins.alter < 0) {
                throw new Error(`${eins.name}: Alter ist keine Zahl oder kleiner als 0.`);
            }
            if (!Array.isArray(eins.interessen)) {
                throw new Error(`${eins.name}: interessen ist kein Array.`);
            }
            console.log(`Teilnehmer ${eins.name} ist gültig`);
        } catch (e) {
            console.error(`Fehler: ${e.message}`);
        }
    }
}

pruefeTeilnehmer(teilnehmerListe);
/* 
(Optional) Aufgabe 8: Ausgabe aller Teilnehmer 
Erstelle eine simple .html-Datei, in der du ein <script> einbettest. Gib dann für jeden 
Teilnehmer einen kleinen „Steckbrief“ in einem geeigneten Element aus (Tipp: mit <div> 
wrappen). 
*/

function displayTeilnehmer(array) {
    const outputContainer = document.getElementById("teilnehmerliste");
    for (const eins of array){
        const outputElement = document.createElement("p");
        outputElement.textContent = `Name: ${eins.name}, Alter: ${eins.alter}, Interessen: ${eins.interessen.join(", ")}`;
        outputContainer.appendChild(outputElement);
    }
    return outputElement
}

const button = document.getElementById("button");
button.addEventListener("click", ()=> displayTeilnehmer(teilnehmerListe));
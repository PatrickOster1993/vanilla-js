
// Aufgabe 1: Teilnehmer-Daten definieren 
// Erstelle ein Array teilnehmerListe mit mindestens 6 Objekten. Jeder Teilnehmer soll 
// folgende Eigenschaften haben: 
// •name (String) 
// •alter (Zahl) 
// •geschlecht (m/w/div) 
// •interessen (Array aus Strings) 


const teilnehmerListe = [
    { name: "Anna", alter: 28, geschlecht: "w", interessen: ["Lesen", "Sport", "Reisen"] },
    { name: "Markus", alter: 31, geschlecht: "m", interessen: ["Musik", "Sport"] },
    { name: "Ursula", alter: 59, geschlecht: "w", interessen: ["Kochen", "Kunst"] },
    { name: "Thomas", alter: 35, geschlecht: "m", interessen: ["Sport", "Technik"] },
    { name: "Franz", alter: 39, geschlecht: "div", interessen: ["Fotografie", "Sport"] },
    { name: "Alex", alter: 27, geschlecht: "m", interessen: ["Lesen", "Gaming"] }
];
console.log("#########################################################################################")

//   Aufgabe 2: Begrüßung mit Template Literals 
// Schreibe eine Funktion begruesseTeilnehmer(teilnehmer), die als Parameter ein 
// Teilnehmer-Objekt erhält und mit einem Template Literal eine Begrüßung in der Konsole 
// ausgibt,
console.log("###############################   Aufgabe 2     ##########################################################")

function begruesseTeilnehmer(teilnehmer) {
    console.log(`Hallo ${teilnehmer.name}. Du bist ${teilnehmer.alter} Jahre alt und interessierst dich für: ${teilnehmer.interessen.join(", ")}.`); 
    // Join gibt ein Array aus Strings nach gewünschter Struktur hintereinander weg aus.
    // in diesem Fall ein komma und leerzeichen als "Trenner"
}
 
begruesseTeilnehmer(teilnehmerListe[0]);


//   Aufgabe 3: Teilnehmer auswerten mit map() 
//   Erstelle ein neues Array alleNamenMitAlter, das alle Teilnehmer in folgendem Format 
//   enthält: 
//   ["Anna (28)", "Ben (31)", ...] 
//   Verwende dazu map() und eine Arrow-Function.

console.log("###############################   Aufgabe 3     ##########################################################")


const alleNamenMitAlter = teilnehmerListe.map(t => `${t.name} (${t.alter})`);
// map() geht durch jede Position des Arrays und gibt jede Position zurück, die die vorgegebenen Attribute enthalten. 
// Es werden dann auch nur diese Attribute zurückgegeben, die anderen weren weggelassen 
console.log(alleNamenMitAlter);


// Aufgabe 4: Teilnehmer filtern mit filter() 
// 1. Erstelle ein neues Array nurMaennlich, das nur männliche Teilnehmer enthält. 
// 2. Erstelle ein weiteres Array interessiertSichFuerSport, das alle Teilnehmer enthält, 
// deren Interessen „Sport“ beinhalten. 
// Tipp: array.includes("Sport") hilft bei der Interessenprüfung. 

console.log("###############################   Aufgabe 4.1     ##########################################################")


// 1. Erstelle ein neues Array nurMaennlich, das nur männliche Teilnehmer enthält.
const nurMaennlich = teilnehmerListe.filter(t => t.geschlecht === "m");
//filter() geht durch jede Position des Arrays und filtert nach vorgegebenen Paramtern, welche Positionen zurückgegeben werden und welche nicht.
console.log(nurMaennlich);

console.log("###############################   Aufgabe 4.2     ##########################################################")

// 2. Erstelle ein weiteres Array interessiertSichFuerSport, das alle Teilnehmer enthält, 
const interessiertSichFuerSport = teilnehmerListe.filter(t => t.interessen.includes("Sport"));
//includes() geht durch das array und schaut ob das Attribut enthalten ist und gibt dann true oder false zurück
console.log(interessiertSichFuerSport.map(t => `${t.name} (${t.alter})`));


// Aufgabe 5: Destructuring & Rest-Operator 
// 1. Verwende Object Destructuring, um aus einem Teilnehmerobjekt name und alter 
// zu extrahieren. 
// 2. Sammle mit dem Rest-Operator alle weiteren Eigenschaften in ein Objekt restInfos 
// und gib dieses aus.
console.log("###############################   Aufgabe 5     ##########################################################")

const beispielTeilnehmer = teilnehmerListe[0];
const { name, alter, ...restInfos } = beispielTeilnehmer;

console.log(`Name: ${name}, Alter: ${alter}`);
console.log("Weitere Infos:", restInfos);


// Aufgabe 6: Teilnehmeranalyse mit Funktionen 
// Schreibe eine Funktion statistik(teilnehmerArray), die Folgendes berechnet: 
// • Durchschnittsalter aller Teilnehmer (map + Rechenoperation) 
// • Anzahl Teilnehmer je Geschlecht (m/w/div) 
// Gib die Ergebnisse mit einem Template Literal formatiert in der Konsole aus.

console.log("###############################   Aufgabe 6     ##########################################################")


function statistik(teilnehmerArray) {
    const durchschnittsalter = teilnehmerArray
      .map(t => t.alter)
      .reduce((sum, alter) => sum + alter, 0) / teilnehmerArray.length;
  
    const anzahlGeschlecht = {
      m: teilnehmerArray.filter(t => t.geschlecht === "m").length,
      w: teilnehmerArray.filter(t => t.geschlecht === "w").length,
      div: teilnehmerArray.filter(t => t.geschlecht === "div").length
    };
  
    console.log(`Statistik:
  - Durchschnittsalter: ${durchschnittsalter.toFixed(2)} Jahre
  - Teilnehmer männlich: ${anzahlGeschlecht.m}
  - Teilnehmer weiblich: ${anzahlGeschlecht.w}
  - Teilnehmer divers: ${anzahlGeschlecht.div}`);
  }
  
  // Beispiel:
  statistik(teilnehmerListe);
  

//   Aufgabe 7: Teilnehmer prüfen (Exception Handling) 
// Schreibe eine Funktion pruefeTeilnehmer(teilnehmer), die folgende Bedingungen 
// überprüft: 
// •name muss ein String sein 
// •alter darf nicht kleiner als 0 sein 
// •interessen muss ein Array sein 
// Falls ein Fehler auftritt, wirf eine Exception mit einer aussagekräftigen Fehlermeldung und 
// fange sie mit try/catch ab. Gib im Fehlerfall eine Fehlermeldung aus und setze den 
// Teilnehmer nicht auf die Liste.

console.log("###############################   Aufgabe 7     ##########################################################")


function pruefeTeilnehmer(teilnehmer) {
    try {
      if (typeof teilnehmer.name !== "string") {
        throw new Error("Name muss ein String sein.");
      }
      if (typeof teilnehmer.alter !== "number" || teilnehmer.alter < 0) {
        throw new Error("Alter muss eine positive Zahl sein.");
      }
      if (!Array.isArray(teilnehmer.interessen)) {
        throw new Error("Interessen müssen als Array vorliegen.");
      }
  
      console.log("Teilnehmer gültig:", teilnehmer.name);
      return true;
  
    } catch (error) {
      console.error("Fehler bei Teilnehmer:", error.message);
      return false;
    }
  }
  
  // Beispieltest:
  const neuerTeilnehmer = { name: "Gina", alter: -5, geschlecht: "w", interessen: "Sport" };
  if (pruefeTeilnehmer(neuerTeilnehmer)) {
    teilnehmerListe.push(neuerTeilnehmer);
  }


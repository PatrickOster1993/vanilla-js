// Zusammenfassung:
// - Spread: Viele Werte -> ein Array
// - Rest: ein Array -> viele Werte
// in anderen Worten: Rest sammelt, Spread verteilt!

// ### kleine Übung (Template Literals, Spread, Rest, ...) ###

// Gegeben:
const teilnehmer = ["Anna", "Ben", "Carla", "David", "Emma"]

// Aufgabenstellung:
// a) Schreiben Sie eine Funktion, die die ersten beiden Teilnehmer über die Konsele begrüßt (Rest soll einfach nur in Konsole ausgegeben werden)!

const gruppe1 = ["Lisa", "Tom"]
const gruppe2 = ["Max", "Nina"]

// b) Erstellen Sie ein neues Array, das beide Gruppen zusammenlegt und daraus eine große Gruppe macht

// c) Erstellen Sie nun ein neues Array, in dem Sie die Gruppe nun mit den Teilnehmern zusammenführen und geben Sie alle Teilnehmer untereinander in der Konsole aus!

// Aufgabe a
function begruessung(teilnehmer1, teilnehmer2, ...rest) {
    console.log("Hallo "+teilnehmer1+" und "+teilnehmer2+"!")
    console.log("Die restlichen Teuilnehmer sind :", rest)
}
begruessung(...teilnehmer);

// Aufgabe b
const zusammengelegtGruppe = [...gruppe1, ...gruppe2]
console.log("Beide Gruppen zusammengelegt", zusammengelegtGruppe);

// Aufgabe c
const alleTeilnehmer = [...zuassamengelegtGruppe, ...teilnehmer]
alleTeilnehmer.forEach(teilnehmer => {
    console.log(teilnehmer)
});


// Aufgabenstellung:
// - Erstellen Sie ein Array mit mehreren Aufgaben (als Object mit den Eigenschaften "text" und "erledigt")
//     z. B. text: "Einkaufen gehen" ... erledigt: false
// - filtern Sie die noch ausstehenden Aufgaben (filter())!
// - geben Sie all diese gefilterten Aufgaben als Text in die Console aus (untereinander -> map(), template literals)
// - Alle möglichen Fehler immer schön abfangen!
// Aufgabenstellung:
// a) Schreiben Sie eine Funktion, die die ersten beiden Teilnehmer über die Konsele begrüßt (Rest soll einfach nur in Konsole ausgegeben werden)!
const gruppe1 = ["Lisa", "Tom"];
const gruppe2 = ["Max", "Nina"];

function greetParticipants(group1, group2) {
  // Begrüßen der ersten beiden Teilnehmer
  console.log(`Herzlich Willkommen ${group1[0]} und ${group1[1]}!`);
  console.log(`Herzlich Willkommen ${group2[0]} und ${group2[1]}!`);

  // Restliche Teilnehmer ausgeben
  console.log(group1[2] ? group1[2] : '');
  console.log(group2[2] ? group2[2] : '');
}

// b) Erstellen Sie ein neues Array, das beide Gruppen zusammenlegt und daraus eine große Gruppe macht
const grosseGruppe = gruppe1.concat(gruppe2);

// c) Erstellen Sie nun ein neues Array, in dem Sie die Gruppe nun mit den Teilnehmern zusammenführen und geben Sie alle Teilnehmer untereinander in der Konsole aus!
function printParticipants(group) {
  group.forEach(participant => {
    console.log(participant);
  });
}

// Aufrufen der Funktionen
greetParticipants(gruppe1, gruppe2);
printParticipants(grosseGruppe);

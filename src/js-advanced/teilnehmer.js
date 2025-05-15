// Teilnehmer-Daten definieren
const teilnehmerListe = [
  {
    name: "Max Mustermann",
    alter: 28,
    geschlecht: "m",
    interessen: ["Programmieren", "Fußball", "Reisen"]
  },
  {
    name: "Anna Schmidt",
    alter: 24,
    geschlecht: "w",
    interessen: ["Fotografie", "Yoga", "Kochen"]
  },
  {
    name: "Alex Winter",
    alter: 32,
    geschlecht: "div",
    interessen: ["Musik", "Gaming", "Kunst"]
  },
  {
    name: "Laura Weber",
    alter: 29,
    geschlecht: "w",
    interessen: ["Lesen", "Wandern", "Tanzen"]
  },
  {
    name: "Thomas Becker",
    alter: 35,
    geschlecht: "m",
    interessen: ["Radfahren", "Schwimmen", "Kochen"]
  },
  {
    name: "Sophie Müller",
    alter: 27,
    geschlecht: "w",
    interessen: ["Theater", "Reisen", "Sprachen"]
  }
];

console.log("Teilnehmerliste:", teilnehmerListe);

// Export für eventuelle Weiterverwendung
if (typeof module !== 'undefined') {
  module.exports = { teilnehmerListe };
}

// ### 1. let, var & const ###

const maxValue = 10 // Konstante
{
  let i = 0 // Variable: nur innerhalb des Scopes gültig
  var n = 1 // Variable: auch außerhalb des Scopes gültig
}

// ### 2. Template Literals ###
const me = "Patrick"
const age = 31

const begruessungOld =
  "Hallo " + me + "! Du bist " + age.toString() + " Jahre alt!" // alte Variante!
const begruessungNew = `Hallo ${me}! Du bist ${age} Jahre alt!` // neue Variante!

console.log(begruessungOld)
console.log(begruessungNew)

// ### 3. Destructuring ###

// ###### 3a: Object-Destructuring: ######
const person = { vorname: "Patrick", alter: 31, hobby: "Fußball" }

// klassischer Weg:
const vornameClassic = person.vorname
const alterClassic = person.alter
console.log(vornameClassic, alterClassic)

// moderner Weg
const { vorname, alter } = person
console.log(vorname, alter)

// Beispiel aus der React-Welt
// const state = { buttonClicked: false, numberOfUsers: 0, dataLoaded: false }
// const { buttonClicked, numberOfUsers } = state

// ###### 3b: Array-Destructuring: ######
const farben = ["rot", "gruen", "blau"]

const [rot, , blau] = farben // überspringt das mittlere Element
console.log(rot, blau)

// ### 4. Spread- & Rest-Operator ###

// ###### 4a: Spread-Operator: ######
const zahlen = [1, 2, 3]
const andereZahlen = [4, 5, 6]
const zahlenNew = [4, 5, ...zahlen, 6, 7, ...andereZahlen] // Spread-Operator
console.log(zahlenNew)

// ###### 4b: Rest-Operator: ######

// Use-Case 1: Funktionen mit variabler Argumentzahl erstellen ...
function zeigeNamen(...arg) {
  console.log(arg)
}

zeigeNamen("Patrick", "Sven", "Lars", "Lisa")
zeigeNamen("Patrick")
zeigeNamen(["Sven", "Holger"])

// Use-Case 2: Destructuring mit Rest-Operator ...
const zahlenArray = [10, 20, 30, 40, 50, 60, 70, 80]

// bereits bekanntes "Array-Destructuring":
const [erste, zweite, , , fuenfte] = zahlenArray
console.log(erste, zweite, fuenfte)

// Jetzt Erweiterung mit Rest-Operator:
const [first, second, , ...rest] = zahlenArray
console.log(first, second, rest)

// Use-Case 3: Object-Destructuring mit Rest-Operator:
const mensch = {
  name: "Patrick",
  alter: 31,
  unerfuellteSehnsucht: "Flugschein machen",
  hobby: "Fußball",
  verheiratet: false,
}

const { verheiratet, ...andereInfos } = mensch
console.log(andereInfos)

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

// Konsolenausgabe:
console.log("### Playground ###")
console.warn("Warnings ausgeben!")
console.error("Fehler ausgeben!")

// Datentypen
//// String
let letName = "Patrick" // Variable (= veränderlich)
var varName = "Patrick" // Variable (= veränderlich)
const constName = "Patrick" // Konstante (= unveränderlich)
//// Number
let x = 5
let y = 7.37 // kein Unterschied zwischen Integer u. Float! Alles als Number gehandhabt!
const PI = 3.14 // Konstante
//// boolean
let active = true // Boolscher Datentyp
//// null & undefined
let nullVariable = null
let undefiniert = undefined

{
  let scopeVariableLet = "letVariable" // Gültigkeit nur innerhalb des Scopes!
  var scopeVariableVar = "varVariable" // auch außerhalb des Scopes zugreifbar!
}

// Exception-Handling
try {
  console.log(scopeVariableLet)
} catch (error) {
  console.error(
    "let-Variable nur innerhalb des Scopes gültig, anonsten Fehler:",
    error.message
  )
}

console.log(scopeVariableVar)

try {
  PI += 5 // Achtung, Konstante!!!
} catch (error) {
  console.error(error)
}

// Typeof
console.log(
  typeof x,
  typeof y,
  typeof letName,
  typeof active,
  typeof undefiniert,
  typeof nullVariable,
  typeof bla, // -> 'undefined', da noch nicht definiert!
  typeof PI
)

// Operatoren
//// klassisch

let a = 2

console.log(x + y) // Addition
console.log(x - y) // Subtraktion
console.log(x * y) // Multiplikation
console.log(x / y) // Division
console.log(x % y) // Modulo
console.log(x ** y) // Potenzierung
console.log(2 ** 3) // 2 hoch 3 = 8
console.log(2 ** 0.5) // Quadratwurzel von 2 = 1.4142135623730951
console.log(2 ** -1) // 1/2 = 0.5
console.log(2 ** -2) // 1/4 = 0.25
console.log(++a) //Pre-Inkrement
console.log(--a) //Pre-Dekrement
console.log(a++) //Post-Inkrement
console.log(a--) //Post-Dekrement
console.log(a)

//// logisch
beideWahr = true && false
einerWahr = true || false

console.log(beideWahr, einerWahr)

active = false

// Bedingungen
//// IF-Statements (best-practice: wenn ich nur 1 alternativen Zweig, also 'else if', benötige)
if (active) {
  // boolscher Vergleich
  console.log("IF-Zweig wahr!")
} else if (2 < 2) {
  // Bedingte Überprüfung mittels Vergleichsoperatoren: ==, <, >, <=, >=, ...
  console.log("ELSE-IF-Zweig wahr (UND IF-Zweig falsch)!")
} else {
  console.log("Kein vorhergehender Zweig wahr!")
}

//////// Beispiel: IF mit Vergleichsoperatoren -> Was wird in der Konsole ausgegeben?
x = 3
y = 6
z = 9

if (x < 10 && y > 10) {
  console.log("Hallo")
} else if (x < 0 || y < 10) {
  if (z == 9) {
    console.log("Welt")
  } else {
    console.log("Nicht-Welt")
  }
} else {
  console.log("Nicht-Hallo")
}

//// Switch-Case (best-practice: wenn ich mehr als 1 alternativen Zweig benötige)
a = 6

switch (a) {
  case 1:
    console.log("a ist 1")
    break
  case 2:
    console.log("a ist 2")
    break
  case 3:
    console.log("a ist 3")
    break
  case 4:
    console.log("a ist 4")
    break
  case 5:
    console.log("a ist 5")
    break
  default:
    console.log("a ist", a)
}

// Scope ohne "Syntax-Konstrukt":
{
  let hallo = "hallo"
}

// Schleifen
//// while (= kopfgesteuert) -> Bedingung bereits zu Beginn überprüft!
console.log("WHILE")
i = 0

while (i < 0) {
  console.log("Schleifendurchlauf:", i)
  i++
}

//// do-while (= fußgesteuert) -> wird immer mind. 1 x ausgeführt (Bedingung erst am Ende überprüft)
console.log("DO-WHILE")
i = 0

do {
  console.log("Schleifendurchlauf:", i)
  i++
} while (i < 0)

//// for
console.log("FOR")

for (n = 5; n > 0; n--) {
  console.log("n =", n)
}

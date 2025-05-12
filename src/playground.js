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

console.log("### Playground ###")
console.log("Hat geklappt!")

console.warn("Das ist eine Warnung!")
console.error("Das ist ein Fehler!")
console.info("Das ist eine Info!")

let letName = "Patrick" // Variable (= veränderlich)
var varName = "Patrick" // Variable (= veränderlich)
const constName = "Patrick" // Konstante (= unveränderlich)

//// Number
let x = 5
let y = 7.37 // kein Unterschied zwischen Integer u. Float! Alles als Number gehandhabt!
const PI = 3.14 // Konstante
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
{
    let scopeVariableLet = "letVariable" // Gültigkeit nur innerhalb des Scopes!
    var scopeVariableVar = "varVariable" // auch außerhalb des Scopes zugreifbar!
}

try {
    console.log(scopeVariableLet) // Fehler: scopeVariableLet is not defined
}
catch {
    console.log("scopeVariableLet is not defined")
}

console.log (scopeVariableVar)
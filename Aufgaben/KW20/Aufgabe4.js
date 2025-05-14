// Binärzahlen definieren
let a = 0b1101; // 13
let b = 0b1011; // 11

// Bitweise Operationen
let bitUnd = a & b;
let bitOder = a | b;
let bitXor = a ^ b;

// Hilfsfunktion zur Formatierung in Binär
function toBinaryString(value) {
    return "0b" + value.toString(2).padStart(4, "0");
}

// Ergebnisse ausgeben
console.log("Bitweises UND:");
console.log("Binär:   ", toBinaryString(bitUnd));
console.log("Dezimal: ", bitUnd);

console.log("\nBitweises ODER:");
console.log("Binär:   ", toBinaryString(bitOder));
console.log("Dezimal: ", bitOder);

console.log("\nBitweises XOR:");
console.log("Binär:   ", toBinaryString(bitXor));
console.log("Dezimal: ", bitXor);

// Prüfen, ob das Ergebnis ungerade ist
let istUngerade = bitUnd % 2 === 1;
console.log("\nDas Ergebnis des bitweisen UND ist ungerade:", istUngerade);

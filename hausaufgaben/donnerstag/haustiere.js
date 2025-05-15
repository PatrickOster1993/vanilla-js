const haustiere = [{
    name: "Bello", 
    alter: 5, 
    tierart: "hund", 
    aktivitaeten: ["Spielen", "Schwimmen"]
},{
    name: "Fred", 
    alter: 2, 
    tierart: "frettchen", 
    aktivitaeten: ["Klettern", "Kuscheln"]
}, {
    name: "chilli", 
    alter: 1, 
    tierart: "chinchilla", 
    aktivitaeten: ["Chillen", "Schlafen"]
}
]


// Funktion zum Anzeigen eines einzelnen Haustiers
const zeigeHaustier = (haustier) => {
    const tierkarte = document.createElement("div");
    tierkarte.className = "haustier";
    tierkarte.innerHTML = `
        <h3>${haustier.name}</h3>
        <p>Alter: ${haustier.alter}</p>
        <p>Tierart: ${haustier.tierart}</p>
        <p>Aktivitäten: ${haustier.aktivitaeten.join(", ")}</p>
    `;
    document.getElementById("tiereContainer").appendChild(tierkarte);
};

// Funktion zum Anzeigen aller Haustiere
const zeigeAlleHaustiere = (tiere = haustiere, filterTierart = "") => {
    const container = document.getElementById("tiereContainer");
    container.innerHTML = ""; // Container leeren
    
    let anzuzeigendeTiere = tiere;
    if (filterTierart) {
        anzuzeigendeTiere = tiere.filter(tier => tier.tierart.toLowerCase() === filterTierart.toLowerCase());
    }
    
    anzuzeigendeTiere.forEach(tier => zeigeHaustier(tier));
};

// Formular Event Listener
document.getElementById("haustierFormular").addEventListener("submit", (event) => {
    event.preventDefault();
    
    try {
        // Werte aus dem Formular auslesen
        const name = document.getElementById("name").value;
        const alter = parseInt(document.getElementById("alter").value);
        const tierart = document.getElementById("tierart").value;
        const aktivitaetenString = document.getElementById("aktivitaeten").value;
        const aktivitaeten = aktivitaetenString.split(",").map(act => act.trim());
        
        // Typenprüfung
        if (typeof name !== "string" || name.length === 0) {
            throw new Error("Name muss ein gültiger String sein");
        }
        
        if (isNaN(alter) || alter < 0) {
            throw new Error("Alter muss eine positive Zahl sein");
        }
        
        if (!Array.isArray(aktivitaeten) || aktivitaeten.length === 0) {
            throw new Error("Aktivitäten müssen als Komma-getrennte Liste angegeben werden");
        }
        
        // Neues Haustier erstellen
        const neuesHaustier = {
            name,
            alter,
            tierart,
            aktivitaeten
        };
        
        // Zum Array hinzufügen
        haustiere.push(neuesHaustier);
        
        // Anzeigen und Formular zurücksetzen
        zeigeHaustier(neuesHaustier);
        event.target.reset();
        
    } catch (error) {
        console.error("Fehler beim Hinzufügen des Haustiers:", error.message);
    }
});

// Filter-Funktionalität
document.getElementById("tierartFilter").addEventListener("change", (event) => {
    zeigeAlleHaustiere(haustiere, event.target.value);
});

// Sortier-Funktionalität
document.getElementById("sortierungAlter").addEventListener("change", (event) => {
    const sortierteHaustiere = [...haustiere].sort((a, b) => {
        return event.target.value === "aufsteigend" ? a.alter - b.alter : b.alter - a.alter;
    });
    zeigeAlleHaustiere(sortierteHaustiere, document.getElementById("tierartFilter").value);
});

// Initial alle Haustiere anzeigen
document.addEventListener("DOMContentLoaded", () => {
    zeigeAlleHaustiere();
});
const buttonMontag = document.getElementById("montag");
const buttonDienstag = document.getElementById("dienstag");
const buttonMittwoch = document.getElementById("mittwoch");
const buttonDonnerstag = document.getElementById("donnerstag");
const buttonFreitag = document.getElementById("freitag");


function monday() {
    document.getElementById("output").innerText = "Aufgaben Montag  \nName: Mattijn\nAlter: 40\nLieblingsessen: Lasagne..."
    console.log("Mattijn, 40 Jahre Alt, Isst gerne Lasagne")
}

const tuesday = () => {
    document.getElementById("output").innerText = "Under Construction"
}

function wednesday() {
    document.getElementById("output").innerText = "Under Construction"
}

function thursday() {
    document.getElementById("output").innerText = "Under Construction"
}

function friday() {
    document.getElementById("output").innerText = "Under Construction"
}

buttonMontag.addEventListener("click",monday);
buttonDienstag.addEventListener("click",tuesday);
buttonMittwoch.addEventListener("click",wednesday);
buttonDonnerstag.addEventListener("click",thursday);
buttonFreitag.addEventListener("click",friday);
// Aufgabe 2

// Aufgaben


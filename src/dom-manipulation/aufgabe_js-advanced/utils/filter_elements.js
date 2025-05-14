export function getFilteredElements(tasks, id, element) {
  const outputContainer = document.getElementById("loesung")
  const offeneAufgaben = aufgaben
    .filter((aufgabe) => !aufgabe.erledigt)
    .map((aufgabe) => {
      const outputElement = document.createElement(element)
      outputElement.textContent = aufgabe.text
      outputContainer.appendChild(outputElement)
      return outputElement
    })
  return offeneAufgaben
}

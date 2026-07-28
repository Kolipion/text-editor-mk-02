// Textfeld auswählen
const textarea = document.getElementById("editor");

// Nach maximal 90 Zeichen einen Zeilenumbruch einfügen,
// ohne Wörter zu trennen.
textarea.addEventListener("input", function(){

    // Alle vorhandenen Zeilenumbrüche entfernen
    let text = this.value.replace(/\n/g, "");

    let result = "";
    const maxLength = 90;

    while(text.length > maxLength){

        // Das letzte Leerzeichen vor Zeichen 90 suchen
        let breakPoint = text.lastIndexOf(" ", maxLength);

        // Falls kein Leerzeichen gefunden wurde,
        // wird nach 90 Zeichen getrennt.
        if(breakPoint === -1){
            breakPoint = maxLength;
        }

        result += text.substring(0, breakPoint) + "\n";

        // Den restlichen Text weiter verarbeiten
        text = text.substring(breakPoint).trimStart();
    }

    result += text;

    this.value = result;

});

// Textfeld auswählen
const textarea = document.getElementById("editor");

// Nach jeweils 40 Zeichen einen Zeilenumbruch einfügen
textarea.addEventListener("input", function(){

    let text = this.value.replace(/\n/g, "");

    let result = "";

    for(let i = 0; i < text.length; i++){

        result += text[i];

        if((i + 1) % 90 === 0){
            result += "\n";
        }

    }

    this.value = result;

});


// EmailJS initialisieren
emailjs.init({
    publicKey: "t_HBf_gztN5fNCVX0"
});


// Save-Button
document.getElementById("save").addEventListener("click", function(){

    const text = document.getElementById("editor").value;

    emailjs.send(
        "service_yimquql",
        "template_k5wrj1k",
        {
            message: text
        }
    ).then(() => {

        alert("Gespeichert");

    });

});

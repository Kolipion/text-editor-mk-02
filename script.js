emailjs.init({
    publicKey: "8s5AdO0IZ99pi8O8d"
});

document.getElementById("save").addEventListener("click", function(){

    const text = document.getElementById("editor").value;

    emailjs.send(
        "service_godqvsl",
        "template_b2cit9p",
        {
            message: text
        }
    ).then(() => {
        alert("Gespeichert");
    });
});

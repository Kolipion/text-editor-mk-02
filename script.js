emailjs.init({
    publicKey: "t_HBf_gztN5fNCVX0"
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

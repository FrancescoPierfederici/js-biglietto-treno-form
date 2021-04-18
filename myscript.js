



var element = document.getElementById("titolo");
element.style.color = "white";



window.addEventListener("load", function () {
    console.log("pagina caricata completamente")

    onWindowLoad()
})

function onWindowLoad() {
    var myForm = document.getElementById("myForm");
    var prezzoBigliettoaKm = 0.21;
    console.dir(myForm)
    myForm.addEventListener("submit", function (event) {
        var nomeElement = document.querySelector("[name='name']");
        var kmPercorsiElement = document.querySelector("[name='kmPercorsi']");
        var nomeUtenteElement = document.getElementById("nomeUtente");

        var numeroRandom = document.getElementById("numeroRandom").innerHTML = Math.floor(Math.random() * 10000) + 90000;
        var numeroCarrozza = document.getElementById("numeroCarrozza").innerHTML = Math.floor(Math.random() * 20) + 1;

        event.preventDefault();

        var form = event.currentTarget;

        var formElements = form.elements;
        var kmPercorsi = formElements.kmPercorsi.value;
        var nome = nomeElement.value;


        nomeUtenteElement.innerHTML = nome;



        var fasciaEta = document.getElementById("fasciaEta").value
        document.getElementById("fasciaScelta").innerHTML = document.getElementById("fasciaEta").value;
        var sconto = document.getElementById("fasciaEta").value;


        var prezzoBiglietto = (kmPercorsi * prezzoBigliettoaKm).toFixed(2);




        if (sconto === "Minorenni") {
            document.getElementById("prezzoBiglietto").innerHTML = (prezzoBiglietto - ((prezzoBiglietto * 20) / 100)).toFixed(2) + "€";

        } else if (sconto === "over65") {
            document.getElementById("prezzoBiglietto").innerHTML = (prezzoBiglietto - ((prezzoBiglietto * 40) / 100)).toFixed(2) + "€";

        } else {
            document.getElementById("prezzoBiglietto").innerHTML = prezzoBiglietto + "€";
        }






    });
    myForm.addEventListener("reset", function () {

    })

}






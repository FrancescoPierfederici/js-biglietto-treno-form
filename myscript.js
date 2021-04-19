// CONSEGNA
// Partendo dall'esercizio del biglietto, aggiungiamo la parte visiva come da screenshot
// Creiamo un finto biglietto del treno con:
// Nome passeggero
// Codice treno (numero casuale tra 90000 e 100000 escluso)
// Numero carrozza
// Prezzo calcolato
// Categoria selezionata dall'utente
// Aggiungiamo una piccola animazione al click su "Crea" e "Annulla", se clicchiamo su annulla dobbiamo ripulire il form.


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
    // Aggiungiamo listener sul form all'evento "submit"
    // submit = avviene ogni volta che si preme il pulsante INVIO all'interno di un input 
    //  o si preme sul pulsante invio con il mouse
    myForm.addEventListener("submit", function (event) {
        var nomeElement = document.querySelector("[name='name']");
        var kmPercorsiElement = document.querySelector("[name='kmPercorsi']");
        var nomeUtenteElement = document.getElementById("nomeUtente");

        var numeroRandom = document.getElementById("numeroRandom").innerHTML = Math.floor(Math.random() * 10000) + 90000;
        var numeroCarrozza = document.getElementById("numeroCarrozza").innerHTML = Math.floor(Math.random() * 20) + 1;


        // Blocchiamo il comportamento di default del submit che normalmente
        // ricaricherebbe la pagina
        event.preventDefault();


        // Recupero l'elemento al quale ho associato l'evento submit
        var form = event.currentTarget;


        // Recupero la lista degli elementi presenti nel form
        var formElements = form.elements;

        
        var kmPercorsi = formElements.kmPercorsi.value;
        var nome = nomeElement.value;

        nomeUtenteElement.innerHTML = nome;


        // var fasciaEta = document.getElementById("fasciaEta").value
        document.getElementById("fasciaScelta").innerHTML = document.getElementById("fasciaEta").value;
        var sconto = document.getElementById("fasciaEta").value;


        var prezzoBiglietto = (kmPercorsi * prezzoBigliettoaKm).toFixed(2);


        if (sconto === "minorenni") {
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






const setup = () => {
    // zorg ervoor dat een klik op de knop onze 'kopieer' function oproept
    let btnKopieer = document.getElementById("btnKopieer");
    btnKopieer.addEventListener("click", kopieer);
}

const kopieer = () => {
    // bemachtig een verwijzing naar het input element in de DOM-tree
    let txtInput = document.getElementById("txtInput");

    // vraag de tekst op van het input element
    let tekst = txtInput.value;

    // zet de tekst op de console
    console.log(tekst);
}

// zorg ervoor dat onze 'setup' function wordt uitgevoerd als de pagina is ingeladen (en de DOM-tree is opgebouwd)
window.addEventListener("load", setup);
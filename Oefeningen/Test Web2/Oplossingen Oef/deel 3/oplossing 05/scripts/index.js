const setup = () => {
    // zorg ervoor dat een klik op de knop onze 'wijzig' function oproept
    let btnWijzig = document.getElementById("btnWijzig");
    btnWijzig.addEventListener("click", wijzig);
}

const wijzig = () => {
    // wijzig de tekst van de paragraaf
    let pElement=document.getElementById("txtOutput");
    pElement.textContent="Welkom!";
}

// zorg ervoor dat onze 'setup' function wordt uitgevoerd als de pagina is ingeladen (en de DOM-tree is opgebouwd)
window.addEventListener("load", setup);
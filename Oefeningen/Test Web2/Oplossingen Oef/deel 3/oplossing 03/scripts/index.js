const setup = () => {
    // wijzig de tekst van de paragraaf
    let pElement=document.getElementById("txtOutput");
    pElement.textContent="Welkom!";
}

// zorg ervoor dat onze 'setup' function wordt uitgevoerd als de pagina is ingeladen (en de DOM-tree is opgebouwd)
window.addEventListener("load", setup);
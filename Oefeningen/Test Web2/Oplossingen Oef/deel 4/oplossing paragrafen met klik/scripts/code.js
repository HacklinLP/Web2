const setup = () => {
    // Vraag de DOM-tree om een lijst met alle paragrafen
    let paragrafen = document.getElementsByTagName("p");

    // Overloop alle elementen in de lijst
    for (let i=0;i<paragrafen.length;i++) {
        let paragraaf = paragrafen[i];
        // registreer de 'maakOpvallend' click event listener bij de paragraaf
        paragraaf.addEventListener("click", maakOpvallend);
    }
}

const maakOpvallend = (event) => {
    // achterhaal op welke paragraaf werd geklikt
    let paragraaf = event.target;

    // geef de paragraaf de CSS class 'opvallend'
    paragraaf.classList.add("opvallend");
}

window.addEventListener("load", setup);
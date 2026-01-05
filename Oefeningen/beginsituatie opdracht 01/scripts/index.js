const setup = () => {
	// registeer click event listener 'voegToe' bij #btnAdd
    let btnAdd = document.querySelector("#btnAdd");
    btnAdd.addEventListener("click", voegToe);
	// registreer click event listener 'wisAlles' bij #btnClear
    let btnClear = document.querySelector("#btnClear");
    btnAdd.addEventListener("click", wisAlles);
	// registreer click event listener 'maakBelangrijk' bij elke <li> in .lstIngredients
}

const voegToe = () => {
    let txtInput = document.getElementById("txtInput");
    let ingredient = txtInput.value;
    let lstIngredients = document.querySelectorAll("#lstIngredients");
    lstIngredients.innerHTML += "<li>${ingredient}</li>";

    let lis = document.querySelectorAll("#lstIngredients>li:last-child");
    nieuweLi.addEventListener("click", maakBelangrijk);
}

const wisAlles = () => {
	// Wis alle ingredienten
	// Je kunt dit doen door alle de .innerHTML van #lstIngredients een lege string in te stellen
    let btnClear = document.querySelector("#lstIngredients");
    btnClear.addEventListener("click", wisAlles);
}

const maakBelangrijk = (event) => {
	let geklikteElement = event.Target;
    geklikteElement
}
	
window.addEventListener('load',setup);




















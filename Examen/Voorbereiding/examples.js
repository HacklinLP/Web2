// ============================================
// JAVASCRIPT EXAMPLES - COURSE STYLE
// ============================================
// Examples written in the style used in class and tests
// Using const arrow functions, let variables, and setup pattern

// ============================================
// EXAMPLE 1: Basic Variables and Data Types
// ============================================
// Purpose: Shows how to declare variables with let and const

const demoVariables = () => {
    let naam = "Jan";
    let leeftijd = 25;
    const stad = "Gent";
    let isStudent = true;
    
    console.log("Naam:", naam);
    console.log("Leeftijd:", leeftijd);
    console.log("Stad:", stad);
    console.log("Is student:", isStudent);
}

// ============================================
// EXAMPLE 2: DOM Element Selection
// ============================================
// Purpose: Shows different ways to select DOM elements

const demoElementSelection = () => {
    // Get element by ID
    let btn = document.querySelector("#btnTest");
    if (btn) {
        console.log("Button found:", btn);
    }
    
    // Get elements by class name
    let paras = document.querySelectorAll(".para");
    console.log("Number of paragraphs:", paras.length);
    
    // Get elements by tag name
    let divs = document.querySelectorAll("div");
    console.log("Number of divs:", divs.length);
    
    // Query selector (modern way)
    let firstPara = document.querySelector(".para");
    let allParas = document.querySelectorAll(".para");
    console.log("First para:", firstPara);
    console.log("All paras:", allParas.length);
}

// ============================================
// EXAMPLE 3: Event Listeners - Click Event
// ============================================
// Purpose: Shows how to add click event listeners

const setupClickExample = () => {
    let btn = document.querySelector("#btnKlik");
    if (btn) {
        btn.addEventListener('click', handleClick);
    }
}

const handleClick = () => {
    console.log("Button clicked!");
    let output = document.querySelector("#output");
    if (output) {
        output.textContent = "Button was clicked!";
    }
}

// ============================================
// EXAMPLE 4: Toggle Class on Click
// ============================================
// Purpose: Toggle a CSS class when element is clicked

const setupToggle = () => {
    let paras = document.querySelectorAll('.para');
    for (let i = 0; i < paras.length; ++i) {
        let para = paras[i];
        para.addEventListener('click', toggleBelangrijk);
    }
}

const toggleBelangrijk = () => {
    let para = event.target;
    para.classList.toggle("belangrijk");
    console.log("Toggled class on:", para);
}

// ============================================
// EXAMPLE 5: Input and Output - Swap Values
// ============================================
// Purpose: Swap values between input and output elements

const setupSwap = () => {
    let btn = document.querySelector("#btnWissel");
    if (btn) {
        btn.addEventListener('click', wissel);
    }
}

const wissel = () => {
    console.log("Wissel");
    let txtInput = document.querySelector("#txtInput");
    let txtOutput = document.querySelector("#txtOutput");
    
    if (txtInput && txtOutput) {
        let temp = txtOutput.textContent;
        txtOutput.textContent = txtInput.value;
        txtInput.value = temp;
    }
}

// ============================================
// EXAMPLE 6: Add Item to List
// ============================================
// Purpose: Add new items to an unordered list

const setupAddToList = () => {
    let btn = document.querySelector("#btnVoegToe");
    if (btn) {
        btn.addEventListener('click', voegToe);
    }
}

const voegToe = () => {
    let txtInput = document.querySelector("#txtItem");
    let ul = document.querySelector("#lstItems");
    
    if (txtInput && ul && txtInput.value.trim() !== "") {
        ul.innerHTML = ul.innerHTML + `<li>${txtInput.value}</li>`;
        txtInput.value = "";
    }
}

// ============================================
// EXAMPLE 7: Change Text Content
// ============================================
// Purpose: Change text content of an element

const setupChangeText = () => {
    let btn = document.querySelector("#btnWijzig");
    if (btn) {
        btn.addEventListener('click', wijzigTekst);
    }
}

const wijzigTekst = () => {
    let txtInput = document.querySelector("#txtNaam");
    let output = document.querySelector("#txtWelkom");
    
    if (txtInput && output) {
        let naam = txtInput.value;
        if (naam.trim() !== "") {
            output.textContent = `Welkom, ${naam}!`;
        }
    }
}

// ============================================
// EXAMPLE 8: Counter - Increment/Decrement
// ============================================
// Purpose: Create a counter that can be incremented or decremented

let teller = 0;

const setupCounter = () => {
    let btnPlus = document.querySelector("#btnPlus");
    let btnMin = document.querySelector("#btnMin");
    let btnReset = document.querySelector("#btnReset");
    
    if (btnPlus) {
        btnPlus.addEventListener('click', verhoog);
    }
    if (btnMin) {
        btnMin.addEventListener('click', verlaag);
    }
    if (btnReset) {
        btnReset.addEventListener('click', reset);
    }
    
    updateTeller();
}

const verhoog = () => {
    teller++;
    updateTeller();
}

const verlaag = () => {
    teller--;
    updateTeller();
}

const reset = () => {
    teller = 0;
    updateTeller();
}

const updateTeller = () => {
    let output = document.querySelector("#txtTeller");
    if (output) {
        output.textContent = teller;
    }
}

// ============================================
// EXAMPLE 9: Change Background Color
// ============================================
// Purpose: Change background color of an element

const setupColorChange = () => {
    let btnRood = document.querySelector("#btnRood");
    let btnGroen = document.querySelector("#btnGroen");
    let btnBlauw = document.querySelector("#btnBlauw");
    
    if (btnRood) {
        btnRood.addEventListener('click', () => veranderKleur('red'));
    }
    if (btnGroen) {
        btnGroen.addEventListener('click', () => veranderKleur('green'));
    }
    if (btnBlauw) {
        btnBlauw.addEventListener('click', () => veranderKleur('blue'));
    }
}

const veranderKleur = (kleur) => {
    let div = document.querySelector("#divKleur");
    if (div) {
        div.style.backgroundColor = kleur;
    }
}

// ============================================
// EXAMPLE 10: Show/Hide Element
// ============================================
// Purpose: Toggle visibility of an element

const setupShowHide = () => {
    let btn = document.querySelector("#btnToggle");
    if (btn) {
        btn.addEventListener('click', toggleZichtbaar);
    }
}

const toggleZichtbaar = () => {
    let div = document.querySelector("#divVerberg");
    if (div) {
        if (div.style.display === "none") {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    }
}

// ============================================
// EXAMPLE 11: Form Validation
// ============================================
// Purpose: Validate form input before submission

const setupValidation = () => {
    let btn = document.querySelector("#btnSubmit");
    if (btn) {
        btn.addEventListener('click', valideer);
    }
}

const valideer = () => {
    let txtEmail = document.querySelector("#txtEmail");
    let txtWachtwoord = document.querySelector("#txtWachtwoord");
    let output = document.querySelector("#txtFout");
    
    if (txtEmail && txtWachtwoord && output) {
        let email = txtEmail.value;
        let wachtwoord = txtWachtwoord.value;
        
        if (email.trim() === "") {
            output.textContent = "Email is verplicht!";
            return;
        }
        
        if (wachtwoord.length < 6) {
            output.textContent = "Wachtwoord moet minstens 6 karakters zijn!";
            return;
        }
        
        output.textContent = "Formulier is geldig!";
    }
}

// ============================================
// EXAMPLE 12: Loop Through Elements
// ============================================
// Purpose: Loop through multiple elements and modify them

const setupLoop = () => {
    let btn = document.querySelector("#btnLoop");
    if (btn) {
        btn.addEventListener('click', loopDoorElementen);
    }
}

const loopDoorElementen = () => {
    let items = document.querySelectorAll(".item");
    for (let i = 0; i < items.length; ++i) {
        let item = items[i];
        item.style.color = "blue";
        item.textContent = `Item ${i + 1}`;
    }
}

// ============================================
// EXAMPLE 13: Array Operations
// ============================================
// Purpose: Work with arrays - add, remove, display

let boodschappen = [];

const setupBoodschappen = () => {
    let btnVoeg = document.querySelector("#btnVoegBoodschap");
    let btnToon = document.querySelector("#btnToonBoodschappen");
    let btnLeeg = document.querySelector("#btnLeeg");
    
    if (btnVoeg) {
        btnVoeg.addEventListener('click', voegBoodschap);
    }
    if (btnToon) {
        btnToon.addEventListener('click', toonBoodschappen);
    }
    if (btnLeeg) {
        btnLeeg.addEventListener('click', leegLijst);
    }
}

const voegBoodschap = () => {
    let txtInput = document.querySelector("#txtBoodschap");
    if (txtInput && txtInput.value.trim() !== "") {
        boodschappen.push(txtInput.value);
        txtInput.value = "";
        console.log("Boodschappen:", boodschappen);
    }
}

const toonBoodschappen = () => {
    let ul = document.querySelector("#lstBoodschappen");
    if (ul) {
        ul.innerHTML = "";
        for (let i = 0; i < boodschappen.length; ++i) {
            ul.innerHTML = ul.innerHTML + `<li>${boodschappen[i]}</li>`;
        }
    }
}

const leegLijst = () => {
    boodschappen = [];
    let ul = document.querySelector("#lstBoodschappen");
    if (ul) {
        ul.innerHTML = "";
    }
}

// ============================================
// EXAMPLE 14: Conditional Logic
// ============================================
// Purpose: Use if-else statements for decision making

const setupConditional = () => {
    let btn = document.querySelector("#btnCheck");
    if (btn) {
        btn.addEventListener('click', checkLeeftijd);
    }
}

const checkLeeftijd = () => {
    let txtInput = document.querySelector("#txtLeeftijd");
    let output = document.querySelector("#txtResultaat");
    
    if (txtInput && output) {
        let leeftijd = parseInt(txtInput.value);
        
        if (isNaN(leeftijd)) {
            output.textContent = "Geef een geldig getal in!";
        } else if (leeftijd >= 18) {
            output.textContent = "Je bent volwassen.";
        } else if (leeftijd >= 13) {
            output.textContent = "Je bent een tiener.";
        } else {
            output.textContent = "Je bent een kind.";
        }
    }
}

// ============================================
// EXAMPLE 15: String Operations
// ============================================
// Purpose: Manipulate strings - uppercase, lowercase, length

const setupStringOps = () => {
    let btn = document.querySelector("#btnString");
    if (btn) {
        btn.addEventListener('click', stringOperaties);
    }
}

const stringOperaties = () => {
    let txtInput = document.querySelector("#txtTekst");
    let output = document.querySelector("#txtStringResult");
    
    if (txtInput && output) {
        let tekst = txtInput.value;
        let resultaat = `Lengte: ${tekst.length}<br>`;
        resultaat += `Hoofdletters: ${tekst.toUpperCase()}<br>`;
        resultaat += `Kleine letters: ${tekst.toLowerCase()}<br>`;
        resultaat += `Eerste karakter: ${tekst.charAt(0)}`;
        
        output.innerHTML = resultaat;
    }
}

// ============================================
// EXAMPLE 16: Math Operations
// ============================================
// Purpose: Perform mathematical calculations

const setupMath = () => {
    let btn = document.querySelector("#btnBereken");
    if (btn) {
        btn.addEventListener('click', bereken);
    }
}

const bereken = () => {
    let txtGetal1 = document.querySelector("#txtGetal1");
    let txtGetal2 = document.querySelector("#txtGetal2");
    let output = document.querySelector("#txtBerekening");
    
    if (txtGetal1 && txtGetal2 && output) {
        let getal1 = parseFloat(txtGetal1.value);
        let getal2 = parseFloat(txtGetal2.value);
        
        if (isNaN(getal1) || isNaN(getal2)) {
            output.textContent = "Geef geldige getallen in!";
            return;
        }
        
        let som = getal1 + getal2;
        let verschil = getal1 - getal2;
        let product = getal1 * getal2;
        let quotient = getal1 / getal2;
        
        let resultaat = `Som: ${som}<br>`;
        resultaat += `Verschil: ${verschil}<br>`;
        resultaat += `Product: ${product}<br>`;
        resultaat += `Quotient: ${quotient.toFixed(2)}`;
        
        output.innerHTML = resultaat;
    }
}

// ============================================
// EXAMPLE 17: Remove Element from List
// ============================================
// Purpose: Remove items from a list when clicked

const setupRemove = () => {
    let items = document.querySelectorAll(".removeItem");
    for (let i = 0; i < items.length; ++i) {
        let item = items[i];
        item.addEventListener('click', verwijderItem);
    }
}

const verwijderItem = () => {
    let item = event.target;
    item.remove();
    console.log("Item verwijderd");
}

// ============================================
// EXAMPLE 18: Change Image Source
// ============================================
// Purpose: Change the source of an image element

const setupImageChange = () => {
    let btn = document.querySelector("#btnWijzigFoto");
    if (btn) {
        btn.addEventListener('click', wijzigFoto);
    }
}

const wijzigFoto = () => {
    let img = document.querySelector("#imgFoto");
    let txtInput = document.querySelector("#txtFotoUrl");
    
    if (img && txtInput) {
        img.src = txtInput.value;
    }
}

// ============================================
// EXAMPLE 19: Checkbox Handling
// ============================================
// Purpose: Handle checkbox checked state

const setupCheckbox = () => {
    let checkbox = document.querySelector("#chkAkkoord");
    if (checkbox) {
        checkbox.addEventListener('change', handleCheckbox);
    }
}

const handleCheckbox = () => {
    let checkbox = event.target;
    let output = document.querySelector("#txtCheckbox");
    
    if (output) {
        if (checkbox.checked) {
            output.textContent = "Checkbox is aangevinkt";
        } else {
            output.textContent = "Checkbox is niet aangevinkt";
        }
    }
}

// ============================================
// EXAMPLE 20: Radio Button Selection
// ============================================
// Purpose: Get selected radio button value

const setupRadio = () => {
    let radios = document.querySelectorAll("[name='keuze']");
    for (let i = 0; i < radios.length; ++i) {
        let radio = radios[i];
        radio.addEventListener('change', handleRadio);
    }
}

const handleRadio = () => {
    let radios = document.querySelectorAll("[name='keuze']");
    let output = document.querySelector("#txtRadio");
    
    if (output) {
        for (let i = 0; i < radios.length; ++i) {
            if (radios[i].checked) {
                output.textContent = `Geselecteerd: ${radios[i].value}`;
                break;
            }
        }
    }
}

// ============================================
// EXAMPLE 21: Select/Dropdown Handling
// ============================================
// Purpose: Get selected value from dropdown

const setupSelect = () => {
    let select = document.querySelector("#selOptie");
    if (select) {
        select.addEventListener('change', handleSelect);
    }
}

const handleSelect = () => {
    let select = event.target;
    let output = document.querySelector("#txtSelect");
    
    if (output) {
        output.textContent = `Geselecteerd: ${select.value}`;
    }
}

// ============================================
// EXAMPLE 22: Key Press Events
// ============================================
// Purpose: Handle keyboard input

const setupKeyPress = () => {
    let txtInput = document.querySelector("#txtToets");
    if (txtInput) {
        txtInput.addEventListener('keyup', handleKeyPress);
    }
}

const handleKeyPress = () => {
    let txtInput = event.target;
    let output = document.querySelector("#txtToetsResult");
    
    if (output) {
        output.textContent = `Je typte: ${txtInput.value}`;
    }
}

// ============================================
// EXAMPLE 23: Focus and Blur Events
// ============================================
// Purpose: Handle input focus and blur events

const setupFocusBlur = () => {
    let txtInput = document.querySelector("#txtFocus");
    if (txtInput) {
        txtInput.addEventListener('focus', handleFocus);
        txtInput.addEventListener('blur', handleBlur);
    }
}

const handleFocus = () => {
    let txtInput = event.target;
    txtInput.style.backgroundColor = "yellow";
    console.log("Input heeft focus");
}

const handleBlur = () => {
    let txtInput = event.target;
    txtInput.style.backgroundColor = "white";
    console.log("Input heeft geen focus meer");
}

// ============================================
// EXAMPLE 24: Prevent Default Behavior
// ============================================
// Purpose: Prevent default form submission

const setupPreventDefault = () => {
    let form = document.querySelector("#formSubmit");
    if (form) {
        form.addEventListener('submit', handleSubmit);
    }
}

const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submission prevented");
    let output = document.querySelector("#txtFormResult");
    if (output) {
        output.textContent = "Formulier niet verzonden (preventDefault)";
    }
}

// ============================================
// EXAMPLE 25: Create and Append Elements
// ============================================
// Purpose: Dynamically create new DOM elements

const setupCreateElement = () => {
    let btn = document.querySelector("#btnNieuwElement");
    if (btn) {
        btn.addEventListener('click', maakNieuwElement);
    }
}

const maakNieuwElement = () => {
    let container = document.querySelector("#divContainer");
    if (container) {
        let nieuwDiv = document.createElement("div");
        nieuwDiv.textContent = "Nieuw element toegevoegd!";
        nieuwDiv.className = "nieuwElement";
        container.appendChild(nieuwDiv);
    }
}

// ============================================
// MAIN SETUP FUNCTION
// ============================================
// Purpose: Initialize all examples when page loads

const setup = () => {
    console.log("Setup gestart");
    
    // Run basic examples
    demoVariables();
    demoElementSelection();
    
    // Setup interactive examples (only if elements exist on page)
    setupClickExample();
    setupToggle();
    setupSwap();
    setupAddToList();
    setupChangeText();
    setupCounter();
    setupColorChange();
    setupShowHide();
    setupValidation();
    setupLoop();
    setupBoodschappen();
    setupConditional();
    setupStringOps();
    setupMath();
    setupRemove();
    setupImageChange();
    setupCheckbox();
    setupRadio();
    setupSelect();
    setupKeyPress();
    setupFocusBlur();
    setupPreventDefault();
    setupCreateElement();
    
    console.log("Setup voltooid");
}

window.addEventListener("load", setup);

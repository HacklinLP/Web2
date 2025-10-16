const setup = () => {
    let btn = document.getElementById("btnWissel")
    btn.addEventListener('click', wissel)
}


const wissel = () => {
    console.log("Wissel");
    let txtInput = document.getElementById("txtInput");

    let txtOutput = document.getElementById("txtOutput");

    let temp = txtOutput.textContent;

    txtOutput.textContent = txtInput.value;

    txtInput.value = temp;

    //let ul = document.getElementById("lstBoodschappen");
    //ul.innerHTML = ul.innerHTML + `<li>${txtInput.value}</li>`;
}

window.addEventListener("load", setup);
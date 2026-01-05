const setup = () =>
{
    let div = document.getElementById("paradivke")
    div.addEventListener('click', printKlik);

}

const printKlik = () => {
    console.log("klik!");
}
window.addEventListener("load", setup);


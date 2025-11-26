const setup = () =>
{
    let btn = document.getElementById("paradivke")
    btn.addEventListener('click', printKlik);

}

const printKlik = () => {
    console.log("klik!");
}
window.addEventListener("load", setup);


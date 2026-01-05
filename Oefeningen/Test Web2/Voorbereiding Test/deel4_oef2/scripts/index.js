const setup = () =>
{
    let div = document.getElementById("paradivke")
    div.addEventListener('click', printKlik);
    div.addEventListener('mouseenter', printEnter);
    div.addEventListener('mouseleave', printLeave);
    div.addEventListener('mousemove', printMove);


}
const printEnter = () => {
    console.log("enter!");
}

const printLeave = () => {
    console.log("leave!");
}

const printMove = () => {
    console.log("MOVEEEEEE!");
}

const printKlik = () => {
    console.log("klik!");
}
window.addEventListener("load", setup);


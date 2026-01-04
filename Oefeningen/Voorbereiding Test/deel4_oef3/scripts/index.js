const setup = () =>
{
    let box = document.getElementById("paradivke");
    box.addEventListener('click', changeBackgroundColor);
}

const changeBackgroundColor = () => {
    let box = document.getElementById("paradivke");
    box.style.backgroundColor = "blue";
}
window.addEventListener("load", setup);


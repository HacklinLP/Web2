const setup = () =>
{


}

const klikAfbeelding = (event) => {
    let img = event.target;
    if (img.classList.contains("selected")) {
        img.classList.remove("selected");
    }
}
window.addEventListener("load", setup);
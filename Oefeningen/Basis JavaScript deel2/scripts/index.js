const setup = () => {
    let paras = document.getElementsByClassName('para');
    for (let i = 0; i < paras.length; ++i) {
        let para = paras[i];
    }
    para.addEventListener('click', printKlik);
}

const printKlik = () => {

    let para = event.target;

    para.classList.toggle("belangrijk");
}

window.addEventListener("load", setup);
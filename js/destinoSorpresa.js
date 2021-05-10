const linkDestinos = {
    BuenosAires: `img/buenosAires.jpg`,
    Cafayate: `img/cafayate.jpg`,
    Calafate: `img/calafate.jpg`,
    Cataratas: `img/cataratas.jpg`,
    MachuPicchu: `img/machuPicchu.jpg`,
    PuertoRico: `img/puertoRico.jpg`,
    RepublicaDominicana: `img/repDominicana.jpg`,
    RioDeJaneiro: `img/rio.jpg`
};

function destinoSorpresaModal(){
    var myModal = new bootstrap.Modal(document.getElementById("modal-destino"))
    myModal.show();

    const container = document.querySelector(`#destinoRandom`);
    
    const result = [
        {valor: `BuenosAires`},
        {valor: `Cafayate`},
        {valor: `Calafate`},
        {valor: `Cataratas`},
        {valor: `MachuPicchu`},
        {valor: `PuertoRico`},
        {valor: `RepublicaDominicana`},
        {valor: `RioDeJaneiro`}
    ];

    const display = result => {
        displayElement(result);
    }

    const displayElement = element => {
        const content = document.createElement(`div`);
        content.classList.add(`image-content`);
        
        const quantity = createQuantityTag(element);
        const img = createImage(element);

        content.appendChild(quantity);
        content.appendChild(img);

        container.appendChild(content);
    }

    const createQuantityTag = element => {
        const tag = document.createElement(`h5`);
        tag.innerHTML = element.valor;
        return tag;
    }

    const createImage = element => {
        const img = document.createElement(`img`);
        const url = linkDestinos[element.valor];
        img.src = url;
        return img;
    }
    display(result[getRandomInt(0,Object.keys(result).length)]);
    console.log(getRandomInt(1,10))
};
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}







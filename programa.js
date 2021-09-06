document.addEventListener('DOMContentLoaded', () => {
    const cartasArr = [
    {
        name: 'ada',
        img: 'imagenes/Ada.png',
        bio: "Ada Lovelace, una matemática, informática y escritora británica, creadora del primer algoritmo destinado a ser procesado por una máquina, por lo que se la considera como la primera programadora de ordenadores"
    },
    {
        name: 'ada',
        img: 'imagenes/Ada2.png',
        bio: "Ada Lovelace, una matemática, informática y escritora británica, creadora del primer algoritmo destinado a ser procesado por una máquina, por lo que se la considera como la primera programadora de ordenadores"
    },
    {
        name: 'marieCurie',
        img: 'imagenes/marieCurie.png',
        bio: "Marie Curie, científica polaca pionera en la radioactividad. Fue la primera persona que recibió dos premios Nobel en distintas especialidades"
    },
    {
        name: 'marieCurie',
        img: 'imagenes/marieCurie2.png',
        bio: "Marie Curie, científica polaca pionera en la radioactividad. Fue la primera persona que recibió dos premios Nobel en distintas especialidades"
    },
    {
        name: 'rosalind',
        img: 'imagenes/rosalind.png',
        bio: "Rosalind Franklin, química y cristalógrafa británica, autora de las imágenes que revelaron la forma de doble hélice de la molécula de ADN"
    },
     {
        name: 'rosalind',
        img: 'imagenes/rosalind2.png',
        bio: "Rosalind Franklin, química y cristalógrafa británica, autora de las imágenes que revelaron la forma de doble hélice de la molécula de ADN"
    },
     {
        name: 'katherine',
        img: 'imagenes/katherine.png',
        bio: "Katherine Johnson, física, científica espacial y matemática estadounidense que calculó la trayectoria para el Proyecto Mercury y el vuelo del Apolo 11 a la Luna"
    },
      {
        name: 'katherine',
        img: 'imagenes/katherine2.png',
        bio: "Katherine Johnson, física, científica espacial y matemática estadounidense que calculó la trayectoria para el Proyecto Mercury y el vuelo del Apolo 11 a la Luna"
    },
      {
        name: 'annie',
        img: 'imagenes/annie.png',
        bio: "Annie Jump Cannon, astrónoma estadounidense que catalogó estrellas variables y sus espectros. Estableció el sistema actual de clasificación espectral"
    },
    {
        name: 'annie',
        img: 'imagenes/annie2.png',
        bio: "Annie Jump Cannon, astrónoma estadounidense que catalogó estrellas variables y sus espectros. Estableció el sistema actual de clasificación espectral"
    },
    {
        name: 'lise',
        img: 'imagenes/lise.png',
        bio: "Lise Meitner, científica austriaca que formó parte del equipo que descubrió la fisión nuclear. Proporcionó la primera explicación de la fisión nuclear del uranio en términos de física teórica."
    },
     {
        name: 'lise',
        img: 'imagenes/lise2.png',
        bio: "Lise Meitner, científica austriaca que formó parte del equipo que descubrió la fisión nuclear. Proporcionó la primera explicación de la fisión nuclear del uranio en términos de física teórica."
    },
    ];
cartasArr.sort(() => 0.5 - Math.random());
const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result');
var cartasElegidas = [];
var cartasElegidasId = [];
var cartasGanadas = [];

function crearTablero(){
    for(let i=0; i<cartasArr.length; i++){
        var carta = document.createElement('img');
        carta.setAttribute('src', 'imagenes/Dorso.png');
        carta.setAttribute('data-id', i);
        carta.addEventListener('click', voltear);
        grid.appendChild(carta);
    }
}

function chequearIgualdad (){
    var cartas = document.querySelectorAll('img');
    const idOpcionUno = cartasElegidasId[0];
    const idOpcionDos = cartasElegidasId[1];
    
    if(cartasElegidas[0] === cartasElegidas[1]){
        alert('¡Bien! Encontraste a '+ cartasArr[idOpcionUno].bio);
        cartas[idOpcionUno].setAttribute('src', 'imagenes/Blanco.png');
        cartas[idOpcionDos].setAttribute('src', 'imagenes/Blanco.png');
        cartas[idOpcionUno].removeEventListener('click', voltear);
        cartas[idOpcionDos].removeEventListener('click', voltear);
        cartasGanadas.push(cartasElegidas );
    }else{
        cartas[idOpcionUno ].setAttribute('src', 'imagenes/Dorso.png');
        cartas[idOpcionDos ].setAttribute('src', 'imagenes/Dorso.png');
    }
    cartasElegidas = [];
    cartasElegidasId = [];
    resultDisplay.textContent = cartasGanadas.length;
    if (cartasGanadas.length === cartasArr.length/2){
        resultDisplay.textContent = ' ¡Felicidades! Encontraste todas las científicas';
    }
}

function voltear(){
    var IdCarta = this.getAttribute('data-id');
    cartasElegidas.push(cartasArr[IdCarta].name);
    cartasElegidasId.push(IdCarta);
    this.setAttribute ('src', cartasArr[IdCarta].img);
    if (cartasElegidas.length === 2) {
        setTimeout(chequearIgualdad,500);
    }
}


 crearTablero()
})
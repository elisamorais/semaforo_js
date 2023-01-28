const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;
let intervalID = null;
const trafficLight = ( event ) => {
    stopAutomatic();
    turnOn[event.target.id]();    
}

const nextIndex = () =>  colorIndex = colorIndex < 2 ? ++colorIndex : 0;       

const changeColor = () => {
    const colors = ['red', 'yellow', 'green']
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
}

const stopAutomatic = () => {
    clearInterval(intervalID)
}

const turnOn = {
    'red': () => img.src = './imagens/vermelho.png',
    'yellow': () => img.src = './imagens/amarelo.png',
    'green': () => img.src = './imagens/verde.png',
    'red': () => img.src = './imagens/vermelho.png',
    'automatic': () => intervalID = setInterval(changeColor, 1000)
}

buttons.addEventListener('click', trafficLight);

/*
uso de ternários,
função dentro de objetos,
chamada de função de forma dinamica,
captura de evento pelo pai do objeto (e não no objeto em si),


*/
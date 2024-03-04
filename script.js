let ligar = document.getElementById('turnOn');
let desligar = document.getElementById('turnOff');
let lampada = document.getElementById('lamp');
const body = document.querySelector('body')

function isLampBroken () {
    return lamp.src.indexOf ('quebrada') > -1
}

function lampOn() {
    if (!isLampBroken ()){
    lampada.src = './img/ligada.jpg'
    }
}

function lampOff() {
    if (!isLampBroken ()) {
    lampada.src = './img/desligada.jpg'
    }  

}

function lampBroken() {
    lamp.src = './img/quebrada.jpg'
}

ligar.addEventListener('click', lampOn);
desligar.addEventListener('click', lampOff);
lampada.addEventListener('mouseover', lampOn);
lampada.addEventListener('mouseleave', lampOff);
lampada.addEventListener('dblclick', lampBroken);
const arrowForward = document.getElementById('arrow-forward');
const arrowBack = document.getElementById('arrow-back');
const conterBar = document.getElementById('counter-bar');
const cars = document.querySelectorAll('.list .item');
const bars = document.querySelectorAll('.bar');
const indicator = document.querySelector('.indicators');
let number = document.querySelector('.list')
let actualCar = 0;
let actualBar = 0;


arrowForward.addEventListener('click', function () {
    number.style.setProperty('--number', 1);
    hidePreviousCar();//esconde o carro anterior
    hidePreviousBar();//esconde a barra anterior

    //loop dos carros
    if (actualCar === cars.length - 1) {
        actualCar = 0;
    } else {
        actualCar++;
    }
    //loop das barras
    if(actualBar === bars.length - 1){
        actualBar = 0;
    } else {
        actualBar++;
    }
    indicator.querySelector('.number').innerHTML = '0' + (actualBar + 1);

    showNextCar();//exibe o carro seguinte
    showNextBar();//exibe a barra seguinte

});

arrowBack.addEventListener('click', function () {
    number.style.setProperty('--number', -1);
    hidePreviousCar();//esconde o carro anterior
    hidePreviousBar();//esconde a barra anterior
    
    //loop dos carros
    if (actualCar === 0) {
        actualCar = cars.length - 1;
    } else {
        actualCar--;
    }
    //loop das barras
    if (actualBar === 0) {
        actualBar = bars.length -1;
    } else {
        actualBar--;
    }
    indicator.querySelector('.number').innerHTML = '0' + (actualBar + 1);

    showNextCar();//exibe o carro seguinte
    showNextBar();//exibe a barra seguinte
})

function showNextBar() {
    bars[actualBar].classList.add('active');
}

function hidePreviousBar() {
    const selectedBar = document.querySelector('.active');
    selectedBar.classList.remove('active');
}

function showNextCar() {
    cars[actualCar].classList.add('active');
}

function hidePreviousCar() {
    const selectedCar = document.querySelector('.active');
    selectedCar.classList.remove('active');
}

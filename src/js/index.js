const arrowForward = document.getElementById('arrow-forward');
const arrowBack = document.getElementById('arrow-back');
const conterBar = document.getElementById('counter-bar')
const cars = document.querySelectorAll('.item');
const bars = document.querySelectorAll('.bar')
let actualCar = 0;
let actualBar = 0;

arrowForward.addEventListener('click', function () {
    hidePreviousCar();//esconde o carro anterior
    const selectedBar = document.querySelector('.active')
    selectedBar.classList.remove('active')

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

    showNextCar();//exibe o carro seguinte
    bars[actualBar].classList.add('active')
});

arrowBack.addEventListener('click', function () {
    hidePreviousCar();

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

    showNextCar();
})

function showNextCar() {
    cars[actualCar].classList.add('active');
}

function hidePreviousCar() {
    const selectedCar = document.querySelector('.active');
    selectedCar.classList.remove('active');
}

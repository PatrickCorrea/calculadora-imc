const form = document.querySelector('#form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const weigth = document.querySelector('#weight').value;
    const height = document.querySelector('#height').value;

    const imc = (weigth / (height * height)).toFixed(2);

    const value = document.querySelector('#value');
    let description = '';

    value.classList.add('attention');

    document.querySelector('#infos').classList.remove('hidden');

    if (imc < 18.5) {
        description = 'Cuidado! você está abaixo do peso!';
    } else if (imc >= 18.5 && imc <= 25) {
        description = 'Você está no peso ideal!';
        value.classList.remove('attention');
        value.classList.add('normal');
    } else if (imc > 25 && imc <= 30) {
        description = 'Cuidado! Você está com sobrepeso!';
    } else if (imc > 30 && imc <= 35) {
        description = 'Cuidado! Você está com obesidade moderada!';
    } else if (imc > 35 && imc <= 40) {
        description = 'Cuidado! Você está com obesidade sereva!';
    } else {
        description = 'Cuidado! Você está com obesidade morbida!'
    }

    value.textContent = imc;
    document.querySelector('#description').textContent = description;
});
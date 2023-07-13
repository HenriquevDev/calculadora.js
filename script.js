var calculo = '';
var valor1 = 0;

function valor(valores) {
    resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML += valores;

}

function operador(operadores) {
    calculo = operadores;
    valor1 = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = "";
}

function calcular() {
    valor2 = document.getElementById('resultado').innerHTML
    if (calculo == '+') {
        total = parseInt(valor1) + parseInt(valor2);
    } else if (calculo == '-') {
        total = parseInt(valor1) - parseInt(valor2);
    } else if (calculo == '/') {
        total = parseInt(valor1) / parseInt(valor2);
    } else {
        total = parseInt(valor1) * parseInt(valor2);
    }

    document.getElementById('resultado').innerHTML = total;
}

function limpar() {
    calculo = '';
    valor1 = '';
    document.getElementById('resultado').innerHTML = '';
}
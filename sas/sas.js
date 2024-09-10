function verificarAnoBissexto() {
    var ano = parseInt(document.getElementById('ano').value);
    
    if (isNaN(ano)) {
        document.getElementById('resultado').innerText = 'Por favor, insira um ano válido.';
        return;
    }

    var bissexto;
    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        bissexto = true;
    } else {
        bissexto = false;
    }
    if (bissexto) {
        document.getElementById('resultado').innerText = `${ano} é um ano bissexto.`;
    } else {
        document.getElementById('resultado').innerText = `${ano} não é um ano bissexto.`;
    }
}
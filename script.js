function criptografar() {
    var texto = document.getElementById("texto").value;
    if (texto.trim() === "") {
        alert("Por favor, insira um texto antes de criptografar.");
        return;
    }
    var resultado = texto.replace(/e/g, 'enter')
                            .replace(/i/g, 'imes')
                            .replace(/a/g, 'ai')
                            .replace(/o/g, 'ober')
                            .replace(/u/g, 'ufat');
    exibirResultado(resultado);
    document.getElementById("texto").value = "";
}

function descriptografar() {
    var texto = document.getElementById("texto").value;
    console.log(texto)
    if (texto.trim() === "") {
        alert("Por favor, insira um texto antes descriptografar.");
        return;
    }
    var resultado = texto.replace(/enter/g,'e')
                    .replace(/imes/g,'i')
                    .replace(/ai/g,'a')
                    .replace(/ober/g,'o')
                    .replace(/ufat/g,'u');
    exibirResultado(resultado);
    document.getElementById("texto").value = "";
}

function exibirResultado(texto) {
    var resultadoContainer = document.getElementById("resultado-container");
    resultadoContainer.innerHTML = '<div class="div-message"><div class="message"><p>' + texto + '</p><button class="button-copy" onclick="copiarTexto(this)">Copiar</button></div></div>';
}
document.querySelector('.button-blue').addEventListener('click', criptografar);
document.querySelector('.button-gray').addEventListener('click', descriptografar);

function copiarTexto(button) {
    var texto = button.parentNode.getElementsByTagName("p")[0].textContent;
    navigator.clipboard.writeText(texto).then(function() {
        var resultadoContainer = document.getElementById("resultado-container");
        resultadoContainer.innerHTML = '<div class="div-message"><div class="message"><h1>Nenhuma mensagem encontrada</h1><p>Digite um texto que você deseja criptografar ou descriptografar</p></div></div>';
        alert("Texto copiado para a área de transferência!");
    }, function() {
        alert("Erro ao copiar o texto.");
    });
}





let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

function verificarNumero() {
    let tentativa = document.getElementById("tentativa").value;
    let feedback = document.getElementById("feedback");
    let tentativasElem = document.getElementById("tentativas");

    if (tentativa < 1 || tentativa > 100 || isNaN(tentativa)) {
        feedback.textContent = "❌ Digita um número entre 1 e 100!";
        return;
    }

    tentativas++;
    
    if (tentativa < numeroSecreto) {
        feedback.textContent = "📉 Muito baixo! Tenta de novo.";
    } else if (tentativa > numeroSecreto) {
        feedback.textContent = "📈 Muito alto! Tenta de novo.";
    } else {
        feedback.textContent = `🎉 Parabéns! Acertaste em ${tentativas} tentativas!`;
    }

    tentativasElem.textContent = `Tentativas: ${tentativas}`;
}

function reiniciarJogo() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    tentativas = 0;
    document.getElementById("tentativa").value = "";
    document.getElementById("feedback").textContent = "";
    document.getElementById("tentativas").textContent = "";
}

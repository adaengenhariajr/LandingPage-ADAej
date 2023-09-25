const textElement = document.getElementById('changingText');
const texts = ["Acredite em si, assim obterá sucesso.","Oportunidades não surgem, você as cria", "A persistência supera a resistência.","                                   "];
let index = 0;
let charIndex = 0;

function typeText() {
    const currentText = texts[index];
    const currentChar = currentText.charAt(charIndex);

    textElement.textContent += currentChar;
    charIndex++;

    if (charIndex < currentText.length) {
        setTimeout(typeText, 75); // Velocidade de digitação
    } else {
        charIndex = 0;
        setTimeout(eraseText, 1500); // Tempo de pausa antes de apagar o texto
    }
}

function eraseText() {
    const currentText = textElement.textContent;
    if (currentText.length > 0) {
        textElement.textContent = currentText.slice(0, -1);
        setTimeout(eraseText, 100); // Velocidade de apagar o texto
    } else {
        textElement.innerHTML = ''; // Limpa o conteúdo
        index = (index + 1) % texts.length;
        setTimeout(typeText, 1500); // Tempo de pausa antes de digitar o próximo texto
    }
}

typeText(); // Inicia a digitação

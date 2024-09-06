const arrayText = [
    "Fullstack ;)"
];

const writeTime = 150; // Tempo para escrever e apagar (em milissegundos)
const changeTextTime = 100; // Tempo para mudar para a próxima frase (em milissegundos)

let indexSentence = 0;
let indexChar = 0;

const element = document.querySelector("#text");

function writeText() {
    if (indexChar <= arrayText[indexSentence].length) {
        element.style.visibility = 'visible';
        element.textContent = arrayText[indexSentence].substring(0, indexChar);
        indexChar++;
        setTimeout(writeText, writeTime);
    } else {
        setTimeout(removeText, changeTextTime);
    }
}

function removeText() {
    if (indexChar >= 0) {
        element.textContent = arrayText[indexSentence].substring(0, indexChar);
        indexChar--;
        setTimeout(removeText, writeTime);
    } else {
        element.style.visibility = 'hidden';
        indexSentence++;
        if (indexSentence >= arrayText.length) {
            indexSentence = 0;
        }
        setTimeout(writeText, changeTextTime);
    }
}

writeText();

let cards = [
    { question: '¿Qué es el Email Marketing?', answer: 'Es el uso del correo electrónico para promocionar productos o servicios.' },
    { question: '¿Qué significa CTR?', answer: 'Click Through Rate, es el porcentaje de destinatarios que han hecho clic en el contenido de tu email.' },
    { question: '¿Qué es la Tasa de Apertura?', answer: 'Es el porcentaje de destinatarios que han abierto el email.' },
    { question: '¿Qué es la Segmentación de Listas?', answer: 'Es crear listas de correo segmentadas para dirigirse a diferentes grupos demográficos.' },
    { question: 'Nombra una plataforma popular para el envío de emails.', answer: 'MailChimp o Constant Contact.' },
    // ... añadir más tarjetas
];

let currentCardIndex = 0;
let showingAnswer = false;

function showAnswer() {
    let textElement = document.getElementById('text');
    if (showingAnswer) {
        textElement.textContent = cards[currentCardIndex].question;
        showingAnswer = false;
    } else {
        textElement.textContent = cards[currentCardIndex].answer;
        showingAnswer = true;
    }
}

function nextCard() {
    currentCardIndex = (currentCardIndex + 1) % cards.length;
    showingAnswer = false;
    updateCard();
}

function prevCard() {
    currentCardIndex = (currentCardIndex - 1 + cards.length) % cards.length;
    showingAnswer = false;
    updateCard();
}

function updateCard() {
    let textElement = document.getElementById('text');
    textElement.textContent = cards[currentCardIndex].question;
}

// Inicializa la primera tarjeta
updateCard();


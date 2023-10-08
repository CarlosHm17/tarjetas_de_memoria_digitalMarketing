let cards = [
    { question: '¿Qué es la Publicidad en Redes Sociales?', answer: 'Es la promoción pagada de productos o servicios en plataformas de redes sociales.' },
    { question: '¿Qué significa CPM?', answer: 'Costo Por Mil Impresiones, es el costo de 1,000 impresiones de un anuncio.' },
    { question: '¿Qué es el CPC?', answer: 'Costo Por Clic, es el costo por cada clic en un anuncio.' },
    { question: '¿Qué es la Segmentación de Audiencia?', answer: 'Es definir y alcanzar al público objetivo basándose en diferentes criterios.' },
    { question: 'Nombra una plataforma popular para la publicidad en redes sociales.', answer: 'Facebook Ads o Google Ads.' },
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

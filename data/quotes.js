// Obtener las frases desde el servidor FastAPI
fetch('/data/all_Phrases.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al obtener las frases');
        }
        return response.json();
    })
    .then(data => {
        const quotes = data.quotes;
        const quoteContainer = document.getElementById('quote_dom');
        const authorContainer = document.getElementById('author_dom');

        // Selecciona una frase aleatoria
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        quoteContainer.textContent = `"${randomQuote.quote}"`;
        authorContainer.textContent = `- ${randomQuote.author}`;
    })
    .catch(error => {
        console.error('Error al obtener las frases:', error);
    });

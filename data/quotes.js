// Obtener las frases desde el servidor FastAPI
fetch('data/all_Phrases.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al obtener las frases');
        }
        return response.json(); // Convertimos la respuesta a JSON
    })
    .then(data => {
        // Manipular el DOM para mostrar las frases
        const quotesContainer = document.getElementById('containerQuotes');
        quotesContainer.innerHTML = ''; // Limpiar el contenedor de frases

        data.forEach(quote => {
            const quoteElement = document.createElement('div');
            quoteElement.className = 'quote';

            const quoteText = document.createElement('p');
            quoteText.textContent = `"${quote.quote}"`;

            const quoteAuthor = document.createElement('p');
            quoteAuthor.textContent = `- ${quote.author}`;

            quoteElement.appendChild(quoteText);
            quoteElement.appendChild(quoteAuthor);
            quotesContainer.appendChild(quoteElement);
        });
    })
    .catch(error => {
        console.error('Error al obtener las frases:', error);
    });
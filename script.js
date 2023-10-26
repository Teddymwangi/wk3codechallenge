document.addEventListener('DOMContentLoaded', () => {
    const filmsList = document.getElementById('films');
    const poster = document.getElementById('poster');
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const runtime = document.getElementById('runtime');
    const showtime = document.getElementById('showtime');
    const availableTickets = document.getElementById('available-tickets');
    const buyButton = document.getElementById('buy-btn');

    // Fetch movies data from the server
    fetch('https://my-json-server.typicode.com/Teddymwangi/wk3codechallenge/films')
        .then(response => response.json())
        .then(data => {
            data.forEach(movie => {
                const filmItem = document.createElement('li');
                filmItem.classList.add('film-item');
                filmItem.textContent = movie.title;
                filmItem.addEventListener('click', () => showMovieDetails(movie));
                filmsList.appendChild(filmItem);
            });
        });

    function showMovieDetails(movie) {
        poster.src = movie.poster;
        title.textContent = movie.title;
        description.textContent = movie.description;
        runtime.textContent = movie.runtime;
        showtime.textContent = movie.showtime;
        const remainingTickets = movie.capacity - movie.tickets_sold;
        availableTickets.textContent = remainingTickets;

        // Check if the movie is sold out
        if (remainingTickets <= 0) {
            buyButton.textContent = 'Sold Out';
            buyButton.disabled = true;
            filmsList.querySelector(`li.film-item:nth-child(${parseInt(movie.id)})`).classList.add('sold-out');
        } else {
            buyButton.textContent = 'Buy Ticket';
            buyButton.disabled = false;
            filmsList.querySelector(`li.film-item:nth-child(${parseInt(movie.id)})`).classList.remove('sold-out');
        }

        // Event listener for buying a ticket
        buyButton.addEventListener('click', () => {
            if (remainingTickets > 0) {
                availableTickets.textContent = remainingTickets - 1;
            }
        });
    }
});
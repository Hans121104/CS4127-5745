document.addEventListener('DOMContentLoaded', () => {
    const cityCards = document.querySelectorAll('.city-card');

    cityCards.forEach(card => {
        card.addEventListener('click', () => {
            const cityName = card.querySelector('span').textContent;
            alert(`Welcome to ${cityName}!`);
        });

    });
});

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('header ul li a');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            console.log(`Navegando para: ${link.getAttribute('href')}`);
        });
    });
});


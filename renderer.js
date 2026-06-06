document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('header ul li a');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            console.log(`Navegando para: ${link.getAttribute('href')}`);
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const trilho = document.getElementById('carrossel-trilho');
    const btnAnt = document.getElementById('btn-ant');
    const btnProx = document.getElementById('btn-prox');

    // Validação para não quebrar outras telas (MPA)
    if (!trilho || !btnAnt || !btnProx) return;

    // DEFINIÇÃO DO PASSO: Largura do card (200px) + Gap do CSS (15px) = 215px
    const obterTamanhoDoCard = () => 215;

    // Função para avançar 1 card (Seta Direita)
    btnProx.addEventListener('click', () => {
        const passo = obterTamanhoDoCard();
        const limiteMaximo = trilho.scrollWidth - trilho.clientWidth;

        // Se o próximo passo for passar do limite do carrossel, volta pro início
        if (trilho.scrollLeft + passo >= limiteMaximo - 5) {
            trilho.scrollLeft = 0; 
        } else {
            trilho.scrollLeft += passo; // Avança exatamente a largura de 1 card
        }
    });

    // Função para voltar 1 card (Seta Esquerda)
    btnAnt.addEventListener('click', () => {
        const passo = obterTamanhoDoCard();
        const limiteMaximo = trilho.scrollWidth - trilho.clientWidth;

        // Se estiver colado no início, vai lá para o final
        if (trilho.scrollLeft <= 5) {
            trilho.scrollLeft = limiteMaximo; 
        } else {
            trilho.scrollLeft -= passo; // Volta exatamente a largura de 1 card
        }
    });
});
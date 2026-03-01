document.addEventListener('DOMContentLoaded', () => {
    const carrossel = document.getElementById('carrossel');
    const cards = document.querySelectorAll('.card');
    
    // Divide cards originais e duplicados
    const totalCards = cards.length;
    const cardsOriginais = totalCards / 2;
    
    let currentIndex = 0;
    const cardWidth = cards[0].offsetWidth + 20; // 450px + 20px gap
    
    function moverCarrossel() {
        currentIndex++;
        
        // Aplica a transformação
        carrossel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        carrossel.style.transition = 'transform 0.5s ease';
        
        // Quando chegar nos cards duplicados, volta pro início sem transição
        if (currentIndex >= cardsOriginais) {
            setTimeout(() => {
                // Remove a transição para o "reset" ser invisível
                carrossel.style.transition = 'none';
                currentIndex = 0;
                carrossel.style.transform = 'translateX(0)';
                
                // Força o navegador a renderizar
                carrossel.offsetHeight;
                
                // Volta a transição para o próximo movimento
                setTimeout(() => {
                    carrossel.style.transition = 'transform 0.5s ease';
                }, 50);
            }, 500); // Tempo igual à transição
        }
    }
    
    // Inicia o carrossel
    let intervalo = setInterval(moverCarrossel, 2000);
    
    // Pausa no hover
    carrossel.addEventListener('mouseenter', () => {
        clearInterval(intervalo);
    });
    
    carrossel.addEventListener('mouseleave', () => {
        intervalo = setInterval(moverCarrossel, 2000);
    });
});
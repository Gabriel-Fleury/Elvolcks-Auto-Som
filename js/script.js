// Efeito Parallax
window.addEventListener('scroll', function() {
    const imagem = document.getElementById('parallax-img');
    if (imagem) { // Verifica se a imagem existe
        let scrollPosition = window.pageYOffset;
        imagem.style.transform = 'translateY(' + scrollPosition * 0.9 + 'px) scale(1.02)';
    }
});

// Carrossel Infinito
document.addEventListener('DOMContentLoaded', () => {
    const carrossel = document.getElementById('carrossel');
    if (!carrossel) return; // Se não existir carrossel, não executa
    
    const cards = document.querySelectorAll('.card');
    const totalCards = cards.length;
    const cardsOriginais = totalCards / 2;
    
    let currentIndex = 0;
    const cardWidth = cards[0]?.offsetWidth + 20 || 470; // 450px + 20px gap
    
    function moverCarrossel() {
        currentIndex++;
        carrossel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        carrossel.style.transition = 'transform 0.5s ease';
        
        if (currentIndex >= cardsOriginais) {
            setTimeout(() => {
                carrossel.style.transition = 'none';
                currentIndex = 0;
                carrossel.style.transform = 'translateX(0)';
                
                carrossel.offsetHeight; // Força reflow
                
                setTimeout(() => {
                    carrossel.style.transition = 'transform 0.5s ease';
                }, 50);
            }, 500);
        }
    }
    
    let intervalo = setInterval(moverCarrossel, 2000);
    
    carrossel.addEventListener('mouseenter', () => {
        clearInterval(intervalo);
    });
    
    carrossel.addEventListener('mouseleave', () => {
        intervalo = setInterval(moverCarrossel, 2000);
    });
});

// Aguarda o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    
    // Seleciona todos os elementos com a classe 'faq-pergunta'
    const perguntas = document.querySelectorAll('.faq-pergunta');
    
    // Para cada pergunta encontrada
    perguntas.forEach(function(pergunta) {
        
        // Adiciona um evento de clique
        pergunta.addEventListener('click', function() {
            
            // Pega a resposta que está logo após a pergunta
            const resposta = this.nextElementSibling;
            
            // Verifica se a resposta já está aberta
            const estaAberta = resposta.classList.contains('ativo');
            
            // Se você quiser fechar as outras quando abrir uma (opcional)
            // Descomente as linhas abaixo se quiser esse comportamento
            
            /*
            // Fecha todas as respostas
            document.querySelectorAll('.faq-resposta').forEach(function(r) {
                r.classList.remove('ativo');
            });
            
            // Remove a classe 'ativo' de todas as perguntas
            document.querySelectorAll('.faq-pergunta').forEach(function(p) {
                p.classList.remove('ativo');
            });
            */
            
            // Se não estiver aberta, abre (ou fecha se estiver aberta)
            if (!estaAberta) {
                resposta.classList.add('ativo');
                this.classList.add('ativo');
            } else {
                resposta.classList.remove('ativo');
                this.classList.remove('ativo');
            }
        });
    });
    
});
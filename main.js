document.addEventListener('DOMContentLoaded', () => {

    const categorySection = document.querySelector('.category-section');
    const categoryCards = document.querySelectorAll('.category-card');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                
                categoryCards.forEach((card, index) => {
             
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 200); 
                });
                observer.unobserve(entry.target); 
            }
        });
    },);

    categoryCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });
    
    if (categorySection) {
        observer.observe(categorySection);
    }
    
   
});
// 3D Card Interactive Tilt Effect (Supports both Images and Videos)
const cards = document.querySelectorAll('.art-card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const cardRect = card.getBoundingClientRect();
        const cardWidth = cardRect.width;
        const cardHeight = cardRect.height;
        
        // Card ke center se mouse ki doori nikalne ke liye
        const mouseX = e.clientX - cardRect.left - cardWidth / 2;
        const mouseY = e.clientY - cardRect.top - cardHeight / 2;
        
        // Card ko maximum 15 degree tak jhukane (tilt) ke liye calculation
        const angleX = -(mouseY / (cardHeight / 2)) * 15;
        const angleY = (mouseX / (cardWidth / 2)) * 15;
        
        // 3D Rotation apply karna
        card.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    });
    
    // Jab mouse card se baahar jaye toh card wapas apni jagah seedha ho jaye
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateX(0deg) rotateY(0deg)';
        card.style.transition = 'transform 0.5s ease';
    });

    // Mouse andar aate hi smooth transition band karein taaki real-time tilt ho
    card.addEventListener('mouseenter', () => {
        card.style.transition = 'none';
    });
});

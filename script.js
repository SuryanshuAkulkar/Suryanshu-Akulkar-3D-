// 1. Custom Glow Cursor Logic
const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Cursor Hover Effect on Interactive Items
document.querySelectorAll('.art-card, .cta-btn, .social-links a').forEach(item => {
    item.addEventListener('mouseenter', () => {
        cursor.style.width = '40px';
        cursor.style.height = '40px';
        cursor.style.backgroundColor = 'rgba(0, 229, 255, 0.1)';
    });
    item.addEventListener('mouseleave', () => {
        cursor.style.width = '20px';
        cursor.style.height = '20px';
        cursor.style.backgroundColor = 'transparent';
    });
});

// 2. 3D Tilt Card Motion
const cards = document.querySelectorAll('.art-card');
cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - (rect.width / 2);
        const y = e.clientY - rect.top - (rect.height / 2);
        
        const angleX = -(y / (rect.height / 2)) * 20; // 20 Degree angle
        const angleY = (x / (rect.width / 2)) * 20;
        
        card.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateX(0deg) rotateY(0deg)';
        card.style.transition = 'transform 0.6s ease';
    });
    card.addEventListener('mouseenter', () => {
        card.style.transition = 'none';
    });
});

// 3. Scroll Reveal Motion (Smooth Entrance)
const revealCards = document.querySelectorAll('.scroll-reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.15 }); // 15% card dikhte hi animation start hoga

revealCards.forEach(card => observer.observe(card));

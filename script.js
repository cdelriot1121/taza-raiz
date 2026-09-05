document.addEventListener('DOMContentLoaded', () => {
    // 1. Lógica del Modal
    const modal = document.getElementById('modal');
    const triggers = document.querySelectorAll('.trigger-modal');
    const closeBtn = document.getElementById('close-modal');
    const submitBtn = document.getElementById('submit-btn');
    const emailInput = document.getElementById('email-input');
    const successMsg = document.getElementById('success-msg');

    triggers.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.add('active');
            successMsg.style.display = 'none';
            emailInput.value = '';
            emailInput.style.display = 'block';
            submitBtn.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
    window.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
    });

    submitBtn.addEventListener('click', () => {
        if (emailInput.value.trim() !== '') {
            emailInput.style.display = 'none';
            submitBtn.style.display = 'none';
            successMsg.style.display = 'block';
        }
    });

    // 2. Animaciones de Scroll (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal');

    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Solo anima una vez
            }
        });
    };

    const revealOptions = {
        threshold: 0.15, // Ejecuta cuando el 15% del elemento es visible
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

    revealElements.forEach(el => revealObserver.observe(el));
});
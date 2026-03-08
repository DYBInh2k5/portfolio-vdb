// Real-time Clock
function updateClock() {
    const clockElement = document.getElementById('real-time-clock');
    if (!clockElement) return;
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    clockElement.textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock();

// Typewriter Effect
const typewriterEffect = (element) => {
    const text = element.getAttribute('data-text') || element.innerText;
    element.innerText = '';
    element.setAttribute('data-animated', 'true');
    element.style.visibility = 'visible';

    let i = 0;
    const speed = 50;

    function type() {
        if (i < text.length) {
            element.innerText += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
};

// Reveal on Scroll Initialization
const initRevealOnScroll = () => {
    const options = {
        threshold: 0.1,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');

                // Trigger nested typewriter elements
                entry.target.querySelectorAll('.typewriter').forEach(el => {
                    if (!el.hasAttribute('data-animated')) {
                        typewriterEffect(el);
                    }
                });
            }
        });
    }, options);

    document.querySelectorAll('section, .hover-card').forEach(el => {
        observer.observe(el);
    });
};

// Initialize All
document.addEventListener('DOMContentLoaded', () => {
    initRevealOnScroll();

    // Smooth scroll for nav links handled by HTML scroll-behavior: smooth
    // No extra JS needed for nav scroll background as transition is handled by Tailwind/CSS
});

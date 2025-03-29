const messages = [
    "Grace you're the most beautiful star in my sky! ✨💖",
    "Grace your smile lights up my universe! 😊🌟",
    "Grace every moment with you is magical! ✨❤️",
    "Grace you're the reason my nights are bright! 🌙💖",
    "Grace like the stars, you shine in my heart! 🌟💕"
];

function createStars() {
    const starContainer = document.querySelector('.stars');
    for (let i = 0; i < 50; i++) {
        let star = document.createElement('div');
        star.classList.add('star');
        star.style.top = Math.random() * 100 + 'vh';
        star.style.left = Math.random() * 100 + 'vw';
        star.addEventListener('click', showMessage);
        starContainer.appendChild(star);
    }
}

function createShootingStar() {
    const starContainer = document.querySelector('.stars');
    let shootingStar = document.createElement('div');
    shootingStar.classList.add('shooting-star');
    shootingStar.style.top = Math.random() * 50 + 'vh';
    shootingStar.style.left = Math.random() * 100 + 'vw';
    starContainer.appendChild(shootingStar);
    setTimeout(() => shootingStar.remove(), 2000);
}

function showMessage() {
    const messageBox = document.getElementById('message');
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    messageBox.textContent = randomMessage;
    messageBox.style.display = 'block';
    setTimeout(() => {
        messageBox.style.display = 'none';
    }, 3000);
}

createStars();
setInterval(createShootingStar, 3000);
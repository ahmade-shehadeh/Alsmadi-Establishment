const headerText = document.getElementById('header-text');
const words = ['eating','Lifestyle', 'Sleeping'];
let currentWordIndex = 0;

function animateHeader() {
    const span = document.createElement('span');
    span.textContent = words[currentWordIndex];
    span.style.left = '0';
    span.id= 'span';
    span.style.opacity = '1';
    span.style.color = 'yellow';
    headerText.appendChild(span);

    setTimeout(() => {
        span.style.opacity = '0';
        setTimeout(() => {
            headerText.removeChild(span);
        }, 500);
    }, 1500);

    currentWordIndex = (currentWordIndex + 1) % words.length;
}

setInterval(animateHeader, 2500);
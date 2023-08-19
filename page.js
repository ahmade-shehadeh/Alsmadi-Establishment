const words = ['eating','Lifestyle', 'Sleeping'];
let currentWordIndex = 0;

function animateHeader() {
    const span = document.getElementById('span');
    
    span.style.left = '0';
    span.style.opacity = '1';
    span.style.color = '#FEC027';
    setTimeout(() => {
        span.innerHTML = words[currentWordIndex];
    }, 1500);

    currentWordIndex = (currentWordIndex + 1) % words.length;
}
var slide = 0
$(`.slider-card${slide}`).addClass('slider-card-hover')
setInterval(() => {
    $('.slider-card').removeClass('slider-card-hover')
    $(`.slider-card${slide}`).addClass('slider-card-hover')
    slide == 3 ?slide = 0 : slide +=1


    
}, 2000);

setInterval(animateHeader, 2500);


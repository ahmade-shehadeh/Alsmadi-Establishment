const words = ['eating ','Lifestyle ', 'Sleeping '];
let currentWordIndex = 0;
let selectCard = 1

function animateHeader() {
    const span = document.getElementById('span');
    
    span.style.left = '0';
    span.style.opacity = '1';
    span.style.color = '#FEC027';
    span.style.fontSize = '26px';
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
$('.click-menu').click(function(){
    activeSlide(this.id,0)
    console.log(this.id);
    selectCard =this.id
    selectCard == 5 ? $('.next-slide').addClass('disabled-btn'):$('.next-slide').removeClass('disabled-btn');
    selectCard ==1 ?$('.prev-slide').addClass('disabled-btn'): $('.prev-slide').removeClass('disabled-btn');

})
$('.next-slide').click(function(){
    if (selectCard !==5) {
        selectCard++ 
        activeSlide(selectCard,1)
        selectCard == 5 ? $('.next-slide').addClass('disabled-btn'):'';
    }
     (selectCard>1 )? $('.prev-slide').removeClass('disabled-btn'):'';
    
    
})
$('.prev-slide').click(function(){
    
    if (selectCard !==1) {
        selectCard -=1 
        activeSlide(selectCard,1)
        selectCard ==1 ?$('.prev-slide').addClass('disabled-btn'):'';
    }
     (selectCard<5) ?$('.next-slide').removeClass('disabled-btn'):''
    
    
})
function activeSlide(id,isMenu) {
    console.log(typeof(id),isMenu);
    if (id !== selectCard || isMenu) {
        selectCard = id
        $('.sliderSection5').addClass('slide-slected')
        $(`.slide-selected${id}`).removeClass('slide-slected')
    }
    
}
let slidere = 1;
setInterval(() => {

    $(`.section6Slider`).addClass('slide-slected');
    $(`.section6Slider${slidere}`).removeClass('slide-slected');
    slidere === 2 ? slidere = 1 : slidere++;
}, 5000);





setInterval(animateHeader, 2500);


let currentIndex = 0;
const items = document.querySelectorAll('.review-carousel');
console.log(items)

function showSlide(index){
    items.forEach((item, i) =>{
        item.classList.remove('active');
        if(index === i) {
            item.classList.add('active');
        }
    });
    document.querySelector('.carousel-inner').style.transform =
`translateX(-${index * 100}% )`;
};

function prevSlide(click){
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showSlide(currentIndex);
}
function nextSlide(click){
    currentIndex = (currentIndex + 1 ) % items.length;
    showSlide(currentIndex);
}

// setInterval(nextSlide, 4000);

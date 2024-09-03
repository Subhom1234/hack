// sliding image
{
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    
    function showSlide(index) {
        const slidesContainer = document.querySelector('.slides');
        slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    }
    
    setInterval(nextSlide, 5000);
}
// end of sliding image
let slider = () => {
    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    let showSlides = (n) => {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        slides.forEach(item => item.style.display = 'none');
        dots.forEach(item => item.classList.remove('dot-active'));
        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    };

    showSlides(1);

    let plusSlide = n => {
        showSlides(slideIndex += n);
    };

    let currentSlide = n => {
        showSlides(slideIndex = n);
    };

    prev.addEventListener('click', () => {
        plusSlide(-1);
    });

    next.addEventListener('click', () => {
        plusSlide(1);
    });

    dotsWrap.addEventListener('click', (event) => {
        const target = event.target;

        for (let i = 0; i < dots.length + 1; i++) {
            if (target.classList.contains('dot') && target == dots[i - 1]) {
                currentSlide(i);
            }
        }
    });
};

export default slider;
{
    const buttonTopEl = document.querySelector('#scroll__button-top');
    function showScrolling() {
        if (window.pageYOffset > 350) {
            buttonTopEl.style.display = 'block';
        } else {
            buttonTopEl.style.display = 'none';
        };
    };
    function backToTop() {
        if (window.pageYOffset > 0) {
            window.scrollTo(0, 0);
        }
    }
    window.addEventListener('scroll', showScrolling);
    buttonTopEl.addEventListener('click', backToTop);
}


{
    const THIRD_COLOR = '#4973ff'
    const headerMenuEl = document.querySelector('.header__menu'); 
        function showScrolling() {
            if (window.pageYOffset > 80) {
                headerMenuEl.style.position = 'fixed'
                headerMenuEl.style.top = '0'
                headerMenuEl.style.backgroundColor = THIRD_COLOR
            } else {
                headerMenuEl.style.position = 'absolute'
                headerMenuEl.style.top = '80px'
                headerMenuEl.style.backgroundColor = 'grey'
            }
        };
        window.addEventListener('scroll', showScrolling);
}

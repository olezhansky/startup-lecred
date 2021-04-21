//============== Highlighting menu items when scrolling =============================
{
    function trackScrollAndAddActiveClass() {
        let scrollDistance = window.scrollY
        const sectionElements = document.querySelectorAll('.section')
        sectionElements.forEach((element, index) => {
            const menuTopEl = document.querySelector('.menu__top')
            if (element.offsetTop - 100 - menuTopEl.clientHeight <= scrollDistance) {
                const allMenuLink = document.querySelectorAll('.menu__top .menu__top-link')
                allMenuLink.forEach((element) => {
                    if (element.classList.contains('menu__top-link--active')) {
                        element.classList.remove('menu__top-link--active', 'menu__top-link--selected') 
                    }
                })
                const menuTopLiEl = document.querySelectorAll('.menu__top li')[index]
                const menuTopLinkEl = menuTopLiEl.querySelector('.menu__top-link')
                menuTopLinkEl.classList.add('menu__top-link--active')
                
            }
        })
    }
    window.addEventListener('scroll', trackScrollAndAddActiveClass)
}
//--------------------------------------------------------------------------

//============== Selecting menu items on click =============================
{
    const menuTtopEl = document.querySelector('.menu__top')
        menuTtopEl.addEventListener('click', event => {
            singleSelect(event.target);
        })

        // prevents unnecessary highlighting of list items on click
        menuTtopEl.onmousedown = function() {
            return false;
        };

        function singleSelect(li) {
        let selected = menuTtopEl.querySelectorAll('.menu__top-link--selected');
        for (let element of selected) {
            element.classList.remove('menu__top-link--selected');
        }
        li.classList.add('menu__top-link--selected');
    }
}
//--------------------------------------------------------------------------

//===================== Mobile Menu ======================//
$(function() {
    $('.burger').click(function(){
        $('.burger span:nth-child(1)').toggleClass('first');
        $('.burger span:nth-child(2)').toggleClass('middle');
        $('.burger span:nth-child(3)').toggleClass('last');
    });

    $('.burger').on('click', function() {
        $('.menu ul').slideToggle();
    });

    $('.menu ul').on('click', function() {
        if (window.screen.width < 810) {
            $('.menu ul').slideToggle();
            $('.burger span:nth-child(1)').toggleClass('first');
            $('.burger span:nth-child(2)').toggleClass('middle');
            $('.burger span:nth-child(3)').toggleClass('last');
        }
       
    })
})
//==========================================================//




// {
//     const burgerMenuBtn = document.querySelector('.header__menu-burger');
//     const headerMenuList = document.querySelector('.menu__top');
//     const burgerMenuBtnSpan1 = document.querySelector('.header__menu-burger span:nth-child(1)');
//     const burgerMenuBtnSpan2 = document.querySelector('.header__menu-burger span:nth-child(2)');
//     const burgerMenuBtnSpan3 = document.querySelector('.header__menu-burger span:nth-child(3)');
//     const headerTop = document.querySelector('.header__top');
//     burgerMenuBtn.addEventListener('click', function() {
//         headerMenuList.classList.toggle('menu__top--active');
//         burgerMenuBtnSpan1.classList.toggle('first');
//         burgerMenuBtnSpan2.classList.toggle('middle');
//         burgerMenuBtnSpan3.classList.toggle('last');
//     })
//     headerMenuList.addEventListener('click', event => {
//         headerMenuList.classList.toggle('menu__top--active');
//         burgerMenuBtnSpan1.classList.toggle('first');
//         burgerMenuBtnSpan2.classList.toggle('middle');
//         burgerMenuBtnSpan3.classList.toggle('last');
//     })
// }
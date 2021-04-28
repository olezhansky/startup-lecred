// {
//     const THIRD_COLOR = '#4973ff'
//     const headerMenuEl = document.querySelector('.header__menu'); 
//         function showScrolling() {
//             if (window.pageYOffset > 80) {
//                 headerMenuEl.style.position = 'fixed'
//                 headerMenuEl.style.top = '0'
//                 headerMenuEl.style.backgroundColor = THIRD_COLOR
//             } else {
//                 headerMenuEl.style.position = 'absolute'
//                 if (window.screen.width < 785) {
//                     headerMenuEl.style.top = '174px' 
//                 } else {
//                     headerMenuEl.style.top = '80px'
//                 }
//                 headerMenuEl.style.backgroundColor = 'grey'
//             } 
           
            
//         };
//         window.addEventListener('scroll', showScrolling);
// }
{
    const THIRD_COLOR = '#4973ff'
    const headerMenuEl = document.querySelector('.header__menu'); 



        function showScrolling() {


            if (window.screen.width > 785) {
                if (window.pageYOffset > 80) {
                    headerMenuEl.style.position = 'fixed'
                    headerMenuEl.style.top = '0'
                    headerMenuEl.style.backgroundColor = THIRD_COLOR
                } else {
                    headerMenuEl.style.position = 'absolute'
                    headerMenuEl.style.top = '80px'
                    headerMenuEl.style.backgroundColor = 'grey'
                } 
            } else if (window.screen.width > 415) {
                if (window.pageYOffset > 174) {
                    headerMenuEl.style.position = 'fixed'
                    headerMenuEl.style.top = '0'
                    headerMenuEl.style.backgroundColor = THIRD_COLOR
                } else {
                    headerMenuEl.style.position = 'absolute'
                    headerMenuEl.style.top = '174px'
                    headerMenuEl.style.backgroundColor = 'grey'
                }   
            } else {
                if (window.pageYOffset > 200) {
                    headerMenuEl.style.position = 'fixed'
                    headerMenuEl.style.top = '0'
                    headerMenuEl.style.backgroundColor = THIRD_COLOR
                } else {
                    headerMenuEl.style.position = 'absolute'
                    headerMenuEl.style.top = '200px'
                    headerMenuEl.style.backgroundColor = 'grey'
                }   
            }
            
        };
        window.addEventListener('scroll', showScrolling);
}

function menuTabs() {

    const menuBlocks = document.querySelectorAll('.menu'),
          mouseLink = document.querySelector('.info__scroll-link');

    menuBlocks.forEach(menuBlock => {
        menuBlock.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target.classList.contains('menu__link')) {

                scrollTo(e.target);
            }
        })
    })

    mouseLink.addEventListener('click', (e) => {
        e.preventDefault();
        scrollTo(mouseLink);
    })



    function scrollTo(element) {
        const section = element.getAttribute('data-section');
        if (section == '.footer') {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth'
            });
        } else {


            const position = document.querySelector(`${section}`).getBoundingClientRect().top;
            window.scrollTo({
                top: position,
                behavior: 'smooth'

            });
        }
    }
}

export { menuTabs } 
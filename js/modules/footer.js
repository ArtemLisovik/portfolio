function footer() {

    const footerElements = document.querySelectorAll('.footer__wrapper-anim');

    footerElements.forEach(footerItem => {
        fixedFooterRevealAnim(footerItem);
    })


    function fixedFooterRevealAnim(element) {
        const preLastSection = document.querySelector('.contact-form'),
            footerElement = element.getBoundingClientRect().bottom,
            preLastSectionHover = preLastSection.getBoundingClientRect().bottom;

        window.addEventListener('scroll', (e) => {
            if (window.scrollY >= preLastSectionHover - footerElement) {
                element.classList.add('_active')
            }
        })
    }
}

export { footer } 
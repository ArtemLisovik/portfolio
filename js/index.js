import { portfolio } from './modules/portfolio'
import { footer } from './modules/footer'
import { menuTabs } from './modules/menuTabs'
import { script } from './modules/script' 
import { revealAnimation } from './modules/animation'
import { burgerMenu } from './modules/BurgerMenu'
import { scrollAnimationReveal } from './modules/ScrollAnimationReveal'

import '../css/null.css'
import '../css/main.css'
import '../css/header.css'
import '../css/section_main.css'
import '../css/section_portfolio.css'
import '../css/section_about.css'
import '../css/section_myskills.css'
import '../css/section_contacts.css'
import '../css/footer.css'
import '../css/animations.css'

window.addEventListener('DOMContentLoaded', () => {
    'use strict'

    const elements = document.querySelectorAll('.object__wrapper-anim');
    elements.forEach(item => scrollAnimationReveal(item, '_active'));

    portfolio()
    burgerMenu()
    menuTabs()
    script()
    footer()
    revealAnimation('social__link', 'displayNone', 0.9)


})
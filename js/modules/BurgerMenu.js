const burgerMenu = () => {

  const burgerBtn = document.querySelector('.header__menu-icon'),
        burgerMenu = document.querySelector('.header__nav'),
        burgerBtnElement = document.querySelectorAll('.menu-icon__element'),
        mainBody = document.querySelector('body'),
        menuItem = document.querySelectorAll('.menu__link');


  burgerBtn.addEventListener('click', (e) => {
    burgerMenu.classList.toggle('_active');
    burgerBtnElement.forEach(item => {
      item.classList.toggle('_active')
    });
    mainBody.classList.toggle('_lock')
  });

  menuItem.forEach(element => {
    element.addEventListener('click', (e) => {
      burgerMenu.classList.toggle('_active')
      burgerBtnElement.forEach(item => {
        item.classList.toggle('_active')
      });
      mainBody.classList.toggle('_lock')
      
    })
  });
}

export { burgerMenu }
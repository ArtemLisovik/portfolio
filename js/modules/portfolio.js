function portfolio() {

  const portfolioItems = document.querySelectorAll('.img__animation-wrapper');

  portfolioItems.forEach(item => {
    elementScrollAnimation(item, '_anim');
  })

  function elementScrollAnimation (element, cssClassModification) {
      document.addEventListener('scroll', (event) => {
        event.preventDefault();
        const distance = element.getBoundingClientRect();
        if (distance.top + (window.innerHeight / 8) < window.innerHeight && distance.bottom - (window.innerHeight / 8) > 0){
          element.classList.add(cssClassModification);
        }
      })
    }
  
}

export { portfolio }
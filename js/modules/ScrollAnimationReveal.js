function scrollAnimationReveal (element, cssClassModification) {
    document.addEventListener('scroll', (event) => {
      event.preventDefault();
      const distance = element.getBoundingClientRect();
      if (distance.top + (window.innerHeight / 8) < window.innerHeight && distance.bottom - 10 > 0){
        element.classList.add(cssClassModification);
      }
    })
  }

  export { scrollAnimationReveal };
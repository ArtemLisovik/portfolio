const revealAnimation = (elements, animation, time) => {

  const array = document.querySelectorAll(`.${elements}`);

  array.forEach(element => {
    element.style.cssText=`animation: ${animation} ${time}s ease`
    time+=0.3

  });
}

export { revealAnimation }
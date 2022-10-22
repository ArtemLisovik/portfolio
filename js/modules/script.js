import { scrollAnimationReveal } from './ScrollAnimationReveal'

function script() {


  let counters = document.querySelectorAll('.counter__level'),
    countersParrent = document.querySelectorAll('.counter__item');

  for (let i = 0; i < countersParrent.length; i++) {
    scrollAnimationReveal(countersParrent[i], `_reveal_counter`);
  }

  countersParrent.forEach(parrent => {
    const letir = setInterval(() => {
      if (parrent.classList.contains('_reveal_counter')) {
        counters.forEach(counter => {
            outNum(counter);
          clearInterval(letir);
        })
      }
    }, 10);
  })

  function outNum (element) {
  const time = 1500; //ms
  let start = 0,
      deadline = +element.id,
      incr = 1,
      interval = Math.ceil(time / deadline);
      const cycle = setInterval( () => {
        start = start + incr;
        element.innerHTML = start
        if (start >= deadline) {
          element.innerHTML = deadline;
          clearInterval(cycle);
        }
      }, interval)
  

  }


}

export { script }
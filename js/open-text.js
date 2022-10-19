document.addEventListener('DOMContentLoaded', ()=> {
  let container = document.querySelector('.about__text');
  let text = document.querySelector('.about__text').children;
  let button = document.querySelector('.about__button ');
  let hiddenElements = Array.from(text).filter(item => item.classList.contains('hidden'));
  let shownElements = Array.from(text).filter(item => !item.classList.contains('hidden'));
  let rowGap = 20;

  if (window.innerWidth <= 480) {
    rowGap = 15;
  }

  function getHeight(array, gap) {
    return array.reduce((accum, element) => accum + element.offsetHeight, 0) + (array.length - 1) * gap;
  }

  function setHeight(height) {
    container.style.height = `${height}px`;
  }

  setHeight(getHeight(shownElements, rowGap));

  button.addEventListener('click', (event) => {
    event.preventDefault();
    if (button.classList.contains('active')) {

      setHeight(getHeight(shownElements, rowGap));
      
      button.innerText = "Читать дальше";
      button.classList.remove('active');
      console.log(rowGap);
      
    } else {
      hiddenElements.forEach(item => item.classList.remove('hidden'));
      setHeight(getHeight(Array.from(text), rowGap));
      
      button.innerText = "Скрыть";
      button.classList.add('active');
      console.log(rowGap);
    }
  })
  
  window.addEventListener('resize', ()=> {
    if (window.innerWidth <= 480) {
      rowGap = 15;
    } else {
      rowGap = 20;
    }

    setHeight(getHeight(shownElements, rowGap));

    button.innerText = "Читать дальше";
    button.classList.remove('active');
  })
})
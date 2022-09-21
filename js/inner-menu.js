document.addEventListener('DOMContentLoaded', ()=> {
  let button = document.querySelector('#menu-btn');
  let buttonImages = document.querySelectorAll('.hamburger-menu__img');
  let menu = document.querySelector('.hidden-menu');

  button.addEventListener('click', (event)=> {
    event.preventDefault();

    if (button.classList.contains('active')) {
      menu.style.height = 0;

      for (let button of buttonImages) {
        button.classList.add('hidden');
      }
      button.firstElementChild.classList.remove('hidden');
      button.classList.remove('active');
    } else {
      let reqHeight = menu.firstElementChild.offsetHeight;
      menu.style.height = `${reqHeight + 25}px`;

      for (let button of buttonImages) {
        button.classList.add('hidden');
      }
      button.lastElementChild.classList.remove('hidden');
      button.classList.add('active');
    }
  })

  window.addEventListener('resize', ()=> {
    menu.style.height = 0;
    for (let button of buttonImages) {
      button.classList.add('hidden');
    }
    button.firstElementChild.classList.remove('hidden');
    button.classList.remove('active');
  })
})
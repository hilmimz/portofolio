const buttonScroll = document.querySelectorAll(".button-scroll");

buttonScroll.forEach((element) => {
  element.addEventListener('click', () => {
    const target = element.dataset.target;
    document.querySelector(`.${target}`).scrollIntoView({ behavior: 'smooth', block: 'start' });
  })
})
const menuBar = document.querySelector('span.nav-bar');

menuBar.addEventListener('click', () => {
  document.querySelector('.menu').classList.toggle('show');
  document.querySelector('.content').classList.toggle('show')
});
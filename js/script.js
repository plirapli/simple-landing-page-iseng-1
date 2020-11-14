var x = document.querySelector('span.nav-bar');
var menu = document.querySelector('.menu')

x.addEventListener('click', function() {
  if (menu.style.maxHeight == "0px") {
    console.log("tes123");
    menu.style.maxHeight = '100%';
  } else {
    console.log("ga jalan");
    menu.style.maxHeight = '0px';
  }
})
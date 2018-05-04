import 'flexboxgrid';
import './styles/styles.scss';

var menuOpen = document.querySelector(".menuBurger");

document.querySelector(".header-burger-menu-line").addEventListener("click", function() {
  menuOpen.classList.add("open");
});

document.querySelector(".menuBurger-cross").addEventListener("click", function() {
  menuOpen.classList.remove("open");
});

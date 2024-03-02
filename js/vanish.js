window.addEventListener("load", vanish);

function vanish() {
  let preLoader = document.querySelector(".preloader");
  preLoader.classList.add("disappear");
}
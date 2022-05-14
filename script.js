const openMenu = document.querySelector("#openMenu");
const mobileMenu = document.querySelector("#mobileMenu");

openMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");

  if(mobileMenu.classList.contains("show")){

      openMenu.src = "images/icon-close.svg";
  }else{
      openMenu.src = "images/icon-hamburger.svg"
  }
});

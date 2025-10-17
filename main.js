const navSvg = document.getElementById("nav-svg");
const navMenu = document.getElementById("mobile-nav");

let clicked = false;

const navLinks = navMenu.querySelectorAll("a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (clicked) {
      toggleMenu();
    }
  });
});


function toggleMenu() {
    clicked = !clicked;
    console.log("Menu clicked:", clicked);
    if(clicked){
        navMenu.classList.remove("inactive")
        navMenu.classList.add("active")
        navSvg.src="./img/svg/close.svg"
    }
    if(!clicked){
        navMenu.classList.remove("active")
        navMenu.classList.add("inactive")
        navSvg.src="./img/svg/hamburger.svg"
    }
}

// Attach the click listener
navSvg.addEventListener("click", toggleMenu);
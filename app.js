// Setup Date
const date = (document.getElementById("date").innerHTML =
  new Date().getFullYear());
//Setup MenuBar
const navToggle = document.getElementById("nav-toggle");
const navItems = document.getElementById("nav-items");
//  Show Nav
navToggle.addEventListener("click", () => {
  navItems.classList.toggle("show-items");
});

// Product Gallery
const productGallery = document.querySelectorAll("#product-images");
// Main Image Setup
for (let i = 0; i < productGallery.length; i++) {
  const numOfProductGallery = productGallery[i];
  numOfProductGallery.addEventListener("click", () => {
    productGallery[i].classList.toggle("main-img");
    for (let x = 0; x < productGallery.length; x++) {
      productGallery[x] !== numOfProductGallery
        ? productGallery[x].classList.remove("main-img")
        : productGallery[i].classList.add("main-img");
    }
  });
}

// Account Page
const logIn = document.getElementById("login");
const register = document.getElementById("register");
const indicator = document.getElementById("indicator");
const regForm = document.getElementById("reg-form");
const loginForm = document.getElementById("login-form");

logIn.addEventListener("click", () => {
  loginForm.style.transform = "translateX(0px)";
  regForm.style.transform = "translateX(400px)";
  indicator.style.transform = "translateX(-70px)";
});
register.addEventListener("click", () => {
  loginForm.style.transform = "translateX(-400px)";
  regForm.style.transform = "translateX(0px)";
  indicator.style.transform = "translateX(40px)";
});

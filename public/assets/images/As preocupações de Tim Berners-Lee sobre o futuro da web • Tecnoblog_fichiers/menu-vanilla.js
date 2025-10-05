// Menu Fixado
// window.addEventListener("scroll", function () {
//   var scrollValue = window.scrollY;
//   if (scrollValue >= 35) {
//     document.querySelector("#top header").classList.add("pinned");
//     document.querySelector("#ad-mobile-sticky-header #ad-mobile-sticky-container").classList.add("pinned");
//   } else if (scrollValue <= 35) {
//     document.querySelector("#top header").classList.remove("pinned");
//     document.querySelector("#ad-mobile-sticky-header #ad-mobile-sticky-container").classList.remove("pinned");
//   }
// });

var lupaDesktop = document.querySelector(".menu-direita .busca .lupa"),
  lupaMobile = document.querySelector("#mm .mobile-menu-button .lupa"),
  hamburguer = document.querySelector(".mobile-menu-button #toggle-menu-icon"),
  skipHeader = document.querySelector("#skip-header");

function tbMenuToggle() {
  document.querySelector("#mmenu").classList.toggle("opened");
  document.querySelector("#escuro").classList.toggle("opened");
  document.querySelector("html > body").classList.toggle("menu-opened");
  document.querySelector("#toggle-menu-icon").classList.toggle("open");
  if (this.classList[0] === "lupa") {
    document.querySelector("input#sm").focus();
  }
}

if (skipHeader != undefined) {
  skipHeader.addEventListener("click", function () {
    document.querySelector("#post").focus();
  });
}

lupaDesktop.addEventListener("click", function () {
  this.closest(".busca").classList.toggle("active");
  document.querySelector("#s").focus();
});

lupaMobile.addEventListener("click", tbMenuToggle);
hamburguer.addEventListener("click", tbMenuToggle);

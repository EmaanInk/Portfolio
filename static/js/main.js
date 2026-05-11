document.addEventListener("DOMContentLoaded", function () {
  setupNavbarSmoothScroll();
  setupScrollSpy();
  setupNavbarShadow();
});

function setupNavbarSmoothScroll() {
  const links = document.querySelectorAll(".nav-links a");

  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = link.getAttribute("href");
      const section = document.querySelector(targetId);

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

function setupScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const links = document.querySelectorAll(".nav-links a");

  function updateActiveLink() {
    let currentId = "";

    sections.forEach(function (section) {
      const top = section.offsetTop - 120;
      const height = section.offsetHeight;

      if (window.scrollY >= top && window.scrollY < top + height) {
        currentId = section.id;
      }
    });

    links.forEach(function (link) {
      const href = link.getAttribute("href");
      link.classList.toggle("active", href === "#" + currentId);
    });
  }

  updateActiveLink();
  window.addEventListener("scroll", updateActiveLink);
}

function setupNavbarShadow() {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;

  function updateNavbar() {
    navbar.classList.toggle("navbar-scrolled", window.scrollY > 40);
  }

  updateNavbar();
  window.addEventListener("scroll", updateNavbar);
}
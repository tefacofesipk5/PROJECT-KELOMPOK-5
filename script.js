// Smooth scroll untuk semua link anchor
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Tombol Back to Top
let backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backTop.style.display = "block";
  } else {
    backTop.style.display = "none";
  }
});

backTop.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// AOS Animation
AOS.init();
const fadeItems = document.querySelectorAll(".fade-in");

function fadeScroll() {
  fadeItems.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", fadeScroll);
window.addEventListener("load", fadeScroll);

document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll('.fade-img');
  images.forEach((img, i) => {
    setTimeout(() => {
      img.classList.add('visible');
    }, 400 * (i + 1));
  });
});

document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('.hero-animate').forEach((el, i) => {
    el.style.animationDelay = `${0.3 + i * 0.3}s`;
  });
});

window.addEventListener('scroll', function() {
  const navbar = document.getElementById('mainNavbar');
  if (window.scrollY > 60) {
    navbar.classList.add('shrink');
  } else {
    navbar.classList.remove('shrink');
  }
});


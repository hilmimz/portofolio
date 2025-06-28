const btn = document.getElementById("hamburger-btn");
const spans = btn.querySelectorAll("span");
const mobileMenu = document.getElementById("mobile-menu");

// Fungsi toggle animasi hamburger
function toggleHamburger(isActive) {
  spans[0].classList.toggle("rotate-45", isActive);
  spans[0].classList.toggle("-translate-y-[2.2px]", isActive);
  spans[0].classList.toggle("bg-white", isActive);

  spans[1].classList.toggle("scale-0", isActive);
  spans[1].classList.toggle("bg-white", isActive);

  spans[2].classList.toggle("-rotate-45", isActive);
  spans[2].classList.toggle("translate-y-[2.2px]", isActive);
  spans[2].classList.toggle("bg-white", isActive);
}

// Toggle menu saat tombol hamburger diklik
btn.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.contains("opacity-100");
  toggleHamburger(!isOpen);

  mobileMenu.classList.toggle("translate-y-0", !isOpen);
  mobileMenu.classList.toggle("-translate-y-full", isOpen);
  mobileMenu.classList.toggle("opacity-100", !isOpen);
  mobileMenu.classList.toggle("opacity-0", isOpen);
  mobileMenu.classList.toggle("pointer-events-none", isOpen);
});

// Scroll dan tutup menu saat item diklik
document.querySelectorAll(".button-scroll").forEach((element) => {
  element.addEventListener("click", () => {
    const target = element.dataset.target;
    document.querySelector(`.${target}`).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    mobileMenu.classList.remove("translate-y-0");
    mobileMenu.classList.add("-translate-y-full");
    mobileMenu.classList.remove("opacity-100");
    mobileMenu.classList.add("opacity-0");
    mobileMenu.classList.add("pointer-events-none");

    toggleHamburger(false);
  });
});

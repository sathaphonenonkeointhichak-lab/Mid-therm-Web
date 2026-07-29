// =========================================================
// MOBILE MENU
// Toggles the full-screen mobile nav overlay and animates
// the hamburger icon into an X.
// =========================================================
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.classList.toggle("is-open");
    mobileMenu.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    // Prevent background scroll while the overlay is open
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  // Close the menu whenever a link inside it is clicked
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("is-open");
      mobileMenu.classList.remove("is-open");
      document.body.style.overflow = "";
    });
  });
}

// =========================================================
// BLOG FILTER (blog.html only)
// Shows/hides blog cards based on the selected tag chip.
// =========================================================
const filterChips = document.querySelectorAll(".filter-chip");
const blogCards = document.querySelectorAll(".blog-card");

if (filterChips.length && blogCards.length) {
  filterChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      filterChips.forEach((c) => c.classList.remove("is-active"));
      chip.classList.add("is-active");

      const selectedTag = chip.dataset.tag;

      blogCards.forEach((card) => {
        const matches = selectedTag === "all" || card.dataset.tag === selectedTag;
        card.hidden = !matches;
      });
    });
  });
}

// =========================================================
// BOOKING FORM (booking.html only)
// Basic client-side handling: prevents real submission
// (no backend for this assignment) and shows a success note.
// =========================================================
const bookingForm = document.querySelector(".booking-form");
const formSuccess = document.querySelector(".form-success");

if (bookingForm && formSuccess) {
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formSuccess.classList.add("is-visible");
    formSuccess.textContent = `Thanks! We'll reach out to confirm your session soon.`;
    bookingForm.reset();
  });
}

// Selecting a package card scrolls to and pre-fills the form select
document.querySelectorAll("[data-choose-package]").forEach((button) => {
  button.addEventListener("click", () => {
    const packageName = button.dataset.choosePackage;
    const select = document.querySelector("#package-select");
    if (select) select.value = packageName;
    document.querySelector("#book-form-section")?.scrollIntoView({ behavior: "smooth" });
  });
});
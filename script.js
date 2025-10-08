// Scroll Highlight Effect for Navbar Links

// Grab all section elements and nav links
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

// Listen to scroll event
window.addEventListener("scroll", () => {
  let scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 120; // adjust for navbar height
    const sectionId = section.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      // Remove 'active' from all links
      navLinks.forEach((link) => link.classList.remove("active"));
      // Add 'active' to the one that matches current section
      document
        .querySelector('.nav-links a[href="#' + sectionId + '"]')
        .classList.add("active");
    }
  });
});

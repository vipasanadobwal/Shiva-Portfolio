// ================================
// LOADER
// ================================

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.visibility = "hidden";
    loader.style.transition = "0.8s ease";
  }, 1200);
});

// ================================
// CUSTOM CURSOR
// ================================

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  if (cursor) {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  }
});

// ================================
// TYPING EFFECT
// ================================

const typingText = document.getElementById("typing-text");

const professions = [
  "Frontend Developer",
  "Web Developer",
  "JavaScript Developer",
  "BCA Student",
  "Creative Coder"
];

let professionIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeWriter() {
  if (!typingText) return;

  const currentWord = professions[professionIndex];

  if (!deleting) {
    typingText.textContent =
      currentWord.substring(0, characterIndex + 1);

    characterIndex++;

    if (characterIndex === currentWord.length) {
      deleting = true;
      setTimeout(typeWriter, 1200);
      return;
    }
  } else {
    typingText.textContent =
      currentWord.substring(0, characterIndex - 1);

    characterIndex--;

    if (characterIndex === 0) {
      deleting = false;

      professionIndex++;

      if (professionIndex >= professions.length) {
        professionIndex = 0;
      }
    }
  }

  setTimeout(typeWriter, deleting ? 60 : 100);
}

typeWriter();

// ================================
// REVEAL ON SCROLL
// ================================

const revealElements = document.querySelectorAll(
  ".section, .education-card, .skill-card, .timeline-item, .project-card, .certificate-card"
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
});

function revealOnScroll() {
  const elements = document.querySelectorAll(".reveal");

  elements.forEach((element) => {
    const windowHeight = window.innerHeight;
    const revealTop =
      element.getBoundingClientRect().top;

    const revealPoint = 120;

    if (revealTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// ================================
// ACTIVE NAVIGATION LINK
// ================================

const navLinks =
  document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let currentSection = "";

  document.querySelectorAll("section").forEach((section) => {
    const sectionTop =
      section.offsetTop - 200;

    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active-link");

    if (
      link.getAttribute("href") ===
      "#" + currentSection
    ) {
      link.classList.add("active-link");
    }
  });
});

// ================================
// HERO IMAGE PARALLAX
// ================================

const heroImage =
  document.querySelector(".hero-image img");

document.addEventListener("mousemove", (e) => {
  if (!heroImage) return;

  const x =
    (window.innerWidth / 2 - e.clientX) / 40;

  const y =
    (window.innerHeight / 2 - e.clientY) / 40;

  heroImage.style.transform =
    `translate(${x}px, ${y}px)`;
});

// ================================
// PROJECT CARD 3D EFFECT
// ================================

const cards =
  document.querySelectorAll(".project-card");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect =
      card.getBoundingClientRect();

    const x =
      e.clientX - rect.left;

    const y =
      e.clientY - rect.top;

    const rotateX =
      ((y / rect.height) - 0.5) * -12;

    const rotateY =
      ((x / rect.width) - 0.5) * 12;

    card.style.transform =
      `perspective(1000px)
       rotateX(${rotateX}deg)
       rotateY(${rotateY}deg)
       translateY(-10px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0)";
  });
});

// ================================
// BUTTON HOVER ANIMATION
// ================================

const buttons =
  document.querySelectorAll(
    ".btn, .project-btn"
  );

buttons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.transform =
      "translateY(-4px)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform =
      "translateY(0)";
  });
});

// ================================
// NAVBAR BACKGROUND ON SCROLL
// ================================

const header =
  document.querySelector("header");

window.addEventListener("scroll", () => {
  if (!header) return;

  if (window.scrollY > 50) {
    header.style.background =
      "rgba(0,0,0,0.85)";

    header.style.backdropFilter =
      "blur(20px)";
  } else {
    header.style.background =
      "transparent";
  }
});

// ================================
// SMOOTH SECTION FADE
// ================================

const observer =
  new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

document
  .querySelectorAll(".reveal")
  .forEach((item) => {
    observer.observe(item);
  });

// ================================
// CONSOLE MESSAGE
// ================================

console.log(
  "Portfolio Developed By Shiva Tanwar 🚀"
);
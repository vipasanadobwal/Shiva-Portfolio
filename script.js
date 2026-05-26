// ================================
// LOADER
// ================================

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
        loader.style.transition = "0.8s ease";
    }, 1000);
});

// ================================
// CUSTOM CURSOR
// ================================

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

    if (window.innerWidth > 768) {

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

    }

});

// ================================
// MOBILE MENU
// ================================

const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");

menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

    if (mobileMenu.classList.contains("active")) {
        menuBtn.innerHTML =
            '<i class="fas fa-times"></i>';
    } else {
        menuBtn.innerHTML =
            '<i class="fas fa-bars"></i>';
    }

});

// Close menu after click

document
    .querySelectorAll(".mobile-menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("active");

            menuBtn.innerHTML =
                '<i class="fas fa-bars"></i>';

        });

    });

// ================================
// TYPING EFFECT
// ================================

const typingText =
    document.getElementById("typing-text");

const professions = [

    "Frontend Developer",
    "Web Developer",
    "JavaScript Developer",
    "BCA Student"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord =
        professions[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(
                0,
                charIndex + 1
            );

        charIndex++;

        if (
            charIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(
                0,
                charIndex - 1
            );

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (
                wordIndex >=
                professions.length
            ) {
                wordIndex = 0;
            }

        }
    }

    setTimeout(
        typeEffect,
        deleting ? 60 : 100
    );
}

typeEffect();

// ================================
// REVEAL ON SCROLL
// ================================

const revealElements =
    document.querySelectorAll(
        ".about-card, .exp-card, .skill-box, .project-card, .contact-card"
    );

revealElements.forEach(item => {
    item.classList.add("reveal");
});

function reveal() {

    const reveals =
        document.querySelectorAll(
            ".reveal"
        );

    reveals.forEach(item => {

        const windowHeight =
            window.innerHeight;

        const elementTop =
            item.getBoundingClientRect()
                .top;

        const revealPoint = 120;

        if (
            elementTop <
            windowHeight - revealPoint
        ) {
            item.classList.add("active");
        }

    });

}

window.addEventListener(
    "scroll",
    reveal
);

reveal();

// ================================
// ACTIVE NAV LINK
// ================================

const navLinks =
    document.querySelectorAll(
        ".nav-links a"
    );

window.addEventListener(
    "scroll",
    () => {

        let current = "";

        document
            .querySelectorAll("section")
            .forEach(section => {

                const sectionTop =
                    section.offsetTop -
                    200;

                if (
                    window.scrollY >=
                    sectionTop
                ) {
                    current =
                        section.getAttribute(
                            "id"
                        );
                }

            });

        navLinks.forEach(link => {

            link.classList.remove(
                "active-link"
            );

            if (
                link.getAttribute(
                    "href"
                ) ===
                "#" + current
            ) {

                link.classList.add(
                    "active-link"
                );

            }

        });

    }
);

// ================================
// NAVBAR BACKGROUND
// ================================

const header =
    document.querySelector("header");

window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 50
        ) {

            header.style.background =
                "rgba(10,15,28,.85)";

            header.style.backdropFilter =
                "blur(20px)";

        } else {

            header.style.background =
                "transparent";

        }

    }
);

// ================================
// PROJECT CARD HOVER EFFECT
// ================================

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );

projectCards.forEach(card => {

    card.addEventListener(
        "mousemove",
        e => {

            if (
                window.innerWidth <
                992
            )
                return;

            const rect =
                card.getBoundingClientRect();

            const x =
                e.clientX -
                rect.left;

            const y =
                e.clientY -
                rect.top;

            const rotateX =
                ((y /
                    rect.height) -
                    0.5) *
                -8;

            const rotateY =
                ((x /
                    rect.width) -
                    0.5) *
                8;

            card.style.transform =
                `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-10px)
            `;

        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                `
                perspective(1000px)
                rotateX(0deg)
                rotateY(0deg)
                translateY(0)
            `;

        }
    );

});

// ================================
// SMOOTH SCROLL
// ================================

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(anchor => {

        anchor.addEventListener(
            "click",
            function (e) {

                e.preventDefault();

                const target =
                    document.querySelector(
                        this.getAttribute(
                            "href"
                        )
                    );

                if (target) {

                    target.scrollIntoView({
                        behavior:
                            "smooth"
                    });

                }

            }
        );

    });

// ================================
// CONSOLE MESSAGE
// ================================

console.log(
    "Portfolio Developed By Shiva Tanwar 🚀"
);

// Mobile navigation menu
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const navigation = document.getElementById("navigation");

function openMenu() {
    navigation.classList.add("active");
    document.body.classList.add("menu-open");
}

function closeMenu() {
    navigation.classList.remove("active");
    document.body.classList.remove("menu-open");
}

menuBtn.addEventListener("click", openMenu);

closeBtn.addEventListener("click", closeMenu);

navigation.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
});
// Close the mobile menu after selecting a section
document.querySelectorAll("nav a").forEach(function (link) {
    link.addEventListener("click", function () {
        navigation.classList.remove("active");
    });
});

// Reveal elements as they enter the screen
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
    revealElements.forEach(function (element) {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

// Run once when the page loads
revealOnScroll();

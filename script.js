// Mobile navigation menu
const menuBtn = document.getElementById("menuBtn");
const navigation = document.getElementById("navigation");

menuBtn.addEventListener("click", function () {
    navigation.classList.toggle("active");
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

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

// Toggle menu open/closed when clicking the menu button
menuBtn.addEventListener("click", function () {
    if (navigation.classList.contains("active")) {
        closeMenu();
    } else {
        openMenu();
    }
});

// Close menu using the X button
closeBtn.addEventListener("click", closeMenu);

// Close menu when selecting a navigation link
navigation.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
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

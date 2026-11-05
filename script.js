// =========================
// MOBILE NAVIGATION MENU
// =========================

const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const navigation = document.getElementById("navigation");

// Open the mobile menu
function openMenu() {
    navigation.classList.add("active");
    document.body.classList.add("menu-open");
}

// Close the mobile menu
function closeMenu() {
    navigation.classList.remove("active");
    document.body.classList.remove("menu-open");
}

// Toggle menu when clicking the menu button
menuBtn.addEventListener("click", function () {
    if (navigation.classList.contains("active")) {
        closeMenu();
    } else {
        openMenu();
    }
});

// Close menu using the X button
closeBtn.addEventListener("click", function () {
    closeMenu();
});

// Close menu when clicking a navigation link
navigation.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        closeMenu();
    });
});

// Close menu when pressing Escape
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeMenu();
    }
});


// =========================
// REVEAL ELEMENTS ON SCROLL
// =========================

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

// Run when scrolling
window.addEventListener("scroll", revealOnScroll);

// Run once when the page loads
revealOnScroll();


// =========================
// CLOSE MENU WHEN RESIZING
// =========================

window.addEventListener("resize", function () {
    if (window.innerWidth > 700) {
        closeMenu();
    }
});

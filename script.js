// Simple Cart Logic
const cartButtons = document.querySelectorAll('.add-to-cart');

cartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.parentElement.querySelector('h3').innerText;
        alert(`${productName} has been added to your cart!`);
    });
});

// Smooth Scroll for Nav (Bonus for UX)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        console.log("Navigating to section...");
    });
});


// Toggles the heart button background and icon style.

function toggleHeart(element) {
    element.classList.toggle('active');

    const icon = element.querySelector('i');
    if (element.classList.contains('active')) {
        icon.classList.remove('fa-regular');
        icon.classList.add('fa-solid');
    } else {
        icon.classList.remove('fa-solid');
        icon.classList.add('fa-regular');
    }
}


// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    // Toggle icon between bars and X
    const icon = hamburger.querySelector('i');
    if (navMenu.classList.contains('active')) {
        icon.classList.replace('fa-bars', 'fa-xmark');
    } else {
        icon.classList.replace('fa-xmark', 'fa-bars');
    }
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.querySelector('i').classList.replace('fa-xmark', 'fa-bars');
    });
});


// Reveal elements on scroll
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('section, .value-card').forEach(el => {
    el.classList.add('reveal-on-scroll');
    observer.observe(el);
});


// shop page
// Shop Filtering Logic
const filterLinks = document.querySelectorAll('.shop-sidebar li');
const productCards = document.querySelectorAll('.shop-card');

filterLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Update active state
        filterLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        const filterValue = link.getAttribute('data-filter');

        productCards.forEach(card => {
            const category = card.getAttribute('data-category');

            if (filterValue === 'all' || category === filterValue) {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.5s ease forwards';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Quick Add Feedback
document.querySelectorAll('.quick-add').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.innerText = "Added to Bag!";
        btn.style.background = "#7b4e96";
        btn.style.color = "white";
        setTimeout(() => {
            btn.innerText = "Quick Add +";
            btn.style.background = "rgba(255, 255, 255, 0.9)";
            btn.style.color = "black";
        }, 2000);
    });
});


// ===================SHOP PAGE==============
// 1. Mobile Menu Toggle
function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('active');
}

// 2. Heart Toggle (Background changes to purple)
function toggleHeart(btn) {
    btn.classList.toggle('active');
    const icon = btn.querySelector('i');
    icon.classList.toggle('fa-regular');
    icon.classList.toggle('fa-solid');
}

// 3. Simple Quantity Changer
function changeQty(amt) {
    const input = document.getElementById('qty-input');
    let val = parseInt(input.value) + amt;
    if (val > 0) input.value = val;
}

// 4. Size Selection
document.querySelectorAll('.size-btn').forEach(btn => {
    btn.onclick = () => {
        document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    };
});

// document.addEventListener('click', (e) => {
//     if (!nav-menu.contains(e.target) && !hamburger.contains(e.target)) {
//         nav-menu.classList.remove("nav-menu");
//     }
// });


// FUNCTIONAL PART OF NAV ICONS
function toggleOverlay(id) {
    const box = document.getElementById(id);
    if (box.style.display === "block") {
        box.style.display = "none";
    } else {
        box.style.display = "block";
    }
}

// Function for the Profile Form
function submitForm() {
    const name = document.getElementById('user-name').value;
    if (name === "" && email === "") {
        alert("Please enter your name");
        return;
    }

    // Hide form, show success message
    document.getElementById('reg-form').style.display = "none";
    document.getElementById('success-msg').style.display = "block";
}

// Global Wishlist Logic (Simulated)
function toggleHeart(btn) {
    btn.classList.toggle('active');
    const msg = document.getElementById('wishlist-msg');

    if (btn.classList.contains('active')) {
        msg.innerText = "Radiance Serum added to your wishlist!";
    } else {
        msg.innerText = "You haven't liked any products yet.";
    }
}

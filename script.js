
let cart = 0;
const cartCount = document.querySelector('.cart-count');
const addToCartButtons = document.querySelectorAll('.btn-add-cart');

addToCartButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    cart++;
    updateCart();
    button.textContent = '✓ Added!';
    setTimeout(() => {
      button.textContent = 'Add to Cart';
    }, 1500);
  });
});

function updateCart() {
  cartCount.textContent = cart;
  const cartBtn = document.querySelector('.cart-btn');
  cartBtn.style.transform = 'scale(1.1)';
  setTimeout(() => {
    cartBtn.style.transform = 'scale(1)';
  }, 300);
}



const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuBtn.setAttribute("aria-expanded", isOpen);

    if (isOpen) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

});




// const navItems = document.querySelectorAll(".nav-links a");

// navItems.forEach(function (link) {

//     link.addEventListener("click", function () {

//         navLinks.classList.remove("active");

//         menuBtn.setAttribute("aria-expanded", "false");

//         menuBtn.textContent = "☰";

//     });

// });


const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuBtn.setAttribute("aria-expanded", "false");

        menuBtn.textContent = "☰";

    });

});

if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}


const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = contactForm.querySelector('input[type="text"]');
    const name = nameInput.value.trim();
    
    if (name) {
      alert(`Thank you, ${name}! We'll get back to you soon.`);
      contactForm.reset();
    }
  });
}


document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      const headerHeight = 80;
      const targetPosition = target.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});
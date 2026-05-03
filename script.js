// ── 1. NAVBAR — Scroll karne pe background dark ho ──
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');

  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(10, 10, 10, 0.98)';
  } else {
    navbar.style.background = 'rgba(15, 15, 15, 0.9)';
  }
});


// ── 2. SMOOTH SCROLL — Nav links pe click karne pe ──
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // default jump rokta hai

    const targetId = this.getAttribute('href'); // e.g. "#about"
    const targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});


// ── 3. SCROLL ANIMATION — Elements dheere dheere aayein ──
const allCards = document.querySelectorAll('.skill-card, .project-card, .stat');

// Pehle sab invisible karo
allCards.forEach(function (card) {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Jab screen pe aaye tab dikhao
const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.15 });

allCards.forEach(function (card) {
  observer.observe(card);
});


// ── 4. CONTACT FORM — Submit pe message dikhao ──
const form = document.querySelector('.contact-form');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Page reload rokta hai

  const name = form.querySelector('input[type="text"]').value;

  alert('Shukriya ' + name + '! Tera message mil gaya. Main jald reply karungi! 🙏');

  form.reset(); // Form saaf kar do
});
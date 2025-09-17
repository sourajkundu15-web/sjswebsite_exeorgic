const cards = document.querySelectorAll('.project-card');
    const revealOnScroll = () => {
      const triggerBottom = window.innerHeight * 0.85;
      cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < triggerBottom) {
          card.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll);

 const toggleBtn = document.querySelector(".theme-toggle");
 const themeContent = document.querySelector(".theme-content");

  toggleBtn.addEventListener("click", () => {
    themeContent.classList.toggle("open");
    toggleBtn.classList.toggle("open");
  });

  const stars = document.querySelectorAll('.star');
const ratingValue = document.getElementById('ratingValue');
const form = document.getElementById('feedbackForm');
const popup = document.getElementById('popupMessage');

stars.forEach(star => {
  star.addEventListener('click', () => {
    let val = star.getAttribute('data-value');
    ratingValue.value = val;

    stars.forEach(s => s.classList.remove('active'));
    for (let i = 0; i < val; i++) {
      stars[i].classList.add('active');
    }
  });

  star.addEventListener('mouseover', () => {
    stars.forEach(s => s.classList.remove('hovered'));
    for (let i = 0; i < star.getAttribute('data-value'); i++) {
      stars[i].classList.add('hovered');
    }
  });

  star.addEventListener('mouseout', () => {
    stars.forEach(s => s.classList.remove('hovered'));
  });
});

form.addEventListener('submit', function() {
  setTimeout(() => {
    popup.style.display = 'block';
    setTimeout(() => popup.style.display = 'none', 3000);
    form.reset();
    stars.forEach(s => s.classList.remove('active'));
  }, 500);
});

// Dropdowns for achievers
const dropdowns = document.querySelectorAll(".dropdown-btn");

dropdowns.forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    content.classList.toggle("show");
    btn.classList.toggle("active");
  });
});

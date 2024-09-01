document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.classList.add('hover');
  });
  card.addEventListener('mouseleave', () => {
    card.classList.remove('hover');
  });
});


window.addEventListener('scroll', () => {
  document.getElementById('back-to-top').style.display = window.scrollY > 200 ? 'block' : 'none';
});

document.getElementById('back-to-top').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
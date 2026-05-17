//REVEAL ANIMATION
const reveals = document.querySelectorAll('.reveal');
function revealOnScroll(){
  reveals.forEach((item) => {
    const top = item.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      item.classList.add('active');
    }

  });
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// CONTACT FORM
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const success = document.createElement('div');
  success.className = 'modern-alert';
  success.innerHTML = `
    <div class="alert-icon">!</div>
    <div>
      <h4>Message Sent!</h4>
      <p>Your travel request was submitted successfully.</p>
    </div>
  `;
  document.body.appendChild(success);
  //Show alert
  setTimeout(() => {
    success.classList.add('show');
  }, 100);
  setTimeout(() => {
    success.classList.remove('show');
    setTimeout(() => {
      success.remove();
    }, 400);
  }, 3000);
  form.reset();

});
function goPackages(){
  window.location.href = 'packages.html';
}
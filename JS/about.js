const features = [
  {
    title: "Handpicked worldwide",
    desc: "Stays and experiences vetted by our global travel team.",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>`
  },
  {
    title: "Book with confidence",
    desc: "Free cancellation up to 48 hours and price match guarantee.",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`
  },
  {
    title: "Tailor-made trips",
    desc: "Custom itineraries shaped around your travel style.",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z"/></svg>`
  },
  {
    title: "24/7 concierge",
    desc: "Real humans ready to help anytime.",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8a6 6 0 0 0-12 0"/></svg>`
  }
];

const grid = document.getElementById("why-grid");

if(grid){
  grid.innerHTML = features.map(f => `
    <article class="feature">
      <div class="feature__icon">${f.icon}</div>
      <h3 class="feature__title">${f.title}</h3>
      <p class="feature__desc">${f.desc}</p>
    </article>
  `).join("");
}

//Faq
document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.parentElement.classList.toggle("active");
  });
});

//COUNTERS
const counters = document.querySelectorAll(".counter");
counters.forEach(counter => {
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText;
    const increment = target / 100;

    if(current < target){
      counter.innerText = `${Math.ceil(current + increment)}`;
      setTimeout(updateCounter, 20);
    }else{
      counter.innerText = target.toLocaleString() + "+";
    }
  };

  updateCounter();
});

//SCROLL ANIMATION
const hiddenElements = document.querySelectorAll(
  ".card, .feature, .service-card, .timeline-item, .testimonial, .faq-item"
);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
});

hiddenElements.forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});

function openVideo() {
  const modal = document.getElementById("videoModal");
  const frame = document.getElementById("videoFrame");

  //YouTube video 
 frame.src = "https://www.youtube.com/embed/rtvPtcYZa68?autoplay=1";

  modal.style.display = "flex";
}

function closeVideo() {
  const modal = document.getElementById("videoModal");
  const frame = document.getElementById("videoFrame");

  frame.src = "";
  modal.style.display = "none";
}
//REVEAL ON SCROLL
const reveals = document.querySelectorAll(".reveal");
function revealSections(){
  reveals.forEach(section => {
    const windowHeight = window.innerHeight;
    const revealTop = section.getBoundingClientRect().top;
    if(revealTop < windowHeight - 100){
      section.classList.add("active");
    }
  });
}
window.addEventListener("scroll", revealSections);
revealSections();
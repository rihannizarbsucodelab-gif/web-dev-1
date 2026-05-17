function showToast(msg, type = "") {
  let t = document.getElementById("toast");
  if (!t) return;
  t.innerText = msg;
  t.className = "show " + type;
  setTimeout(() => {
    t.className = "";
  }, 2000);
}
//Login
function loginUser() {
  let u = document.getElementById("loginUser");
  let p = document.getElementById("loginPass");

  if (!u || !p || !u.value || !p.value) {
    showToast("Fill all fields", "error");
    return;
  }
  localStorage.setItem("isLoggedIn", "true");
  showToast("Login Success", "success");
  setTimeout(() => {
    window.location.href = "home.html";
  }, 1000);
}
//Signup 
function signupUser() {
  let n = document.getElementById("name");
  let e = document.getElementById("email");
  let p = document.getElementById("password");

  if (!n || !e || !p || !n.value || !e.value || !p.value) {
    showToast("Fill all fields", "error");
    return;
  }
  showToast("Account Created", "success");
  setTimeout(() => {
    window.location.href = "login.html";
  }, 1000);
}
//HOME CHECK 
function checkLoginStatus() {
  let btn = document.getElementById("exploreBtn");
  if (!btn) return;
  if (localStorage.getItem("isLoggedIn") === "true") {
    btn.style.display = "inline-block";
  }
}
//CONTACT 
function submitForm() {
  showToast("Message Sent", "success");
}

//GALLERY FILTER 
function filterGallery(cat) {
  let items = document.querySelectorAll(".gallery .card");

  items.forEach(i => {
    if (cat === "all" || i.classList.contains(cat)) {
      i.style.display = "block";
    } else {
      i.style.display = "none";
    }
  });
}
//THEME 
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}
//SUCCESS 
function showSuccessAnimation() {
  const box = document.getElementById("successBox");
  if (!box) return;
  box.classList.add("show");
  setTimeout(() => {
    window.location.href = "home.html";
  }, 1500);
}
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
const slides = document.querySelectorAll(".hero-slider .slide");
const dots = document.querySelectorAll(".dot");
let current = 0;
function showSlide(index) {
  if (!slides.length || !dots.length) return;
  slides.forEach(s => s.classList.remove("active"));
  dots.forEach(d => d.classList.remove("active"));
  slides[index].classList.add("active");
  dots[index].classList.add("active");
  current = index;
}
function goSlide(index) {
  showSlide(index);
}
setInterval(() => {
  if (!slides.length) return;
  current = (current + 1) % slides.length;
  showSlide(current);
}, 5000);
const slideContent = [
  { title: "Dream Holiday Escape", desc: "Escape your daily routine..." },
  { title: "Adventure Getaway", desc: "Get ready for thrilling journeys..." },
  { title: "Explore New Destinations", desc: "Discover amazing cities..." },
  { title: "Luxury Travel Experience", desc: "Indulge in world-class luxury..." },
  { title: "Nature & Peace Retreat", desc: "Reconnect with nature..." },
  { title: "City Lights & Culture", desc: "Experience vibrant city life..." }
];

function updateText(index) {
  const title = document.getElementById("slideTitle");
  const desc = document.getElementById("slideDesc");
  if (!title || !desc) return;
  title.innerText = slideContent[index].title;
  desc.innerText = slideContent[index].desc;
}
const oldShowSlide = showSlide;
showSlide = function (index) {
  oldShowSlide(index);
  updateText(index);
};
updateText(0);
//POPULAR DESTINATIONS
const destinations = [
  { name: "Santorini, Greece", price: 899, rating: 4.9, img: "./assets/santorini Greece.png" },
  { name: "Bali, Indonesia", price: 749, rating: 4.8, img: "./assets/bali Indonesia.png"  },
  { name: "Kyoto, Japan", price: 1099, rating: 4.9, img: "./assets/kyoto Japan.png" },
  { name: "Maldives", price: 1499, rating: 5.0, img: "./assets/maldives.png" },
  { name: "Paris, France", price: 699, rating: 4.7, img: "./assets/paris France.png" },
  { name: "Swiss Alps", price: 1199, rating: 4.8, img: "./assets/swiss alps.png" },
  { name: "New York, USA", price: 999, rating: 4.7, img: "./assets/new york USA.png" },
  { name: "Dubai, UAE", price: 1299, rating: 4.8, img: "./assets/dubai UAE.png" },
  { name: "London, UK", price: 849, rating: 4.6, img: "./assets/london UK.png" },
  { name: "Rome, Italy", price: 799, rating: 4.7, img: "./assets/rome Italy.png" },
  { name: "Sydney, Australia", price: 1399, rating: 4.8, img: "./assets/sydney-australia.png" },
  { name: "Cape Town, South Africa", price: 899, rating: 4.7, img: "./assets/Cape Town South Africa.png" },  
];
const destinationsGrid = document.getElementById("destinationsGrid");
if (destinationsGrid) {
  destinationsGrid.innerHTML = destinations.map(d => `
    <article class="card">
      <div class="card-img">
        <img src="${d.img}" alt="${d.name}" />
        <span class="badge">★ ${d.rating}</span>
      </div>
      <div class="card-body">
        <div>
          <h3>${d.name}</h3>
          <p class="price">From <strong>$${d.price}</strong></p>
        </div>
        <button class="btn btn-primary" onclick="goToDetails('${d.name}')">
          Book
        </button>
      </div>
    </article>
  `).join("");
}
//TRENDING DESTINATIONS
const trendingDestinations = [
  {
    name: "Santorini",
    country: "Greece",
    img: "./assets/Santorini greece.png",
    price: 899,
    trips: 24
  },
  {
    name: "Bali",
    country: "Indonesia",
    img: "./assets/Bali Indonesia.png",
    price: 749,
    trips: 38
  },
  {
    name: "Swiss Alps",
    country: "Switzerland",
    img: "./assets/Swiss Alps.png",
    price: 1199,
    trips: 19
  },
  {
    name: "Kyoto",
    country: "Japan",
    img: "./assets/Kyoto Japan.png",
    price: 1099,
    trips: 27
  }
];
const grid = document.getElementById("dest-grid");
if (grid) {
  grid.innerHTML = trendingDestinations.map(d => `
    <a href="details.html?place=${encodeURIComponent(d.name)}" class="dest-card">
      <img src="${d.img}" alt="${d.name}" />
      <div class="dest-overlay"></div>
      <div class="dest-info">
        <div class="dest-country">${d.country}</div>
        <div class="dest-row">
          <h3 class="dest-name">${d.name}</h3>
          <span class="dest-badge">${d.trips} trips</span>
        </div>
      </div>
    </a>
  `).join("");
}

//DETAILS NAV 
function goToDetails(place) {
  window.location.href = `details.html?place=${encodeURIComponent(place)}`;
}
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
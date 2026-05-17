function showToast(msg,type=""){
    let t=document.getElementById("toast");
    if(!t)return;
    t.innerText=msg;
    t.className="show "+type;
    setTimeout(()=>{t.className="";},2000);
}

//Login
function loginUser(){
    let u=document.getElementById("loginUser").value;
    let p=document.getElementById("loginPass").value;
    if(!u||!p){
        showToast("Fill all fields","error");
        return;
    }
    localStorage.setItem("isLoggedIn","true");
    showToast("Login Success","success");
    setTimeout(()=>{
        window.location.href="home.html";
    },1000);
}

//SIGNUP
function signupUser(){
    let n=document.getElementById("name").value;
    let e=document.getElementById("email").value;
    let p=document.getElementById("password").value;
    if(!n||!e||!p){
        showToast("Fill all fields","error");
        return;
    }
    showToast("Account Created","success");
    setTimeout(()=>{
        window.location.href="login.html";
    },1000);
}

function checkLoginStatus(){
    let btn=document.getElementById("exploreBtn");
    if(!btn)return;

    if(localStorage.getItem("isLoggedIn")=="true"){
        btn.style.display="inline-block";
    }
}

//CONTACT 
function submitForm(){
    showToast("Message Sent","success");
}
function filterGallery(cat){
    let items=document.querySelectorAll(".gallery .card");
    items.forEach(i=>{
        if(cat=="all"||i.classList.contains(cat)){
            i.style.display="block";
        }else{
            i.style.display="none";
        }
    });
}
if (localStorage.getItem("loggedIn") === null) {
  localStorage.setItem("loggedIn", "false");
}

function logout() {
  localStorage.setItem("loggedIn", "false");
  showToast("Logged out!", "success");

  setTimeout(() => {
    window.location.href = "login.html";
  }, 800);
}

(function () {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }
})();

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
function showSlide(index){
  if(!slides.length || !dots.length) return;
  slides.forEach(s => s.classList.remove("active"));
  dots.forEach(d => d.classList.remove("active"));
  slides[index].classList.add("active");
  const activeDot = dots[index];
  activeDot.classList.remove("active");
  void activeDot.offsetWidth; 
  activeDot.classList.add("active");
  current = index;
}

function goSlide(index){
  showSlide(index);
}

//AUTO SLIDE 
setInterval(() => {
  if(!slides.length) return;
  current = (current + 1) % slides.length;
  showSlide(current);
}, 5000);

const slideContent = [
  {
    title: "Dream Holiday Escape",
    desc: `Escape your daily routine and step into a world of relaxation and beauty.
Enjoy peaceful beaches, luxury resorts, and calming ocean views.
Create unforgettable memories with comfort, joy, and complete freedom while traveling to your dream destinations.`
  },
  {
    title: "Adventure Getaway",
    desc: `Get ready for thrilling journeys across mountains, forests, and wild landscapes.
Feel the excitement of outdoor adventures and breathtaking views at every step.
Experience challenges, fun, and unforgettable moments that make your trip truly special and full of energy.`
  },
  {
    title: "Explore New Destinations",
    desc: `Discover amazing cities filled with culture, history, and modern beauty.
Walk through vibrant streets, taste new foods, and meet different cultures around the world.
Every destination brings new stories, experiences, and memories that stay with you forever.`
  },
  {
    title: "Luxury Travel Experience",
    desc: `Indulge in world-class luxury with premium resorts, fine dining, and exclusive experiences.
Travel in comfort and style while enjoying top-tier services and breathtaking destinations designed for unforgettable moments.`
  },
  {
    title: "Nature & Peace Retreat",
    desc: `Reconnect with nature in serene landscapes filled with greenery, fresh air, and peaceful surroundings.
Perfect for relaxation, meditation, and escaping the busy city life into calm and refreshing environments.`
  },
  {
    title: "City Lights & Culture",
    desc: `Experience the vibrant life of iconic cities filled with lights, culture, shopping, and entertainment.
Explore modern attractions, historic landmarks, and exciting nightlife all in one unforgettable urban journey.`
  }
];
function updateText(index){
  const title = document.getElementById("slideTitle");
  const desc = document.getElementById("slideDesc");
  if(!title || !desc) return;

  title.classList.remove("fade-text","show");
  desc.classList.remove("fade-text","show");
  void title.offsetWidth;
  title.innerText = slideContent[index].title;
  desc.innerText = slideContent[index].desc;
  title.classList.add("fade-text");
  desc.classList.add("fade-text");

  setTimeout(()=>{
    title.classList.add("show");
    desc.classList.add("show");
  }, 50);
}
const oldShowSlide = showSlide;
showSlide = function(index){
  oldShowSlide(index);
  updateText(index);   
};
updateText(0);
function goToPackages(){
    window.location.href = "packages.html";
}
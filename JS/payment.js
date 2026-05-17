const params = new URLSearchParams(window.location.search);
const place = params.get("place") || "Maldives";
const destinations = {
  "Maldives":{
    price:"$1499",
    img:"images/maldives.png"
  },

  "Bali, Indonesia":{
    price:"$749",
    img:"assets/bali Indonesia.png"
  },

  "Santorini, Greece":{
    price:"$899",
    img:"assets/santorini Greece.png"
  },

  "Kyoto, Japan":{
    price:"$1099",
    img:"assets/kyoto Japan.png"
  }
  ,
  "Paris, France":{
    price:"$699",
    img:"assets/paris France.png"
  }, 
  "Dubai, UAE":{
    price:"$1299",
    img:"assets/dubai UAE.png"
  },
  "London, UK":{
    price:"$849",
    img:"assets/london UK.png"
  },
  "Rome, Italy":{
    price:"$799",
    img:"assets/rome Italy.png"
  },
  "New York, USA":{
    price:"$999",
    img:"assets/new york USA.png"
  },
  "Sydney, Australia":{
    price:"$1399",
    img:"assets/sydney-australia.png"
  },
  "Cape Town, South Africa":{
    price:"$899",
    img:"assets/Cape Town South Africa.png"
  },
  "Swiss Alps, Switzerland":{
    price:"$1199",
    img:"assets/swiss alps.png"
  },
  "Tokyo, Japan":{
    price: 1099,
    rating: "4.9",
    img: "assets/tokyo Japan.png",
    desc: "Tokyo is a bustling metropolis that blends cutting-edge technology with rich culture and history."
  }
};
const selected =
destinations[place] || destinations["Maldives"];
document.getElementById("placeName").innerText = place;
document.getElementById("placePrice").innerText = selected.price;
document.getElementById("placeImage").src = selected.img;

//Payment
document
.getElementById("paymentForm")
.addEventListener("submit",function(e){
  e.preventDefault();
  const holder =
  document.getElementById("holder").value;
  const card =
  document.getElementById("card").value;
  const expiry =
  document.getElementById("expiry").value;
  const cvv =
  document.getElementById("cvv").value;
  if(!holder || !card || !expiry || !cvv){
    alert("Please fill all fields");
    return;
  }
 const popup = document.getElementById("successPopup");
popup.style.display = "flex";

setTimeout(() => {
  window.location.href = "home.html";
}, 3500);

});
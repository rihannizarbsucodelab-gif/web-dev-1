const data = {
  "Santorini, Greece": {
    price: 899,
    rating: "4.9",
    img: "./assets/santorini Greece.png",
    desc: "Santorini is famous for its whitewashed houses, blue domes, and stunning sunsets over the Aegean Sea."
  },
  "Bali, Indonesia": {
    price: 749,
    rating: "4.8",
    img: "./assets/bali Indonesia.png",
    desc: "Bali offers lush jungles, beautiful beaches, and a rich cultural experience."
  },
  "Kyoto, Japan": {
    price: 1099,
    rating: "4.9",
    img: "./assets/kyoto Japan.png",
    desc: "Kyoto is known for its temples, cherry blossoms, and traditional Japanese culture."
  },
  "Maldives": {
    price: 1499,
    rating: "5.0",
    img: "./assets/maldives.png",
    desc: "The Maldives is a tropical paradise with crystal-clear waters and luxury villas."
  },
  "Paris, France": {
    price: 699,
    rating: "4.7",
    img: "./assets/paris France.png",
    desc: "Paris is the city of love, art, and iconic landmarks like the Eiffel Tower."
  },
  "Dubai, UAE": {
    price: 1299,
    rating: "4.8",
    img: "./assets/dubai UAE.png",
    desc: "Dubai is known for luxury shopping, ultramodern architecture, and desert adventures."
  },
  "London, UK": {
    price: 849,
    rating: "4.6",
    img: "./assets/london UK.png",
    desc: "London is a historic city with a rich cultural scene, world-class museums, and iconic landmarks."
  },
  "Rome, Italy": {
    price: 799,
    rating: "4.7",
    img: "./assets/rome Italy.png",
    desc: "Rome is a city steeped in history, with ancient ruins, Renaissance art, and vibrant culture."
  },
  "New York, USA": {
    price: 999,
    rating: "4.7",
    img: "./assets/new york USA.png",
    desc: "New York is a bustling metropolis known for its art, culture, and iconic landmarks."
  },
  "Sydney, Australia": {
    price: 1399,
    rating: "4.8",
    img: "./assets/sydney-australia.png",
    desc: "Sydney is a vibrant city known for its harbor, beaches, and cultural attractions."
  },
  "Cape Town, South Africa": {
    price: 899,
    rating: "4.7",
    img: "./assets/Cape Town South Africa.png",
    desc: "Cape Town is a coastal city with stunning landscapes, rich history, and vibrant culture."
  }
};
const params = new URLSearchParams(window.location.search);
const place = params.get("place");
const item = data[place];
if (!item) {
  console.log("Place not found:", place);
} else {
  document.getElementById("placeName").textContent = place;
  document.getElementById("placeImg").src = item.img;
  document.getElementById("placeRating").textContent = item.rating;
  document.getElementById("placePrice").textContent = `$${item.price}`;
  document.getElementById("placeDesc").textContent = item.desc;
}
function goBack() {
  window.history.back();
}
function calculatePrice() {
  const price = parseInt(document.getElementById("placePrice").textContent.replace("$", ""));

  const checkin = new Date(document.getElementById("checkin").value);
  const checkout = new Date(document.getElementById("checkout").value);

  const resultBox = document.getElementById("totalPrice");

  if (!document.getElementById("checkin").value || !document.getElementById("checkout").value) {
    resultBox.textContent = "Select dates to see total price";
    return;
  }
  if (checkout <= checkin) {
    resultBox.textContent = "Invalid date range";
    return;
  }
  const days = (checkout - checkin) / (1000 * 60 * 60 * 24);
  const guests = parseInt(document.getElementById("guests").value);
  const total = price * days * guests;
  resultBox.textContent = `Total: $${total}`;
}
function goBack() {
  window.history.back();
}
function goToPayment() {
  const place = document.getElementById("placeName").innerText;
  const price = document.getElementById("placePrice").innerText.replace("$","");
  const img = document.getElementById("placeImg").src;
  const checkin = document.getElementById("checkin").value;
  const checkout = document.getElementById("checkout").value;
  const guests = document.getElementById("guests").value;

  if (!checkin || !checkout) {
    alert("Please select dates");
    return;
  }

  //Loading Screen
  const loader = document.getElementById("loadingScreen");
  loader.style.display = "flex";
  setTimeout(() => {
    window.location.href =
      `payment.html?place=${encodeURIComponent(place)}&price=${price}&img=${encodeURIComponent(img)}&checkin=${checkin}&checkout=${checkout}&guests=${guests}`;
  }, 1800);
}
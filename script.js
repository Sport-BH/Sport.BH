const products = {
  mens: [
    { name: "Mens Jersey", price: 20, img: "men jersey.jpeg" },
    { name: "Mens Shorts", price: 15, img: "men shorts.jpeg" },
    { name: "Mens Hoodie", price: 30, img: "men hoodie.jpeg" }
  ],
  womens: [
    { name: "Womens Jersey", price: 22, img: "women jersey.jpg" },
    { name: "Womens Leggings", price: 18, img: "women leggings.jpg" },
    { name: "Womens Hoodie", price: 28, img: "women hoodie.jpeg" }
  ],
  kids: [
    { name: "Kids Jersey", price: 15, img: "kids jersey.jpg" },
    { name: "Kids Shorts", price: 12, img: "kids shorts.jpg" },
    { name: "Kids Hoodie", price: 20, img: "kids hoodie.jpeg" }
  ],
  accessories: [
    { name: "Cap", price: 10, img: "cap.jpg" },
    { name: "Bag", price: 25, img: "bag.jpeg" },
    { name: "Sports Watch", price: 50, img: "sports-watch.jpg" }
  ]
};


document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const sectionId = link.getAttribute("data-section");
    document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
    document.getElementById(sectionId).classList.add("active");
  });
});

function loadFeatured() {
  const featuredDiv = document.getElementById("featured-products");
  featuredDiv.innerHTML = "";

  const featuredItems = [
    products.mens[0], 
    products.mens[1], 
    products.womens[0], 
    products.womens[2]  
  ];

  featuredItems.forEach(item => {
    let card = document.createElement("div");
    card.className = "product-card";

    let img = document.createElement("img");
    img.src = item.img;
    img.alt = item.name;

    let title = document.createElement("h3");
    title.textContent = item.name;

    card.appendChild(img);
    card.appendChild(title);
    featuredDiv.appendChild(card);
  });
}
loadFeatured();

function createProductCard(item) {
  let card = document.createElement("div");
  card.className = "product-card";

  let img = document.createElement("img");
  img.src = item.img;
  img.alt = item.name;

  let title = document.createElement("h3");
  title.textContent = item.name;

  let price = document.createElement("p");
  price.textContent = "Price: " + item.price + " BD";



  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(price);

  return card;
}


document.querySelectorAll(".categories button").forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.getAttribute("data-category");
    const listDiv = document.getElementById("product-list");
    listDiv.innerHTML = "";
    products[category].forEach(item => {
      let card = createProductCard(item);
      listDiv.appendChild(card);
    });
  });
});

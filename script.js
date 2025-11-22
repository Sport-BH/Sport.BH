
const products = {
  mens: [
    { name: "Mens Jersey", price: 20, img: "mens jersey.jpeg" },
    { name: "Mens Shorts", price: 15, img: "mens-shorts.jpg" },
    { name: "Mens Hoodie", price: 30, img: "mens-hoodie.jpg" }
  ],
  womens: [
    { name: "Womens Jersey", price: 22, img: "womens-jersey.jpg" },
    { name: "Womens Leggings", price: 18, img: "womens-leggings.jpg" },
    { name: "Womens Hoodie", price: 28, img: "womens-hoodie.jpg" }
  ],
  kids: [
    { name: "Kids Jersey", price: 15, img: "kids-jersey.jpg" },
    { name: "Kids Shorts", price: 12, img: "kids-shorts.jpg" },
    { name: "Kids Hoodie", price: 20, img: "kids-hoodie.jpg" }
  ],
  accessories: [
    { name: "Cap", price: 10, img: "cap.jpg" },
    { name: "Bag", price: 25, img: "bag.jpg" },
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

  let qtyDiv = document.createElement("div");
  qtyDiv.className = "quantity";
  let minusBtn = document.createElement("button");
  minusBtn.textContent = "-";
  let qtyInput = document.createElement("input");
  qtyInput.type = "number";
  qtyInput.value = 1;
  qtyInput.min = 1;
  let plusBtn = document.createElement("button");
  plusBtn.textContent = "+";

  minusBtn.addEventListener("click", () => {
    if (qtyInput.value > 1) qtyInput.value--;
  });
  plusBtn.addEventListener("click", () => {
    qtyInput.value++;
  });

  qtyDiv.appendChild(minusBtn);
  qtyDiv.appendChild(qtyInput);
  qtyDiv.appendChild(plusBtn);

  let addBtn = document.createElement("button");
  addBtn.textContent = "Add to Cart";
  let confirmBtn = document.createElement("button");
  confirmBtn.textContent = "Confirm";

  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(price);
  card.appendChild(qtyDiv);
  card.appendChild(addBtn);
  card.appendChild(confirmBtn);

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

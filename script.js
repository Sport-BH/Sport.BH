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

  // Append only the essentials
  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(price);

  return card;
}

async function loadProduct() {
  const response = await fetch("./products.json");
  const products = await response.json();

  products.product.forEach(function (data) {
    if (data.name === localStorage.getItem("name")) {
      var nameHTML = document.createElement("h2");
      var priceHTML = document.createElement("p");
      var imgHTML = document.createElement("img");
      var name = localStorage.getItem("name");
      var price = localStorage.getItem("price");
      var img = localStorage.getItem("img");
      nameHTML.innerHTML = name;
      priceHTML.innerHTML = price;
      imgHTML.src = img;
      imgHTML.width = 100;
      imgHTML.height = 100;
      document.getElementById("product").appendChild(nameHTML);
      document.getElementById("product").appendChild(priceHTML);
      document.getElementById("product").appendChild(imgHTML);
    }
  });
}

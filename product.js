async function loadProduct() {
  const response = await fetch("./products.json");
  const products = await response.json();

  products.product.forEach(function (data) {
    if (data.name === localStorage.getItem("name")) {
      var nameHTML = document.createElement("h3");
      var priceHTML = document.createElement("h4");
      var imgHTML = document.createElement("img");
      var div = document.createElement("div");

      var form = document.createElement("form");
      var label = document.createElement("label");
      var numField = document.createElement("input");
      var submit = document.createElement("input");

      var name = localStorage.getItem("name");
      var price = localStorage.getItem("price");
      var img = localStorage.getItem("img");

      form.setAttribute("action", "cart.html");
      form.setAttribute("id", "productForm");
      label.setAttribute("for", "quantity");
      label.innerText = "Quantity";
      numField.setAttribute("type", "number");
      numField.setAttribute("name", "quantity");
      numField.setAttribute("placeholder", "1");
      numField.setAttribute("min", "1");
      numField.setAttribute("max", "5");
      numField.setAttribute("id", "quantityInput");
      numField.value = 1;
      submit.setAttribute("type", "submit");
      submit.setAttribute("value", "Submit");

      nameHTML.innerHTML = name;
      priceHTML.innerHTML = "$" + price;
      imgHTML.src = img;
      imgHTML.height = 600;
      imgHTML.width = 600;
      imgHTML.classList.add("col-6");
      div.classList.add("col-6");


      form.appendChild(label);
      form.appendChild(numField);
      form.appendChild(submit);
      div.appendChild(nameHTML);
      div.appendChild(priceHTML);
      div.appendChild(form);
      document.getElementById("product").appendChild(imgHTML);
      document.getElementById("product").appendChild(div);
    }
  });

  onSub();
}

function onSub() {
  const form = document.getElementById('productForm');

  form.addEventListener("submit", function () {

    if (localStorage.getItem("cartNames") == null) {

      var name = [];
      var price = [];
      var quantity = [];

      name.push(localStorage.getItem("name"));
      price.push(localStorage.getItem("price"));
      quantity.push(document.getElementById("quantityInput").value);

      localStorage.setItem("cartNames", JSON.stringify(name));
      localStorage.setItem("cartPrices", JSON.stringify(price));
      localStorage.setItem("cartQuantities", JSON.stringify(quantity));
    } else {

      var x = JSON.parse(localStorage.getItem("cartNames"));
      var y = JSON.parse(localStorage.getItem("cartQuantities"));

      if (x.includes(localStorage.getItem("name"))) {

        return;
      } else {
        var name = JSON.parse(localStorage.getItem("cartNames"));
        var price = JSON.parse(localStorage.getItem("cartPrices"));
        var quantity = JSON.parse(localStorage.getItem("cartQuantities"));

        name.push(localStorage.getItem("name"));
        price.push(localStorage.getItem("price"));
        quantity.push(document.getElementById("quantityInput").value);

        localStorage.setItem("cartNames", JSON.stringify(name));
        localStorage.setItem("cartPrices", JSON.stringify(price));
        localStorage.setItem("cartQuantities", JSON.stringify(quantity));
      }
    }
  })
}
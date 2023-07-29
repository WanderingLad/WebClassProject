async function loadCart() {
    var names = JSON.parse(localStorage.getItem("cartNames"));
    var prices = JSON.parse(localStorage.getItem("cartPrices"));
    var quantities = JSON.parse(localStorage.getItem("cartQuantities"));
    const table = document.getElementById('cartTable');
    const totalCost = document.getElementById('totalCost');
    const checkout = document.getElementById('checkout');

    checkout.onclick = emptyCart;

    var total = 0;

    if (names.length > 0) {
        for (var i = 0; i < names.length; i++) {

            var tr = document.createElement("tr");
            var name = document.createElement("td");
            var price = document.createElement("td");
            var quantity = document.createElement("td");
            var cost = document.createElement("td");
            var button = document.createElement("button");

            name.innerHTML = names[i];
            price.innerHTML = prices[i];
            quantity.innerHTML = quantities[i];
            cost.innerHTML = Number(price.innerHTML) * Number(quantity.innerHTML);
            button.innerHTML = "Remove";
            button.setAttribute("item", i);

            button.onclick = removeItem;

            tr.appendChild(name);
            tr.appendChild(quantity);
            tr.appendChild(price);
            tr.appendChild(cost);
            tr.appendChild(button);
            table.appendChild(tr);

            total += Number(cost.innerHTML);

            totalCost.innerHTML = "Total Cost: " + total;
        }
    } else {
        var tr = document.createElement("tr");

        tr.innerHTML = "Cart is empty";
        totalCost.innerHTML = ""

        table.appendChild(tr);
    }
}

function removeItem(e) {
    var names = JSON.parse(localStorage.getItem("cartNames"));
    var prices = JSON.parse(localStorage.getItem("cartPrices"));
    var quantities = JSON.parse(localStorage.getItem("cartQuantities"));

    console.log(e.target.getAttribute("item"));

    var i = e.target.getAttribute("item");

    names.splice(i, 1);
    prices.splice(i, 1);
    quantities.splice(i, 1);

    localStorage.setItem("cartNames", JSON.stringify(names));
    localStorage.setItem("cartPrices", JSON.stringify(prices));
    localStorage.setItem("cartQuantities", JSON.stringify(quantities));

    location.reload();
} 

function emptyCart(){
    var names = [];
    var prices = [];
    var quantities = [];

    localStorage.setItem("cartNames", JSON.stringify(names));
    localStorage.setItem("cartPrices", JSON.stringify(prices));
    localStorage.setItem("cartQuantities", JSON.stringify(quantities));

    location.reload();
}
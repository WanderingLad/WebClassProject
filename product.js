async function loadProduct() {
    const response = await fetch("./products.json");
    const products = await response.json();

    products.users.forEach(function (data) {
        if(data.site === localStorage.getItem("site")){
            var siteHTML = document.createElement("h2");
            var userHTML = document.createElement("h3");
            var site = localStorage.getItem("site");
            var user = localStorage.getItem("user");
            siteHTML.innerHTML = site;
            userHTML.innerHTML = user;
            document.getElementById("product").appendChild(siteHTML);
            document.getElementById("product").appendChild(userHTML);
        }
    });
}
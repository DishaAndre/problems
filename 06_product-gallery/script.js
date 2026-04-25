// JSON DATA
let data = [
    { name: "Phone", price: 10000 },
    { name: "Laptop", price: 50000 },
    { name: "Headphones", price: 2000 }
];

let total = 0;

// LOOP PRODUCTS
data.forEach(function(product) {

    let card = document.createElement("div");
    card.className = "card";

    let title = document.createElement("h3");
    title.innerText = product.name;

    let price = document.createElement("p");
    price.innerText = "₹" + product.price;

    let btn = document.createElement("button");
    btn.innerText = "Buy Now";

    // BUTTON CLICK
    btn.onclick = function() {

        let li = document.createElement("li");
        li.innerText = product.name + " - ₹" + product.price;

        document.getElementById("cart").appendChild(li);

        total += product.price;
        document.getElementById("total").innerText = "Total: ₹" + total;
    };

    // APPEND
    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(btn);

    document.getElementById("products").appendChild(card);
});

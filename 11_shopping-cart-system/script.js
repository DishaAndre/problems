let data = [
    { name: "Phone", price: 10000, qty: 0 },
    { name: "Laptop", price: 50000, qty: 0 },
    { name: "Headphones", price: 2000, qty: 0 }
];

let total = 0;

// CREATE UI
function render() {

    let container = document.getElementById("products");
    container.innerHTML = ""; // clear

    total = 0;

    data.forEach(function(item, index) {

        let card = document.createElement("div");
        card.className = "card";

        let title = document.createElement("h3");
        title.innerText = item.name;

        let price = document.createElement("p");
        price.innerText = "₹" + item.price;

        let qty = document.createElement("p");
        qty.innerText = "Qty: " + item.qty;

        // + button
        let add = document.createElement("button");
        add.innerText = "+";

        add.onclick = function() {
            item.qty++;
            render();
        };

        // - button
        let sub = document.createElement("button");
        sub.innerText = "-";

        sub.onclick = function() {
            if(item.qty > 0){
                item.qty--;
                render();
            }
        };

        card.appendChild(title);
        card.appendChild(price);
        card.appendChild(qty);
        card.appendChild(add);
        card.appendChild(sub);

        container.appendChild(card);

        total += item.price * item.qty;
    });

    document.getElementById("total").innerText = "Total: ₹" + total;
}

// INITIAL CALL
render();

let products = [
    { name: "iPhone", category: "mobile" },
    { name: "Samsung Galaxy", category: "mobile" },
    { name: "Dell Laptop", category: "laptop" },
    { name: "HP Laptop", category: "laptop" },
    { name: "Boat Headphones", category: "headphone" }
];

function display(list) {
    let container = document.getElementById("products");
    container.innerHTML = "";

    list.forEach(p => {
        let div = document.createElement("div");
        div.className = "product";
        div.innerText = p.name;
        container.appendChild(div);
    });
}

function filterProducts() {
    let value = document.getElementById("filter").value;

    if (value === "all") {
        display(products);
    } else {
        let filtered = products.filter(p => p.category === value);
        display(filtered);
    }
}

// initial load
display(products);

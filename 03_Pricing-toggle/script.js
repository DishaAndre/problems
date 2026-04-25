let yearly = false;

document.getElementById("toggle").onclick = function () {

    yearly = !yearly;

    if (yearly) {
        document.getElementById("basic").innerText = "₹1000 / year";
        document.getElementById("pro").innerText = "₹2000 / year";
        this.innerText = "Switch to Monthly";
    } else {
        document.getElementById("basic").innerText = "₹100 / month";
        document.getElementById("pro").innerText = "₹200 / month";
        this.innerText = "Switch to Yearly";
    }

};

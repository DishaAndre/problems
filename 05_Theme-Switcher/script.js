// Button click event
document.getElementById("toggle").onclick = function () {
    toggleTheme();
};

// Function to toggle theme
function toggleTheme() {
    document.body.classList.toggle("dark");

    // Save theme
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

// Load saved theme on page refresh
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

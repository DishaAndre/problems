// DAYS
let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// TEMPERATURE DATA
let temp = [30, 32, 28, 35, 33, 31, 29];

// RAIN DATA
let rain = [10, 20, 5, 15, 25, 10, 5];

// SUMMARY DATA
let summary = [4, 2, 1]; // Sunny, Rainy, Cloudy

// 🌡️ LINE CHART (Temperature)
new Chart(document.getElementById("lineChart"), {
    type: "line",
    data: {
        labels: days,
        datasets: [{
            label: "Temperature (°C)",
            data: temp,
            borderColor: "red",
            fill: false
        }]
    }
});

// 🌧️ BAR CHART (Rainfall)
new Chart(document.getElementById("barChart"), {
    type: "bar",
    data: {
        labels: days,
        datasets: [{
            label: "Rainfall",
            data: rain,
            backgroundColor: "blue"
        }]
    }
});

// ☁️ PIE CHART (Weather Type)
new Chart(document.getElementById("pieChart"), {
    type: "pie",
    data: {
        labels: ["Sunny", "Rainy", "Cloudy"],
        datasets: [{
            data: summary,
            backgroundColor: ["orange", "blue", "gray"]
        }]
    }
});

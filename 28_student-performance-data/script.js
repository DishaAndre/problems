// 📊 MARKS (Bar Chart)
new Chart(document.getElementById("barChart"), {
    type: "bar",
    data: {
        labels: ["Maths", "DSA", "DBMS", "OS"],
        datasets: [{
            label: "Marks",
            data: [85, 78, 90, 88],
            backgroundColor: ["red", "blue", "green", "orange"]
        }]
    }
});

// 📌 ATTENDANCE (Pie Chart)
new Chart(document.getElementById("pieChart"), {
    type: "pie",
    data: {
        labels: ["Present", "Absent"],
        datasets: [{
            data: [85, 15],
            backgroundColor: ["green", "red"]
        }]
    }
});

// 📈 PROGRESS (Line Chart)
new Chart(document.getElementById("lineChart"), {
    type: "line",
    data: {
        labels: ["Test1", "Test2", "Test3", "Test4"],
        datasets: [{
            label: "Progress",
            data: [70, 75, 85, 90],
            borderColor: "purple",
            fill: false
        }]
    }
});

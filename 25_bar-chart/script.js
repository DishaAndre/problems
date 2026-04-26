let ctx = document.getElementById("myChart");

new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["CSE", "IT", "ENTC", "MECH"],
        datasets: [{
            label: "Students",
            data: [80, 60, 40, 70],
            backgroundColor: ["red", "blue", "green", "orange"]
        }]
    }
});

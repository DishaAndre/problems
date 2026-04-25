document.getElementById("search").oninput = function(){
    let val = this.value.toLowerCase();
    let rows = document.querySelectorAll("table tr");

    rows.forEach(function(row, index){
        if(index === 0) return;

        if(row.innerText.toLowerCase().includes(val)){
            row.style.display = "";
        } else{
            row.style.display = "none";
        }
    });
};

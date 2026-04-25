document.getElementById("name").oninput = function() {
    document.getElementById("pname").innerText = this.value;
};

document.getElementById("email").oninput = function() {
    document.getElementById("pemail").innerText = this.value;
};

document.getElementById("role").oninput = function() {
    document.getElementById("prole").innerText = this.value;
};  

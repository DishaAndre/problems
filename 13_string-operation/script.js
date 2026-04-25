function processString() {

    let str = document.getElementById("textInput").value;
    let choice = document.getElementById("operation").value;

    if (str === "") {
        document.getElementById("output").innerHTML = "Please enter a string";
        return;
    }

    let result = "";

    if (choice === "reverse") {
        result = str.split("").reverse().join("");
    } 
    else if (choice === "upper") {
        result = str.toUpperCase();
    } 
    else if (choice === "lower") {
        result = str.toLowerCase();
    } 
    else if (choice === "length") {
        result = str.length;
    }

    document.getElementById("output").innerHTML =
        "Result: " + result;
}

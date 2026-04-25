document.querySelectorAll(".question").forEach(function(q) {

    q.onclick = function() {

        let ans = this.nextElementSibling;

        if (ans.style.display === "block") {
            ans.style.display = "none";
        } else {
            ans.style.display = "block";
        }

    };

});

let dragged;

document.querySelectorAll("li").forEach(function(item) {

    item.ondragstart = function() {
        dragged = this;
    };

    item.ondragover = function(e) {
        e.preventDefault();
    };

    item.ondrop = function() {
        this.parentNode.insertBefore(dragged, this);
    };

});

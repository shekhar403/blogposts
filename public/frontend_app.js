document.querySelectorAll(".carousel-item").forEach(function(element) {
    element.addEventListener("click", function(e) {
        window.open(this.id);
    })
})
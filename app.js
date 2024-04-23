document.addEventListener("DOMContentLoaded", function() {
    var container = document.querySelector('.container');
    var card = document.querySelector('.card');

    container.addEventListener("click", function() {
        if (card.style.top === "" || card.style.top === "0px") {
            card.style.transition = "top 0.5s";
            card.style.top = "-90px";
        } else {
            card.style.transition = "top 0.5s";
            card.style.top = "0px";
        }
    });
});
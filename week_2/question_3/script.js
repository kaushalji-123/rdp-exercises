document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector(".button_dropdown");
    const dropdown = document.querySelector(".dropdown-content");

    button.addEventListener("click", function() {
        dropdown.classList.toggle("active");
    });
});
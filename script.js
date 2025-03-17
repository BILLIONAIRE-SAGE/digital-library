document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById("clickMe");

    button.addEventListener("click", function () {
        alert("Hello, welcome to BITS Library!");
    });
});

document.getElementById("searchBtn").addEventListener("click", function() {
    let searchQuery = document.getElementById("searchInput").value.trim();
    
    if (searchQuery !== "") {
        window.location.href = `books.html?search=${encodeURIComponent(searchQuery)}`;
    } else {
        alert("Please enter a book name!");
    }
});

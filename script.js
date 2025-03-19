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


document.addEventListener("DOMContentLoaded", function () {
    const books = [
        { title: "Introduction to AI", file: "book1.pdf", description: "A beginner-friendly introduction to Artificial Intelligence." },
        { title: "Machine Learning Basics", file: "book2.pdf", description: "Learn the fundamentals of Machine Learning and its applications." }
    ];

    const bookList = document.getElementById("book-list");

    books.forEach((book, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<a href="book-details.html?id=${index}">${book.title}</a>`;
        bookList.appendChild(listItem);
    });
});

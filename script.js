document.addEventListener("DOMContentLoaded", function () {
    // Search Functionality
    document.getElementById("searchBtn").addEventListener("click", function () {
        const searchQuery = document.getElementById("searchInput").value.trim();
        if (searchQuery !== "") {
            window.location.href = `books.html?search=${encodeURIComponent(searchQuery)}`;
        } else {
            alert("Please enter a book name!");
        }
    });

    // Books Data
    const books = [
        { 
            title: "Core PHP Programming (3rd Edition)", 
            file: "books/PHPprogramming.pdf", 
            description: "Updated for PHP 5, covering object-oriented programming and design patterns.", 
            image: "images/PHPProgramming.jpg" 
        },
        { 
            title: "Programming Language - Maurizio Gabbrielli", 
            file: "books/ProgrammingLanguage.pdf", 
            description: "Covers imperative, object-oriented, functional, and concurrent programming paradigms.", 
            image: "images/ProgrammingLanguage.jpg" 
        },
        { 
            title: "Math_for_Programming_Early_Access_-_Ronald_T_Kneusel", 
            file: "book/Math_for_Programming_Early_Access_-_Ronald_T_Kneusel.pdf", 
            description: "Learn all of the core mathematical topics that professional software engineers need to know–in a single book!This book summarizes all the core mathematical topics a typical professional software engineer needs to know.", 
            image: "images/mathProgramming.jpg" 
        },
        { 
            title: "Core_Python_Programming_-_Wesley_J_Chun", 
            file: "books/pythonprogramming.pdf", 
            description: "Praise for Core Python Programming “The long-awaited second edition of Wesley Chun’s Core Python Programming proves to be well worth the wait–its deep and broad coverage and useful exercises will help readers learn and practice good Python.” –Alex Martelli, author of Python in a Nutshell and editor of Python Cookbook “There has been lot of good buzz around Wesley Chun’s Core Python Programming. It turns out that all the buzz is well earned. I think this is the best book currently available for learning Python..", 
            image: "images/corepython.jpg" 
        }
    ];

    // Populating Books List on Books Page
    const bookList = document.getElementById("book-list");
    if (bookList) {
        books.forEach((book, index) => {
            const bookItem = document.createElement("div");
            bookItem.classList.add("book-item");
            bookItem.innerHTML = `
                <img src="${book.image}" alt="${book.title}">
                <h3><a href="book-details.html?id=${index}">${book.title}</a></h3>
            `;
            bookList.appendChild(bookItem);
        });
    }

    // Handling Book Details Page
    const bookTitle = document.getElementById("book-title");
    const bookDescription = document.getElementById("book-description");
    const bookImage = document.getElementById("book-image");
    const downloadBtn = document.getElementById("download-btn");

    const urlParams = new URLSearchParams(window.location.search);
    const bookId = urlParams.get("id");

    if (bookId !== null && books[bookId]) {
        const selectedBook = books[bookId];
        bookTitle.textContent = selectedBook.title;
        bookDescription.textContent = selectedBook.description;
        bookImage.src = selectedBook.image;
        bookImage.alt = selectedBook.title;
        downloadBtn.href = selectedBook.file;
    } else if (bookTitle) {
        document.querySelector(".book-details").innerHTML = "<p>Book not found.</p>";
    }
});


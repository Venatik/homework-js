let book = {
    title: "",
    author: "",
    read: false,
    current: false,
    displayBookInfo: function() {
        let bookInfo = document.getElementById("bookInfo");

        if (this.current) {
            bookInfo.innerHTML = `You are currently reading ${this.title} by ${this.author}.`;
        } else if (this.read) {
            bookInfo.innerHTML = `${this.title} by ${this.author} has been read!`;
        } else {
            bookInfo.innerHTML = `You still need to read ${this.title} by ${this.author}.`;
        }
    }
};

let button = document.getElementById("submit");

button.addEventListener("click", function(event) {
    event.preventDefault();

    book.title = document.getElementById("bookTitle").value;
    book.author = document.getElementById("bookAuthor").value;
    book.read = document.getElementById("bookRead").checked;
    book.current = document.getElementById("bookCurrent").checked;
    book.displayBookInfo();

    document.getElementById("bookTitle").value = "";
    document.getElementById("bookAuthor").value = "";
    document.getElementById("bookRead").checked = false;
    document.getElementById("bookCurrent").checked = false;
});
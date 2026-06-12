function addBook() {
  let bookName = document.getElementById("bookName").value;
  let price = document.getElementById("price").value;

  if (bookName === "" || price === "") {
    alert("Please enter book name and price");
    return;
  }

  let books = JSON.parse(localStorage.getItem("books")) || [];

  books.push({
    name: bookName,
    price: price
  });

  localStorage.setItem("books", JSON.stringify(books));

  document.getElementById("bookName").value = "";
  document.getElementById("price").value = "";

  showBooks();
}

function showBooks() {
  let books = JSON.parse(localStorage.getItem("books")) || [];
  let list = document.getElementById("list");

  list.innerHTML = "";

  books.forEach((book) => {
    list.innerHTML += `
      <div class="item">
        📘 ${book.name} - ₹${book.price}
      </div>
    `;
  });
}

// page load
showBooks();
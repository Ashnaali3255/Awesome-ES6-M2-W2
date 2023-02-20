// // Add a book to the collection
//  const addBook = () => {
//     const addBookForm = document.getElementById('book-details');
//   const title = document.querySelector('#title').value;
//   const author = document.querySelector('#author').value;
//   books.push({
//     index: books.length,
//     title,
//     author,
//   });
//   saveBooks();
//   displayBooks();
//   addBookForm.reset(); 
// };
export default class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
  }

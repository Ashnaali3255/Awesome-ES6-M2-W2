// // Load books from local storage
//  const loadBooks = () => {
//     const storedBooks = JSON.parse(localStorage.getItem('books'));
//     if (storedBooks) {
//       /* eslint-disable no-const-assign */
//       /* eslint-disable no-undef */
//       books = storedBooks;
//     }
//   };
export default class Store {
  static getBooks = () => {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook = (book) => {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook = (title) => {
    const books = Store.getBooks();
    books.forEach((book, index) => {
      if (book.title === title) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }
}
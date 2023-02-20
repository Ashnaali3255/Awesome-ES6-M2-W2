// // Display books in the collection
// const displayBooks = () => {
//     const bookCollection = document.querySelector('#book-collection');
//     bookCollection.innerHTML = '';
  
//     books.forEach((book) => {
//       const bookEl = document.createElement('div');
//       bookEl.classList.add('book');
//       bookEl.innerHTML = `
//         <span>${book.title} <br> ${book.author}</span>
//         <button data-index="${book.index}">Remove</button>
//       `;
//       bookCollection.appendChild(bookEl);
//     });
//   };
import Store from './store_class.js';

export default class UI {
  static displayBooks = () => {
    const books = Store.getBooks();
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList = (book) => {
    const list = document.querySelector('.table-body');

    const row = document.createElement('tr');

    row.innerHTML = `
         <td><p>${book.title}</p></td>
         <td class= "td-by"><p>By ${book.author}</p></td>
         <td><a href="#" class="btn delete">Remove</a></td>
          `;

    list.appendChild(row);
  }

  static deleteBook = (elem) => {
    if (elem.classList.contains('delete')) {
      elem.parentElement.parentElement.remove();
    }
  }

  static clearFields = () => {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}
// import {loadBooks} from './modules/load_books.js';
// import {displayBooks} from './modules/display_books.js';
// import {addBook} from './modules/add_books.js';
// import { DateTime } from './modules/date_time.js';

// // Collection of books
// let books = [];
 
// // Save books to local storage
// const saveBooks = () => {
//   localStorage.setItem('books', JSON.stringify(books));
// };

// // Remove a book from the collection
// const removeBook = (index) => {
//   books = books.filter((book) => book.index !== index);
//   saveBooks();
//   displayBooks();
// };

// // Handle "Add" button click
// document.querySelector('#add-book').addEventListener('click', addBook);

// // Handle "Remove" button click
// document
//   .querySelector('#book-collection')
//   .addEventListener('click', (event) => {
//     if (event.target.tagName === 'BUTTON') {
//       removeBook(parseInt(event.target.dataset.index, 10));
//     }
//   });

// document.addEventListener('DOMContentLoaded', () => {
//   loadBooks();
//   displayBooks();
// });

// // Date and time
// const dateNow = document.querySelector('.date');

// const date = DateTime.local();
// const newDate = date.toLocaleString({
//   month: 'long',
//   day: 'numeric',
//   year: 'numeric',
// });

// const newTime = date.toLocaleString(DateTime.TIME_WITH_SECONDS);
// dateNow.innerHTML = `
//     <p>${newDate} &nbsp ${newTime}</p>
//   `;

// //---------------- script.js-------------------//

// class BookCollection {
//     constructor() {
//       this.books = JSON.parse(localStorage.getItem('books')) || [];
//       this.addBook = this.addBook.bind(this);
//       this.removeBook = this.removeBook.bind(this);
//     }
  
//     addBook() {
//       const title = document.getElementById('title').value;
//       const author = document.getElementById('author').value;
//       if (title && author) {
//         this.books.push({ title, author });
//         localStorage.setItem('books', JSON.stringify(this.books));
//         this.displayBooks();
//         document.getElementById('title').value = '';
//         document.getElementById('author').value = '';
//       }
//     }
  
//     removeBook(index) {
//       this.books.splice(index, 1);
//       localStorage.setItem('books', JSON.stringify(this.books));
//       this.displayBooks();
//     }
  
//     displayBooks() {
//       const bookList = document.getElementById('books');
//       bookList.innerHTML = '';
//       this.books.forEach((book, index) => {
//         const li = document.createElement('li');
//         const h3 = document.createElement('h3');
//         const removeButton = document.createElement('button');
//         h3.textContent = `${book.title} by ${book.author}`;
//         removeButton.textContent = 'Remove';
//         removeButton.addEventListener('click', () => this.removeBook(index));
//         li.classList.add('book-item');
//         li.appendChild(h3);
//         li.appendChild(removeButton);
//         bookList.appendChild(li);
//       });
//     }
//   }
  
//   const bookCollection = new BookCollection();
//   document
//     .getElementById('add-button')
//     .addEventListener('click', bookCollection.addBook);
//   bookCollection.displayBooks();

// //---------validation.js -----------//

// // Get the navigation links and content sections
// const links = document.querySelectorAll('.nav a');
// const sections = document.querySelectorAll('section');

// // Add click event listeners to the navigation links
// links.forEach((link) => {
//   link.addEventListener('click', () => {
//     // Remove the "active" class from all links
//     links.forEach((link) => link.classList.remove('active'));

//     // Add the "active" class to the clicked link
//     link.classList.add('active');

//     // Hide all sections
//     /* eslint-disable no-return-assign */
//     sections.forEach((section) => section.style.display = 'none');

//     // Show the section with the corresponding ID
//     const sectionId = link.getAttribute('href').slice(1);
//     document.getElementById(sectionId).style.display = 'block';
//   });
// });

// // Show the first section by default
// links[0].click();

import Book from './modules/add_books.js';
import UI from './modules/display_books.js';
import Store from './modules/load_books.js';
import { DateTime } from './modules/date_time.js';

document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a Book
document.getElementById('book-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const id = Date.now();

  // Instatiate book
  const book = new Book(title, author, id);

  // Add Book to UI
  UI.addBookToList(book);

  // Add book to store
  Store.addBook(book);

  // Clear fields
  UI.clearFields();
});

// Event: Remove a Book from UI
document.querySelector('.table-body').addEventListener('click', (e) => {
  UI.deleteBook(e.target);

  // Remove book from the local storage
  Store.removeBook(e.target
    .parentElement.previousElementSibling
    .previousElementSibling.textContent);
});

// Date and time
const dateNow = document.querySelector('.date');

const date = DateTime.local();
const newDate = date.toLocaleString({
  month: 'long',
  day: 'numeric',
  year: 'numeric',
});

const newTime = date.toLocaleString(DateTime.TIME_WITH_SECONDS);
dateNow.innerHTML = `
    <p>${newDate} &nbsp ${newTime}</p>
  `;

// Complete website
const list = document.querySelector('.list');
const addNew = document.querySelector('.add-new');
const contact = document.querySelector('.contact');

const allBooks = document.getElementById('all-books');
const addBook = document.getElementById('add-book');
const contactCont = document.getElementById('contact-cont');

// Display and hide sections
list.addEventListener('click', () => {
  list.style.color = 'brown';
  addNew.style.color = 'black';
  contact.style.color = 'black';

  allBooks.style.display = 'flex';
  addBook.style.display = 'none';
  contactCont.style.display = 'none';
});

addNew.addEventListener('click', () => {
  list.style.color = 'black';
  addNew.style.color = 'brown';
  contact.style.color = 'black';

  allBooks.style.display = 'none';
  addBook.style.display = 'flex';
  contactCont.style.display = 'none';
});

contact.addEventListener('click', () => {
  list.style.color = 'black';
  addNew.style.color = 'black';
  contact.style.color = 'brown';

  allBooks.style.display = 'none';
  addBook.style.display = 'none';
  contactCont.style.display = 'flex';
});
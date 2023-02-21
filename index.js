import BookCollection from './modules/book.js';
import { DateTime } from './modules/luxon.js';

const bookCollection = new BookCollection();
document
  .getElementById('add-button')
  .addEventListener('click', bookCollection.addBook);
bookCollection.displayBooks();

const now = DateTime.now();
const date = now.toLocaleString(DateTime.DATETIME_FULL);

document.getElementById('date').textContent = date;
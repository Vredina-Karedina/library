"Use strict"

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.addBookToLibrary = function() {
  myLibrary.push(this);
}
  
new Book('Dandelion Wine', 'Ray Bradbury', 281, 'read').addBookToLibrary();
new Book('The Help', 'Kathryn Stockett', 544, 'read').addBookToLibrary();

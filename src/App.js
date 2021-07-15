import 'bootstrap/dist/css/bootstrap.css';

import './App.css';
import { Component } from 'react';

import BookTable from './components/BookTable';
import AddBook from './components/AddBook';


class App extends Component {
  constructor(props) {
    super(props);

    let storedBooks = localStorage.getItem('books') ? localStorage.getItem('books') : '[]';
    const books = JSON.parse(storedBooks)

    this.state = { books: books };

    // this.state = {
    //   author: []
    // };

    // this.state = {
    //   isbn: []
    // };

  }

  onBookCreated(book) {
    this.state.books.push(book);
    this.saveBooks(this.state.books);
  }

  onBookRemoved(bookId) {
    const updatedBooks = this.state.books.filter(book => book.id !== bookId);
    this.saveBooks(updatedBooks);
  }

  saveBooks(booksArr) {
    this.setState({ books: booksArr }); 
    localStorage.setItem('books', JSON.stringify(booksArr));
  }

  // onAuthorCreated(author) {
  //   this.state.author.push(author);
  //   this.setState({
  //     author: this.state.author
  //   });
  // }

  render() {
    return (
      <div className="container card mt-4 p-4">
        <div>
          <h1>Add Book</h1>
        </div>

        <hr />

        <AddBook
          createBook={(book) => this.onBookCreated(book)}
        />

        {/* createAuthor={(author) => this.onAuthorCreated(author)} */}

        <BookTable
          books={this.state.books}
          bookRemoved={(bookId) => this.onBookRemoved(bookId)}
        />

      </div>
    );
  }
}

export default App;

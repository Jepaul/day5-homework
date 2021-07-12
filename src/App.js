import 'bootstrap/dist/css/bootstrap.css';

import './App.css';
import { Component } from 'react';

import BookTable from './components/BookTable';
import AddBook from './components/AddBook';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      books: []
    };

    this.state = {
      author: []
    };

    this.state = {
      isbn: []
    };

  }

  onBookCreated(book) {
    this.state.books.push(book);
    this.setState({
      books: this.state.books
    });

  onAuthorCreated(author); {
    this.state.author.push(author);
    this.setState({
      author: this.state.author
    });

  }

  render(); {
    return (
      <div className="container card mt-4 p-4">
        <div>
          <h1>Add Book</h1>
        </div>

        <hr />

        <AddBook 
          createBook={(book) => this.onBookCreated(book)} 
          createAuthor={(author) => this.onAuthorCreated(author)}
        />

        <BookTable />

      </div>
    );
  }

}

export default App;

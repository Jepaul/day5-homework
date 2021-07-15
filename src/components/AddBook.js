import React, { Component } from 'react'
import Book from '../models/Book';

export default class AddBook extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            author: '',
            isbn: ''
        };
    }

    onAddBook() {
        const book = new Book(this.state.name, this.state.author, this.state.isbn);
        this.props.createBook(book);
        this.setState({ name: '', author: '', isbn: '' })
    }

    // onAddAuthor() {
    //     const author = new Author(this.state.name, false);
    //     this.props.createAuthor(author);
    //     this.setState({ name: ''})
    // }

    // onAddIsbn() {
    //     const isbn = new Isbn(this.state.name, false);
    //     this.props.createIsbn(isbn);
    //     this.setState({ name: ''})
    // }

    onInputChanged(e) {
        console.log(e);
        this.setState({ name: e.target.value })
    }

    render() {
        return (
            <div className="mt-3">
                <form>
                    <div className="input-group mb-3">
                        <input
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })}
                            type="text"
                            className="form-control"
                            placeholder="Book Title" />
                    </div>
                    <div className="input-group mb-3">
                        <input
                            value={this.state.author}
                            onChange={(e) => this.setState({ author: e.target.value })}
                            type="text"
                            className="form-control"
                            placeholder="Author" />
                    </div>
                    <div className="input-group mb-3">
                        <input
                            value={this.state.isbn}
                            onChange={(e) => this.setState({ isbn: e.target.value })}
                            type="text"
                            className="form-control"
                            placeholder="ISBN" />
                    </div>
                    <div className="mb-4">
                        <button onClick={() => this.onAddBook()}
                            className="btn btn-outline-primary"
                            type="button">
                            Submit
                        </button>
                    </div>
                </form>
            </div>

        )
    }
}
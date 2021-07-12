import React, { Component } from 'react'
import Book from '../models/Book';

export default class AddBook extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: ''
        };
    }

    onAddBook() {
        const book = new Book(this.state.name, false);
        this.props.createBook(book);
        this.setState({ name: ''})
    }

    onAddAuthor() {
        const author = new Author(this.state.name, false);
        this.props.createAuthor(author);
        this.setState({ name: ''})
    }

    onAddIsbn() {
        const isbn = new Isbn(this.state.name, false);
        this.props.createIsbn(isbn);
        this.setState({ name: ''})
    }

    onInputChanged(e) {
        console.log(e);
        this.setState({ name: e.target.value})
    }

    render() {
        return (
            <div className="mt-3">
                <div className="input-group mb-3">
                    <input 
                        value={this.state.name}
                        onChange={(e) => this.setState({ name: e.target.value})}
                        type="text" 
                        className="form-control" 
                        placeholder="Book Title"/>
                    <button onClick={() =>this.onAddBook()}
                        className="btn btn-outline-secondary" type="button">+</button>
                </div>
                <div className="input-group mb-3">
                    <input 
                        value={this.state.name}
                        onChange={(e) => this.setState({ name: e.target.value})}
                        type="text" 
                        className="form-control" 
                        placeholder="Author"/>
                    <button onClick={() =>this.onAddBook()}
                        className="btn btn-outline-secondary" type="button">+</button>
                </div>
                <div className="input-group mb-3">
                    <input 
                        value={this.state.name}
                        onChange={(e) => this.setState({ name: e.target.value})}
                        type="text" 
                        className="form-control" 
                        placeholder="ISBN"/>
                    <button onClick={() =>this.onAddBook()}
                        className="btn btn-outline-secondary" type="button">+</button>
                </div>
            </div>
            
        )
    }
}
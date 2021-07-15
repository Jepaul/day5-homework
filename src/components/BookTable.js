import React, { Component } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './BookTable.css';

export default class BookTable extends Component {
    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th >Title</th>
                            <th >Author</th>
                            <th >ISBN</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.books.map(book => {
                                return <tr key={book.id}>
                                    <td>{book.name}</td>
                                    <td>{book.author}</td>
                                    <td>{book.isbn}</td>
                                    <td>
                                        <i className="bi bi-trash pointer" onClick={() => this.props.bookRemoved(book.id)}></i>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
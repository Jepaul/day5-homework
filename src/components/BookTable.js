import React, { Component } from 'react'

export default class BookTable extends Component {
    render() {
        return (
            <div>
                <table>
                <table className="table">
                    <thead>
                        <tr>
                        <th >Title</th>
                        <th >Author</th>
                        <th >ISBN</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                        </tr> */}
                    </tbody>
                    </table>
                </table>
            </div>
        )
    }
}
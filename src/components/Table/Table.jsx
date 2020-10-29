import React, { Component } from 'react';
import "./table.css"

class Table extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <table className="table table-dark" data={this.props.data}>
                    <thead>
                        <tr>
                        <th scope="col">Employee Id</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Email</th>
                        <th scope="col">Picture</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.employees.map((employee)=>(
                            <tr>
                                <th>{employee.id.value ? employee.id.value : "N/A"}</th>
                                <th>{employee.name.first}</th>
                                <th>{employee.name.last}</th>
                                <th>{employee.email}</th>
                                <th><img src={employee.picture.thumbnail} alt="employee photo"/></th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;
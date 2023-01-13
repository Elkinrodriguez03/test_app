import React from "react";
import { Button } from "react-bootstrap";
import Table from 'react-bootstrap/Table';

export default function List({ employees, handleEdit, handleDelete }) {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimunFractionDigits: null
    });

    return (
        <div>
            <Table striped>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Salary</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th colSpan={2} className="text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {employees.length > 0 ? (
                        employees.map((employee, i) => (
                            <tr key={employee.id}>
                                <td>{i + 1}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{formatter.format(employee.salary)}</td>
                                <td>{employee.date} </td>
                                <td>{employee.status}</td>
                            <div className="d-flex justify-content-center">
                                <td>
                                    <Button
                                        className="me-1"
                                        variant="outline-primary"
                                        onClick={() => handleEdit(employee.id)}
                                    >
                                        Edit
                                    </Button>
                                </td>
                                <td>
                                    <Button
                                        className="ms-1"
                                        variant="outline-secondary"
                                        onClick={() => handleDelete(employee.id)}
                                    >
                                        Delete
                                    </Button>
                                </td>

                            </div>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}>No Employees</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}
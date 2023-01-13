import React, { useState } from 'react'
import Swal from 'sweetalert2';
import { Button, Form } from "react-bootstrap";

export default function Edit({ employees, selectedEmployee, setEmployees, setIsEditing }) {

    const id = selectedEmployee.id;

    const [firstName, setFirstName] = useState(selectedEmployee.firstName);
    const [lastName, setLastName] = useState(selectedEmployee.lastName);
    const [salary, setSalary] = useState(selectedEmployee.salary);
    const [date, setDate] = useState(selectedEmployee.date);
    const [status, setStatus] = useState(selectedEmployee.status);

    const handleUpdate = e => {
        e.preventDefault();

        if (!firstName || !lastName || !salary || !date || !status) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const employee = {
            id,
            firstName,
            lastName,
            salary,
            date,
            status
        };

        for (let i = 0; i < employees.length; i++) {
            if (employees[i].id === id) {
                employees.splice(i, 1, employee);
                break;
            }
        }

        setEmployees(employees);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${employee.firstName} ${employee.lastName}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    const handleStatus = (selectedStatus) => {
        console.log(selectedStatus);
        if (selectedStatus == true) {
            setStatus('Active')
        } else {
            setStatus('Inactive')
        }
    };

    return (
        <div className="container mt-5 col-12">
            <Form onSubmit={handleUpdate}>
                <h1>Edit Employee</h1>
                <Form.Label htmlFor="firstName">First Name</Form.Label>
                <Form.Control
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <Form.Label htmlFor="lastName">Last Name</Form.Label>
                <Form.Control
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
                <Form.Label htmlFor="salary">Salary ($)</Form.Label>
                <Form.Control
                    id="salary"
                    type="number"
                    name="salary"
                    value={salary}
                    onChange={e => setSalary(e.target.value)}
                />
                <Form.Label htmlFor="date">Date</Form.Label>
                <Form.Control
                    id="date"
                    type="date"
                    name="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />
                <Form.Label htmlFor="date">Status</Form.Label>
                <Form.Check 
                    type="checkbox"
                    id="activeCheckbox"
                    label="Active"
                    checked={status == "Active" ? true : false}
                    onClick={e => handleStatus(e.target.checked)}
                />

                {/* <Form.Check
                    type="checkbox"
                    id="disableCheckbox"
                    label="Disabled"
                    onClick={e => setStatus("Disabled")}
                /> */}

                <div style={{ marginTop: '30px' }}>
                    <Button type="submit" value="Update">Update</Button>
                    <Button
                        variant="outline-primary"
                        style={{ marginLeft: '12px' }}
                        className="button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditing(false)}
                    >
                        Cancel
                    </Button>
                </div>
            </Form>
        </div>
    );
}
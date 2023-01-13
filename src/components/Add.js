import React, { useState, useRef, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import Alert from 'react-bootstrap/Alert';  
import Swal from 'sweetalert2';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Add({ employees, setEmployees, setIsAdding }) {
    const [id, setId] = useState(0);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [salary, setSalary] = useState(0);
    const [date, setDate] = useState('');
    const [status, setStatus] = useState('');

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const createTech = async () => {
        const data = {
            id: id,
            firstName: firstName,
            lastName: lastName,
            salary: salary,
            date: date,
            status: status
        }
        const response = await fetch("http://localhost:8080/api/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const message = await response.json();
        console.log(message);
    } 

    return (
        <div className="container mt-5 col-12">

            <Form className="row" onSubmit={createTech}>
                <h1>Add Employee</h1>
                <Form.Label htmlFor="identification">Identification</Form.Label>
                <Form.Control
                    id="id"
                    type="text"
                    ref={textInput}
                    name="identification"
                    value={id}
                    onChange={e => setId(e.target.value)}
                />
                <Form.Label htmlFor="firstName">First Name</Form.Label>
                <Form.Control
                    id="firstName"
                    type="text"
                    ref={textInput}
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
                <Form.Control
                    id="status"
                    type="status"
                    name="status"
                    value={status}
                    onChange={e => setStatus(e.target.value)}
                />
                <div style={{ marginTop: '30px' }}>
                    <Button type="submit" value="Add">Submit</Button>
                    <Button
                        variant="outline-primary"
                        style={{ marginLeft: '12px' }}
                        className="button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsAdding(false)}
                    >
                        Cancel
                    </Button>
                </div>
            </Form>
        </div>
    );
}
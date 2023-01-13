import React from "react";
import { Button } from "react-bootstrap";

export default function Header({ setIsAdding }) {
    return (
        <header>
            <h1>Technician Management App</h1>
            <div>
                <Button onClick={() => setIsAdding(true)}>Add Button</Button>
            </div>
        </header>
    )
}
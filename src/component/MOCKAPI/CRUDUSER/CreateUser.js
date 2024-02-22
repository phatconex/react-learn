import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";

const CreateUser = () => {
    const [form, setForm] = useState({
        name: "",
        math: "",
        physical: "",
        chemisty: "",
    });
    const handleInput = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };
    const handleAddStudent = async (e) => {
        e.preventDefault();
        const result = await axios.post("https://65c0605225a83926ab96374d.mockapi.io/user", form);
        if (result.status == 201) {
            alert("Create student sucessfully");
        }
    };
    return (
        <Container>
            <Form onSubmit={handleAddStudent}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" onChange={handleInput} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Math</Form.Label>
                    <Form.Control type="text" name="math" onChange={handleInput} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Physical</Form.Label>
                    <Form.Control type="text" name="physical" onChange={handleInput} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Chemisty</Form.Label>
                    <Form.Control type="text" name="chemisty" onChange={handleInput} />
                </Form.Group>
                <Button variant="success" type="submit">
                    ADD STUDENT
                </Button>
            </Form>
        </Container>
    );
};

export default CreateUser;

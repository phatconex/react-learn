import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UpdateUser = () => {
    const { id } = useParams();
    const navagate = useNavigate();
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
    useEffect(() => {
        const fetchOneStudent = async () => {
            const result = await axios.get("https://65c0605225a83926ab96374d.mockapi.io/user/" + id);
            setForm(result.data);
        };
        fetchOneStudent();
    }, []);
    const handleEditStudent = async (e) => {
        e.preventDefault();
        const result = await axios.put("https://65c0605225a83926ab96374d.mockapi.io/user/" + id, form);
        if (result.status == 200) {
            alert("Edit student sucessfully");
            navagate("/list");
        }
    };
    return (
        <Container>
            <Form onSubmit={handleEditStudent}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={form.name} name="name" onChange={handleInput} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Math</Form.Label>
                    <Form.Control type="text" value={form.math} name="math" onChange={handleInput} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Physical</Form.Label>
                    <Form.Control type="text" value={form.physical} name="physical" onChange={handleInput} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Chemisty</Form.Label>
                    <Form.Control type="text" value={form.chemisty} name="chemisty" onChange={handleInput} />
                </Form.Group>
                <Button variant="success" type="submit">
                    Edit STUDENT
                </Button>
            </Form>
        </Container>
    );
};

export default UpdateUser;

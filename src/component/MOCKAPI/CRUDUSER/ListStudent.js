import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import axios from "axios";
import { Link } from "react-router-dom";
const ListStudent = () => {
    const [student, setStudent] = useState([]);
    const fetchStudent = async () => {
        const result = await axios.get("https://65c0605225a83926ab96374d.mockapi.io/user");
        setStudent(result.data);
    };
    useEffect(() => {
        fetchStudent();
    }, []);
    const handleDelete = async (id) => {
        const result = await axios.delete("https://65c0605225a83926ab96374d.mockapi.io/user/" + id);
        if (result.status === 200) {
            fetchStudent();
            alert("Delete Student successed");
        }
    };
    return (
        <Container className="mt-5">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Fullname</th>
                        <th>Math</th>
                        <th>Physics</th>
                        <th>Chemistry</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {student &&
                        student.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.math}</td>
                                <td>{item.physical}</td>
                                <td>{item.chemisty}</td>
                                <td>
                                    <Button variant="danger" onClick={() => handleDelete(item.id)}>
                                        Delete
                                    </Button>
                                </td>
                                <td>
                                    <Link to={"/edit/" + item.id}>
                                        <Button variant="info">Edit</Button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default ListStudent;

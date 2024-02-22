import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link, Route, Routes } from "react-router-dom";
import CreateUser from "./CreateUser";
import ListStudent from "./ListStudent";
import UpdateUser from "./UpdateUser";

const CrudUser = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">Manage Student</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to={"/list"} className="nav-link">
                                List student
                            </Link>
                            <Link to={"/create"} className="nav-link">
                                Create student
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <h1 className="text-center my-5 fs-1 fw-5">CRUD STUDENT</h1>
            <Routes>
                <Route path="/list" element={<ListStudent />}></Route>
                <Route path="/create" element={<CreateUser />}></Route>
                <Route path="/edit/:id" element={<UpdateUser />}></Route>
            </Routes>
        </div>
    );
};

export default CrudUser;

import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "../App.css";

export const NavBar = () => (
    <Navbar className="navbar" fixed="top" expand="lg">
        <Navbar.Brand href="/">
            <span className="title">NearBlimp</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link className="link" href="/">Home</Nav.Link>
                <Nav.Link className="link" href="/about">About</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

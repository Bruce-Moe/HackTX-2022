import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "../App.css";
import "./NavBar.css"

export const NavBar = () => (
    <Navbar className="navbar" fixed="top" expand="lg">
        <Navbar.Brand href="/">
            <span className="title"><span className="sub">Near</span>Blimp</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link className="link" href="/">Home</Nav.Link>
                <Nav.Link className="link" href="/contracts">Contracts</Nav.Link>
                <Nav.Link className="link" href="/about">About</Nav.Link>
                <Nav.Link className="link" href="https://near.org/">Near</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

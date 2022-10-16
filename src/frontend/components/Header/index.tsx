import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import "./index.scss";

export const Header = () => (
    <Navbar className="navbar" fixed="top" expand="lg">
        <Navbar.Brand href="/">
            <i className="fa fa-plane">
                <span className="title">NearBlimp</span>
            </i>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link className="link" href="/">Home</Nav.Link>
                <Nav.Link className="link" href="/contracts">Contracts</Nav.Link>
                <Nav.Link className="link" href="/smartcontracts">Smart Contracts</Nav.Link>
                <Nav.Link className="link" href="/about">About</Nav.Link>
            </Nav>
            
        </Navbar.Collapse>

    </Navbar>
);
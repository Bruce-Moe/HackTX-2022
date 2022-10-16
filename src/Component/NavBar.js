import React, { useState } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "../App.css";
import "./NavBar.css";

export const NavBar = ({ stdContracts, auditedContracts }) => {
  const [contracts] = useState(stdContracts);
  return (
    <Navbar className="navbar" fixed="top" expand="lg">
      <Navbar.Brand href="/">
        <span className="title">
          <span className="sub">Near</span>Blimp
        </span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="link" href="/">
            Home
          </Nav.Link>
          <NavDropdown title="Standard Contracts" className="dropdown">
            {contracts.map(contract => {
              return (
                <NavDropdown.Item
                  href={`/std-contracts/${contract.id}`}
                >{`${contract.name}`}</NavDropdown.Item>
              );
            })}
          </NavDropdown>
          <NavDropdown className="dropdown" title="Audited Contracts"></NavDropdown>
          <Nav.Link className="link" href="/about">
            About
          </Nav.Link>
          <Nav.Link className="link" href="https://near.org/">
            Near
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

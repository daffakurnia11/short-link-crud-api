"use client";

import { Container, Nav, Navbar as BSNavbar } from "react-bootstrap";
import React from "react";

/**
 * Navigation bar layout for homepage layout
 * @returns Navbar Component
 */
export default function Navbar(): React.JSX.Element {
  return (
    <BSNavbar className="bg-body-tertiary" fixed="top">
      <Container>
        <BSNavbar.Brand href="/">Short Link App</BSNavbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link className="mx-3" href="/">
            Short Link List
          </Nav.Link>
          <Nav.Link className="mx-3" href="/create">
            Create Link
          </Nav.Link>
        </Nav>
      </Container>
    </BSNavbar>
  );
}

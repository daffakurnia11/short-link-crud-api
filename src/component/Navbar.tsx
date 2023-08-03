"use client";

import { Container, Nav, Navbar as BSNavbar } from "react-bootstrap";
import React from "react";
import Link from "next/link";

/**
 * Navigation bar layout for homepage layout
 * @returns Navbar Component
 */
export default function Navbar(): React.JSX.Element {
  return (
    <BSNavbar className="bg-body-tertiary" fixed="top">
      <Container>
        <BSNavbar.Brand>
          <Link href={"/"}>Short Link App</Link>
        </BSNavbar.Brand>
        <Nav className="ms-auto">
          <Nav className="mx-3">
            <Link href={"/"}>Short Link List</Link>
          </Nav>
          <Nav className="mx-3">
            <Link href={"/create"}>Create Link</Link>
          </Nav>
        </Nav>
      </Container>
    </BSNavbar>
  );
}

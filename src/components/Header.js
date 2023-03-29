import React from "react";
import { Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar
        bg="dark "
        variant="dark"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <Navbar.Brand>VamsiTodo</Navbar.Brand>
      </Navbar>
    </>
  );
};

export default Header;

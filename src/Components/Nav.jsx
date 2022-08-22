import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      {" "}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/" className="text-decoration-none">
            <Navbar.Brand>
              <img
                alt=""
                src="/logo192.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              doVocab.com
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </div>
  );
};

export default Nav;

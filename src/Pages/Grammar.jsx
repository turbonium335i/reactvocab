import React from "react";
import {
  Table,
  Card,
  Button,
  Col,
  Row,
  CardGroup,
  ProgressBar,
  Container,
  Navbar,
} from "react-bootstrap";

import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const Grammar = () => {
  return (
    <div>
      <Nav />

      <br />
      <Container>
        Grammar
        <ProgressBar
          variant="info"
          className="bg-danger"
          now={60}
          style={{ height: "5px" }}
        />
      </Container>
      <Footer />
    </div>
  );
};

export default Grammar;

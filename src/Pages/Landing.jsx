import React from "react";
import { Container } from "react-bootstrap";

import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import GroupExample from "../Components/GroupExample";

const Landing = () => {
  return (
    <div>
      <Nav />
      <br />
      <Container>
        <GroupExample />
        <h3>This is the Landing Page</h3>
      </Container>
      <Footer />
    </div>
  );
};

export default Landing;

import React from "react";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import Home from "./components/Home";

function App() {
  return (
    <Container>
      <Navbar />
      <Home />
      <HomeShape />
    </Container>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
`;

const HomeShape = styled.div`
  clip-path: polygon(65% 0, 100% 0%, 100% 100%, 40% 100%);
  background-color: crimson;
  z-index: -1;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

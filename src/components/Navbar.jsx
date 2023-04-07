import React from "react";
import styled from "styled-components";
const Navbar = () => {
  return (
    <Container>
      <Left>
        <Span>Agency</Span>
        <Nav>
          <Ul>
            <Li>Home</Li>
            <Li>Features</Li>
            <Li>Services</Li>
            <Li>Pricing</Li>
            <Li>Contact</Li>
          </Ul>
        </Nav>
      </Left>

      <Right>
        <Button>JOIN TODAY</Button>
      </Right>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  height: 50px;
  /* width: 100%; */
`;

const Left = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
`;

const Span = styled.span`
  font-size: 2rem;
  text-decoration: underline crimson 2px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2.5rem;
  list-style: none;
`;
const Li = styled.li`
  font-size: 1.2rem;
  color: gray;
`;

const Right = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: end;
  overflow: hidden;
`;

const Button = styled.button`
  outline: none;
  padding: 0.5rem 1rem;
  background-color: crimson;
  color: white;
  border: 1px solid white;
  border-radius: 0.5rem;
  cursor: pointer;
`;

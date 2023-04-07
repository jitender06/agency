import React from "react";
import woman from "../img/gg.png";
import styled from "styled-components";
const Home = () => {
  return (
    <Container>
      <Main>
        <Left>
          <H1>
            Adventures in <br /> creative age
          </H1>
          <Para>
            We believe that designing product and services in close partnership
            with our clients in the only way to have a real impact on their
            business
          </Para>
          <Detail>
            <Button>START A PROJECT</Button>
            <SpanDiv>
              <Span1>Call Us +6239318097</Span1> <br />
              <Span2>For Any Question or Concern</Span2>
            </SpanDiv>
          </Detail>
        </Left>
        <div className="right">
          <Img src={woman} alt="hero image" />
        </div>
      </Main>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: calc(100vh - 50px);
  padding-left: 60px;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const H1 = styled.h1`
  font-size: 4rem;
`;
const Para = styled.p`
  margin-top: 1rem;
  font-size: 20px;
  width: 70%;
  color: #565656;
`;

const Detail = styled.div`
  margin-top: 2rem;
  display: flex;

  gap: 3rem;
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: darkblue;
  border: white;
  border-radius: 10px;
  color: white;
  letter-spacing: 2px;
  cursor: pointer;
`;

const SpanDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const Span1 = styled.span`
  color: crimson;
`;

const Span2 = styled.span`
  color: gray;
`;

const Img = styled.img`
  width: 31.4rem;
`;

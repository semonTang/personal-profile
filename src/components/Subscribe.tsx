import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  border-radius: 55px;
  color: #121212;
  padding: 85px 125px;
  gap: 6rem;
  width: 80%;
  margin: -120px auto 0;
`;

const Title = styled.h3`
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 1.2em;
  color: black;
  flex: 1.4;
  font-size: 1.75rem;
`;

const EmailWrapper = styled.div`
  position: relative;
  flex: 2;
  display: flex;
  align-items: center;
  background: #fff;
  padding: 5px;
  border-radius: 20px;
  z-index: 0;
  gap: 2rem;
  border: 1px solid #aa367c;
  height: fit-content;
`;

const Input = styled.input`
  background: transparent;
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  padding: 18px 26px;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 0.8px;
  transition: 0.3s ease-in-out;
  outline: none;
  font-family: auto;
  z-index: 2;
  ::placeholder {
    color: black;
  }
`;

const Button = styled.button`
  font-weight: bold;
  background: linear-gradient(90.21deg, #aa367c -5.91%, #4a2fbd 111.58%);
  padding: 20px 65px;
  color: #fff;
  letter-spacing: 0.5px;
  border-radius: 18px;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

const Subscribe = () => {
  return (
    <Container>
      <Title>Subscribe to our Newsletter <br /> & Never miss latest updates</Title>
      <EmailWrapper>
        <Input placeholder="Email Address" />
        <Button>Submit</Button>
      </EmailWrapper>
    </Container>
  );
};

export default Subscribe;
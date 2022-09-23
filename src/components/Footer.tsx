import React from "react";
import styled from "styled-components";
import CommonSvg from "./CommonSvg";
import GithubSvg from "@/assets/svg/github-fill.svg";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 80px 7.5rem;
  ::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 10rem;
    height: 6rem;
    background: #4a2fbd;
    filter: blur(80px);
  }
`;

const Title = styled.h1`
  font-size: 60px;
`;

const RightWrapper = styled.div`
  
`;

const CopyrightText = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: #B8B8B8;
  letter-spacing: 0.5px;
  margin-top: 12px;
`;

const Footer = () => {
  return (
    <Container>
      <Title>LOGO</Title>
      <RightWrapper>
        <CommonSvg link="https://github.com/semonTang">
          <GithubSvg className="common_svg" />
        </CommonSvg>
        <CopyrightText>Copyright 2022. All Rights Reserved</CopyrightText>
      </RightWrapper>
    </Container>
  );
}

export default Footer;
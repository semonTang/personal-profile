import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  text-align: center;
  cursor: pointer;
  background: transparent;
  transition: all 0.3s ease-in-out;
  .common_svg {
    fill: white;
    width: 20px;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &:hover {
    background: white;
    transition: all 0.3s ease-in-out;
    .common_svg {
      fill: black;
    }
  }
`;

const CommonSvg: React.FC<{children: React.ReactNode; link: string}> = (props) => {
  return (
    <Wrapper>
      <a href={props.link} target="blank">{props.children}</a>
    </Wrapper>
  );
}

export default CommonSvg;
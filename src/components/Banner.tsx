import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import { motion } from "framer-motion";
import BannerImage from "../assets/img/banner.png";
import HeroSvg from "../assets/svg/hero.svg";
import ArrowRightSvg from "@/assets/svg/arrow-right-circle.svg";

const Container = styled.div`
  padding: 260px 0 100px 0;
  background-image: url(${BannerImage});
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
  padding: 0 7.5rem;
  align-items: center;
`;

const LeftWrapper = styled.div`
  flex: 1.8;
`;

const WelcomeContent = styled.div`
  width: fit-content;
  background: linear-gradient(
    90.21deg,
    rgba(170, 54, 124, 0.5) -5.91%,
    rgba(74, 47, 189, 0.5) 111.58%
  );
  padding: 8px 10px;
  font-size: 20px;
  font-weight: bold;
  border: 1px solid rgba(255, 255, 255, 0.5);
  letter-spacing: 0.8px;
`;

const Title = styled.h1`
  margin: 1rem 0;
  font-size: 65px;
  span {
    border-right: 0.08em solid #666;
  }
  .done {
    border-right: none;
  }
`;

const Text = styled.div`
  color: #b8b8b8;
  font-size: 18px;
  letter-spacing: 0.8px;
  line-height: 1.5em;
  width: 96%;
`;

const ConnectContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
  width: fit-content;
  height: 120px;
`

const StyledArrowRightSvg = styled(ArrowRightSvg)`
  fill: white;
  width: 26px;
  height: fit-content;
  margin-left: 8px;
`

const RightWrapper = styled.div`
  flex: 1;
`;

const HeroSvgWrapper = styled(motion.div)`
  width: 100%;
  margin: 0 auto;
`

const StyledHeroSvg = styled(HeroSvg)`
  width: 100%;
  height: auto;
  animation: animated 3s linear infinite;
  @keyframes animated {
    0% {
      transform: translateY(-20px);
    }
    50% {
      transform: translateY(20px);
    }
    100% {
      transform: translateY(-20px);
    }
  }
`;

const Banner = () => {
  const ref = useRef<HTMLSpanElement | null>(null)
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  const ticker = () => {
    const updateText = "Web Developer";
    setText(updateText.substring(0, text.length + 1));
    setDelta(500);
    if (text === updateText) {
      ref.current?.classList.add("done");
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      ticker();
    }, delta);
    return () => clearInterval(timer);
  }, [text])

  return (
    <Container id="home">
      <Wrapper>
        <LeftWrapper>
          <WelcomeContent>Welcome to my profile</WelcomeContent>
          <Title>
            Hi! I'm Molly, a <span ref={ref}>{text}</span>
          </Title>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <Link to="connect" smooth>
            <ConnectContainer>
              Let's Connect <StyledArrowRightSvg />
            </ConnectContainer>
          </Link>
        </LeftWrapper>
        <RightWrapper>
          <HeroSvgWrapper
            initial={{ width: "0" }}
            whileInView={{ width: "100%" }}
            transition={{ type: "spring", duration: 2 }}
          >
            <StyledHeroSvg
              viewBox="0 0 682 614"
              preserveAspectRatio="none meet"
            />
          </HeroSvgWrapper>
        </RightWrapper>
      </Wrapper>
    </Container>
  );
};

export default Banner;

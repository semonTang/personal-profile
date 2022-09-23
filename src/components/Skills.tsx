import React, { useRef } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { FreeMode, Navigation } from "swiper";
import LeftArrowIcon from "@/assets/svg/arrow-left.svg";
import RightArrowIcon from "@/assets/svg/arrow-right.svg";
SwiperCore.use([FreeMode]);


const Container = styled.div`
  padding: 0 0 50px 0;
  position: relative;
`;

const Wrapper = styled.div`
  width: 70%;
  background-color: #151515;
  border-radius: 64px;
  text-align: center;
  margin: 0 auto;
  margin-top: -60px;
  padding: 60px 50px;
`;

const Blur = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 25rem;
  height: 8rem;
  filter: blur(100px);
  background: linear-gradient(135deg, #aa367c 50%, #4a2fbd 50%);
  z-index: -1;
`;

const Title = styled.h2`
  font-size: 45px;
`;

const Text = styled.p`
  color: #b8b8b8;
  font-size: 18px;
  letter-spacing: 0.8px;
  line-height: 1.5em;
  margin: 14px 0 75px 0;
`;

const StyledProgress = styled.div`
  position: relative;
  margin: auto;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(90deg, #96358a, #6531ab);
  ::before {
    content: "";
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: #151515;
    position: absolute;
    top: 7px;
    right: 7px;
    z-index: 200;
  }
  /* background: linear-gradient(#96358a, #5730b5); */
`;

const Circle = styled.div`
  width: 100px;
  height: 100px;
  background: #151515;
  z-index: 10;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
`;

const StyledScore = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  font-size: 24px;
  z-index: 99;
`

const StyledName = styled.h5`
  font-size: 1.25rem;
  margin-top: 1rem;
`;

const Control = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 0;
  z-index: 99;
  transform: translateY(-50%);
`;

const IconBackground = styled.div<{ disable?: boolean }>`
  background: #685e5e;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  user-select: none;
  cursor: pointer;
`;

const Progress = (props: {score: string}) => {
  return (
    <StyledProgress>
      <Circle />
      <StyledScore>{props.score}</StyledScore>
    </StyledProgress>
  );
}

const Skills = () => {
  const skills = [
    {
      name: "React",
      score: "95%",
    },
    {
      name: "Vue",
      score: "80%",
    },
    {
      name: "Css",
      score: "90%",
    },
    {
      name: "Javascript",
      score: "90%",
    },
    {
      name: "Typescript",
      score: "90%",
    },
    {
      name: "Webpack",
      score: "90%",
    },
    {
      name: "Nodejs",
      score: "95%",
    },
  ];
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  return (
    <Container>
      <Blur />
      <Wrapper id="skills">
        <Title>Skills</Title>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. <br /> Lorem Ipsum has been the industry's standard dummy
          text.
        </Text>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          onInit={(swiper) => {
            const navigation = swiper.params.navigation;
            navigation && typeof navigation === "object"
              ? (navigation.prevEl = prevRef.current)
              : null;
            navigation && typeof navigation === "object"
              ? (navigation.nextEl = nextRef.current)
              : null;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          navigation={
            prevRef?.current && nextRef?.current
              ? {
                  nextEl: prevRef?.current,
                  prevEl: nextRef?.current,
                }
              : false
          }
          modules={[Navigation]}
          className="mySwiper"
        >
          <Control>
            <IconBackground ref={prevRef}>
              <LeftArrowIcon />
            </IconBackground>
            <IconBackground ref={nextRef}>
              <RightArrowIcon />
            </IconBackground>
          </Control>
          {skills.map((item, index) => (
            <SwiperSlide key={index}>
              <Progress score={item.score} />
              <StyledName>{item.name}</StyledName>
            </SwiperSlide>
          ))}
        </Swiper>
      </Wrapper>
    </Container>
  );
};

export default Skills;
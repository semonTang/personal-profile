import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);


const Container = styled.div`
  background-color: #151515;
  border-radius: 64px;
  text-align: center;
  padding: 60px 50px;
  position: relative;
  margin: -100px auto 0;
  width: 80%;
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
`

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
  return (
    <Container>
      <Title>Skills</Title>
      <Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. <br /> Lorem Ipsum has been the industry's standard dummy
        text.
      </Text>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation
        modules={[Navigation]}
        className="mySwiper"
      >
        {skills.map((item, index) => (
          <SwiperSlide key={index}>
            <Progress score={item.score} />
            <StyledName>{item.name}</StyledName>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Skills;
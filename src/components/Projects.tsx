import React, { useState } from "react";
import styled from "styled-components";
import Tabs from "../../libs/Tabs";
import TabPanel from "../../libs/Tabs/TabPanel";
import ProjectImg from "@/assets/img/project.png";

const Container = styled.div`
  display: block;
  margin-top: 50px;
  padding: 80px 8%;
  background-color: black;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 45px;
  font-weight: bold;
`;

const Text = styled.p`
  color: #b8b8b8;
  font-size: 18px;
  letter-spacing: 0.8px;
  line-height: 1.5em;
  margin: 14px auto 75px;
  width: 60%;
`;

const StyledTabs = styled(Tabs)`
  width: 72%;
`;

const TabPanelWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const ProjectCard = styled.a`
  display: block;
  position: relative;
  margin: 0 1rem 1rem 0;
  border-radius: 20px;
  cursor: pointer;
  width: 32%;
  height: 100%;
  overflow: hidden;
  :nth-child(3n) {
    margin: 0;
  }
  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 0;
    transition: all 0.3s ease-in-out;
    background: linear-gradient(90.21deg, #aa367c -5.91%, #4a2fbd 111.58%);
    opacity: 0.85;
    border-radius: inherit;
  }
  &:hover {
    ::before {
      height: 100%;
    }
    .project_text {
      opacity: 1;
      top: 50%;
    }
  }
`;

const StyledImg = styled.img`
  width: 100%;
  object-fit: contain;
`;

const TextContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: 0.4s ease-in-out;
`;

const H4 = styled.h4`
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 0.8px;
  line-height: 1.1em;
`;

const Label = styled.div`
  font-style: italic;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.8px;
`;

const Projects = () => {
  const [activeKey, setActiveKey] = useState("react");

  const renderTab = () => {
    return (
      <TabPanelWrapper>
        <ProjectCard href="http://localhost:4000">
          <StyledImg src={ProjectImg} alt="" />
          <TextContainer className="project_text">
            <H4>My Profile</H4>
            <Label>Design & Development</Label>
          </TextContainer>
        </ProjectCard>
      </TabPanelWrapper>
    );
  }

  return (
    <Container id="projects">
      <Title>Projects</Title>
      <Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Text>
      <StyledTabs
        active={activeKey}
        round
        onChange={(key) => setActiveKey(key)}
      >
        <TabPanel indexKey="react" tab="React">
          {renderTab()}
        </TabPanel>
        <TabPanel indexKey="vue" tab="Vue">
          敬请期待...
        </TabPanel>
        <TabPanel indexKey="uniapp" tab="Uniapp">
          敬请期待...
        </TabPanel>
      </StyledTabs>
    </Container>
  );
};

export default Projects;
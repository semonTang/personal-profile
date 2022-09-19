import React, { useContext } from "react";
import styled from "styled-components";
import { TabsContext } from ".";
import { TabPanelType } from "./type";

const Container = styled.div`
  height: 100%;
  width: 100%;
`

const TabPanel: React.FC<TabPanelType> = (props) => {
  const context = useContext(TabsContext);
  return (
    <Container className={props.className}>
      {context.activeKey === props.indexKey && props.children}
    </Container>
  )
};

export default TabPanel;
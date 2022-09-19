import React from "react";
import styled from "styled-components";
import { TabsContextProps, TabsType } from "./type";

export const TabsContext = React.createContext<TabsContextProps>({
  activeKey: "1",
});


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TabList = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 3rem;
`;

const TabItem = styled.div<{ active: boolean; round?: boolean }>`
  position: relative;
  padding: 17px 0;
  width: 33%;
  text-align: center;
  font-weight: 500;
  letter-spacing: 0.8px;
  font-size: 24px;
  transition: 0.3s ease-in-out;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.5);
  z-index: 1;
  cursor: pointer;
  &:first-child {
    border-left: 1px solid rgba(255, 255, 255, 0.5) !important;
    border-top-left-radius: ${(props) => (props.round ? "55px" : 0)};
    border-bottom-left-radius: ${(props) => (props.round ? "55px" : 0)};
  }
  &:last-child {
    border-top-right-radius: ${(props) => (props.round ? "55px" : 0)};
    border-bottom-right-radius: ${(props) => (props.round ? "55px" : 0)};
  }
  &:nth-child(2n),
  &:nth-child(2n + 1) {
    border-left: none;
  }
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: ${(props) => (props.active ? "100%" : 0)};
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(90.21deg, #aa367c -5.91%, #4a2fbd 111.58%);
    z-index: -1;
    transition: 0.3s ease-in-out;
  }
`;

const Tabs: React.FC<TabsType> = (props) => {
  const parseTabs = () => {
    const childrenArray = React.Children.toArray(props.children);
    return childrenArray.map((item) => {
      if (React.isValidElement(item)) {
        return {
          ...item.props,
          item
        };
      }
      return null;
    })
  }
  const tabs = parseTabs();

  return (
    <TabsContext.Provider value={{ activeKey: props.active }}>
      <Container>
        <TabList className={props.className}>
          {tabs.map((item) => (
            <TabItem
              key={item.indexKey}
              round={props.round}
              active={item.indexKey === props.active}
              onClick={() => props.onChange?.(item.indexKey)}
            >
              {item?.tab}
            </TabItem>
          ))}
        </TabList>
        {props.children}
      </Container>
    </TabsContext.Provider>
  );
}

export default Tabs;
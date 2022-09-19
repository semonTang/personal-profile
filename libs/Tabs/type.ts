import React from "react";

export type TabsType = {
  active?: string;
  children?: React.ReactNode;
  className?: string;
  round?: boolean;
  onChange?: (key: string) => void;
}

export type TabPanelType = {
  indexKey?: string;
  className?: string;
  tab?: string;
  children?: React.ReactNode;
}

export interface TabsContextProps {
  activeKey?: string;
}
"use client";
import { createContext, SetStateAction, useState } from "react";

type SidebarContextType = {
  expanded: boolean;
  setExpanded?: React.Dispatch<SetStateAction<boolean>>;
};

export const SidebarContext = createContext<SidebarContextType>({
  expanded: false,
});

const SidebarContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [expanded, setExpanded] = useState<boolean>(true);
  return (
    <SidebarContext.Provider value={{ expanded, setExpanded }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarContextProvider;

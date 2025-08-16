import { useContext } from "react";
import { ActiveTabContext } from "../context/AppContext";

export function useActiveTabContext() {
  const activeTab = useContext(ActiveTabContext);
     if (activeTab === undefined)
    throw new Error("Cannot use this out side its provider");
  return activeTab;
}
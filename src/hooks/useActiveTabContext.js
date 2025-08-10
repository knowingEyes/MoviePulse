import { useContext } from "react";
import { ActiveTabContext } from "../context/AppContext";

export function useActiveTabContext() {
  const activeTab = useContext(ActiveTabContext);
  return activeTab;
}
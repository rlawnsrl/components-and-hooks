import { useState } from "react";

export const useTabs = <T>(initialTab: number, allTabs: T[]) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  const changeItem = (newIndex: number) => () => {
    setCurrentIndex(newIndex);
  };
  return {
    currentItem: allTabs[currentIndex],
    changeItem,
  };
};

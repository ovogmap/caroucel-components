import { useMemo, useState } from "react";
import { carouselContext } from "../context/CarouselContext";

interface CarouselProviderProps {
  children: React.ReactNode;
}

export interface CarouselContext {
  itemCount: number;
  setItemCount: (count: number) => void;
  width: number;
  setWidth: (width: number) => void;
  height: number;
  setHeight: (height: number) => void;
  focusedIndex: number;
  setFocusedIndex: (index: number) => void;
}

const initialState: CarouselContext = {
  itemCount: 0,
  setItemCount: () => {},
  width: 0,
  setWidth: () => {},
  height: 0,
  setHeight: () => {},
  focusedIndex: 0,
  setFocusedIndex: () => {},
};

export function CarouselProvider({ children }: CarouselProviderProps) {
  const [focusedIndex, setFocusedIndex] = useState(initialState.focusedIndex);
  const [width, setWidth] = useState(initialState.width);
  const [height, setHeight] = useState(initialState.height);
  const [itemCount, setItemCount] = useState(initialState.itemCount);
  const value = useMemo(
    () => ({
      itemCount,
      setItemCount,
      width,
      setWidth,
      height,
      setHeight,
      focusedIndex,
      setFocusedIndex,
    }),
    [itemCount, width, height, focusedIndex]
  );
  return (
    <carouselContext.Provider value={value}>
      {children}
    </carouselContext.Provider>
  );
}

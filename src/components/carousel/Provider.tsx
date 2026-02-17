import { useMemo, useState } from "react";
import { carouselContext } from "../context/CarouselContext";

interface CarouselProviderProps {
  children: React.ReactNode;
  itemCount: number;
  width: number;
  height: number;
}

export function CarouselProvider({
  children,
  itemCount,
  width,
  height,
}: CarouselProviderProps) {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const value = useMemo(
    () => ({
      itemCount,
      width,
      height,
      focusedIndex,
      setFocusedIndex,
    }),
    [itemCount, width, height, focusedIndex, setFocusedIndex]
  );
  return (
    <carouselContext.Provider value={value}>
      {children}
    </carouselContext.Provider>
  );
}

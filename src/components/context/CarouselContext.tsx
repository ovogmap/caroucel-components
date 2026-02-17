import { createContext, useContext } from "react";

export interface CarouselContext {
  itemCount: number;
  width: number;
  height: number;
  focusedIndex: number;
  setFocusedIndex: (index: number) => void;
}

export const carouselContext = createContext<CarouselContext | null>(null);

export function useCarousel() {
  const context = useContext(carouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a CarouselProvider");
  }
  return context;
}

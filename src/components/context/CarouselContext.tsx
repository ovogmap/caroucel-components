import { createContext, useContext } from "react";
import type { CarouselContext } from "../carousel/Provider";

export const carouselContext = createContext<CarouselContext | null>(null);

export function useCarousel() {
  const context = useContext(carouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a CarouselProvider");
  }
  return context;
}

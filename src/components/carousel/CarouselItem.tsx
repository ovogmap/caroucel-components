import styled from "styled-components";
import { useCarousel } from "../context/CarouselContext";

interface CarouselItemProps {
  children: React.ReactNode;
}

export default function CarouselItem({ children }: CarouselItemProps) {
  const { width, height } = useCarousel();
  return (
    <CarouselItemWrapper $width={width} $height={height}>
      {children}
    </CarouselItemWrapper>
  );
}

const CarouselItemWrapper = styled.div<{
  $width: number;
  $height: number;
}>`
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
`;

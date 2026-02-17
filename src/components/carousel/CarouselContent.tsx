import { useMemo } from "react";
import { useCarousel } from "../context/CarouselContext";
import styled from "styled-components";

interface CarouselContentProps {
  children: React.ReactNode;
  gap?: number;
}

export default function CarouselContent({
  children,
  gap = 8,
}: CarouselContentProps) {
  const { width, height, focusedIndex } = useCarousel();
  const left = useMemo(() => {
    return focusedIndex * width + gap * focusedIndex;
  }, [focusedIndex, width, gap]);

  return (
    <CaroucelContentWrapper $width={width} $height={height}>
      <CaroucelInnerWrapper $left={left} $gap={gap}>
        {children}
      </CaroucelInnerWrapper>
    </CaroucelContentWrapper>
  );
}

const CaroucelContentWrapper = styled.div<{
  $width: number;
  $height: number;
}>`
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  background-color: #fff;
  overflow: hidden;
  background-color: transparent;
`;

const CaroucelInnerWrapper = styled.div<{
  $left: number;
  $gap: number;
}>`
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.$gap}px;
  transform: translateX(${(props) => -props.$left}px);
  transition: transform 0.3s ease-in-out;
`;

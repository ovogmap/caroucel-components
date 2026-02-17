import styled from "styled-components";
import { CarouselProvider } from "./Provider";
import { useCarousel } from "../context/CarouselContext";

interface CarouselRootProps {
  children: React.ReactNode;
  width: number;
  height: number;
  itemCount: number;
}

export default function CarouselRoot({
  children,
  width,
  height,
  itemCount,
}: CarouselRootProps) {
  return (
    <CarouselProvider itemCount={itemCount} width={width} height={height}>
      <CarouselRootInternal>{children}</CarouselRootInternal>
    </CarouselProvider>
  );
}

function CarouselRootInternal({ children }: { children: React.ReactNode }) {
  const { width, height } = useCarousel();
  return (
    <CarouselContentWrapper $width={width} $height={height}>
      {children}
    </CarouselContentWrapper>
  );
}

const CarouselContentWrapper = styled.div<{
  $width: number;
  $height: number;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;
  background-color: transparent;
`;

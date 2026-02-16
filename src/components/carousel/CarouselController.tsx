import styled from "styled-components";

export default function CarouselController({
  children,
  gap = 8,
}: {
  children: React.ReactNode;
  gap?: number;
}) {
  return (
    <CarouselControllerWrapper $gap={gap}>{children}</CarouselControllerWrapper>
  );
}

const CarouselControllerWrapper = styled.div<{
  $gap: number;
}>`
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.$gap}px;
  justify-content: center;
  align-items: center;
`;

import styled from "styled-components";
import { useCarousel } from "../context/CarouselContext";

export default function CaroucelIndicators() {
  const { itemCount, focusedIndex, setFocusedIndex } = useCarousel();
  return (
    <CaroucelIndicatorsWrapper>
      {Array.from({ length: itemCount }).map((_, index) => (
        <CaroucelIndicatorItem
          key={index}
          $isFocused={focusedIndex === index}
          onClick={() => setFocusedIndex(index)}
        />
      ))}
    </CaroucelIndicatorsWrapper>
  );
}

const CaroucelIndicatorsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;

const CaroucelIndicatorItem = styled.div<{
  $isFocused: boolean;
}>`
  width: 10px;
  height: 10px;
  background-color: ${(props) => (props.$isFocused ? "#fff" : "#2c2c35")};
  border-radius: 50%;
  cursor: pointer;
`;

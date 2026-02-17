import { ChevronLeftIcon } from "@radix-ui/react-icons";
import styled from "styled-components";
import { useCarousel } from "../context/CarouselContext";

export default function CarouselPrevButton() {
  const { focusedIndex, setFocusedIndex } = useCarousel();
  const handleClick = () => {
    if (focusedIndex > 0) {
      setFocusedIndex(focusedIndex - 1);
    }
  };
  return (
    <CarouselPrevButtonWrapper
      onClick={handleClick}
      disabled={focusedIndex === 0}
    >
      <ChevronLeftIcon width={16} height={16} />
    </CarouselPrevButtonWrapper>
  );
}

const CarouselPrevButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 4px 6px;
  border-radius: 4px;

  &:hover:not(:disabled) {
    background-color: #2c2c35;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

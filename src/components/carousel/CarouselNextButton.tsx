import { ChevronRightIcon } from "@radix-ui/react-icons";
import styled from "styled-components";
import { useCarousel } from "../context/CarouselContext";

export default function CarouselNextButton() {
  const { focusedIndex, setFocusedIndex, itemCount } = useCarousel();
  const handleClick = () => {
    if (focusedIndex < itemCount - 1) {
      setFocusedIndex(focusedIndex + 1);
    }
  };
  return (
    <CarouselNextButtonWrapper
      onClick={handleClick}
      disabled={focusedIndex === itemCount - 1}
    >
      <ChevronRightIcon width={16} height={16} />
    </CarouselNextButtonWrapper>
  );
}

const CarouselNextButtonWrapper = styled.button`
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

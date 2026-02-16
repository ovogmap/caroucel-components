import styled from "styled-components";
import { CarouselProvider } from "./Provider";
import { useCarousel } from "../context/CarouselContext";
import { useEffect } from "react";

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
    <CarouselProvider>
      <CarouselRootInternal width={width} height={height} itemCount={itemCount}>
        {children}
      </CarouselRootInternal>
    </CarouselProvider>
  );
}

function CarouselRootInternal({
  children,
  width,
  height,
  itemCount,
}: CarouselRootProps) {
  const { setWidth, setHeight, setItemCount } = useCarousel();

  useEffect(() => {
    setWidth(width);
    setHeight(height);
    setItemCount(itemCount);
  }, [width, height, itemCount, setWidth, setHeight, setItemCount]);

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

/**
 * 옵션으로 들어와야하는 값
 * 1. 아이템의 크기 or 컨테이너의 크기 - 컨테이너에 크기에 맞게 아이템이 보여지도록 해야함.
 * 2. 아이템의 개수 - item 컴포넌트 개수 만큼
 * 3. 아이템의 간격 - 컨테이너에서 설정..?
 * 4. 자동 슬라이드 여부 - root에서 설정
 * 5. 자동 슬라이드 속도 - root에서 설정
 * 6. next, prev 버튼 여부 - controller에서 설정
 * 7. next, prev 버튼 위치 or 자유도? - controller에서 설정
 * 8. 인디케이터 (Pagination) 여부 - controller에서 설정
 */

{
  /*
<CarouselRoot>
    <CarouselContent>
        <CarouselItem>
            <div>
            // Image등 자유롭게.
            </div>
        </CarouselItem>
        <CarouselController/>
    </CarouselContent>
</CarouselRoot> */
}

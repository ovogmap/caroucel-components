import "./App.css";
import {
  CarouselRoot,
  CarouselContent,
  CarouselItem,
  CarouselController,
  CaroucelPrevButton,
  CaroucelNextButton,
  CaroucelIndicators,
} from "./components/carousel";
import styled from "styled-components";

function App() {
  return (
    <>
      <div>
        <h2>Carousel Components 만들어 보기...</h2>
        <CarouselRoot width={500} height={500} itemCount={items.length}>
          <CarouselContent>
            {items.map((item, index) => (
              <CarouselItem key={index}>
                <ItemBox>
                  <img
                    src={item.url}
                    alt={item.label}
                    width={500}
                    height={500}
                  />
                </ItemBox>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselController>
            <CaroucelPrevButton />
            <CaroucelIndicators />
            <CaroucelNextButton />
          </CarouselController>
        </CarouselRoot>
      </div>
    </>
  );
}

export default App;

const ItemBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: #27272a;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  overflow: hidden;
`;

const items = [
  {
    label: "Mountain Landscape",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&h=900&q=80",
  },
  {
    label: "Forest Path",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&h=900&q=80",
  },
  {
    label: "Ocean Waves",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&h=900&q=80",
  },
  {
    label: "Desert Dunes",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&h=900&q=80",
  },
  {
    label: "Sunset Lake",
    url: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?auto=format&fit=crop&q=80&w=2070",
  },
];

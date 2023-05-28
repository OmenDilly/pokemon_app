import { Carousel } from "antd";
import React, { FC } from "react";

interface CarouselProps {
  images: string[];
}

const ImageCarousel: FC<CarouselProps> = ({ images }) => {
  return (
    <Carousel style={{ backgroundColor: "#dfdfdf", borderRadius: "10px" }}>
      {images.map((img, index) => (
        <img key={index} src={img} />
      ))}
    </Carousel>
  );
};

export default ImageCarousel;

import React from "react";

interface Images {
  images: string[];
}

const SingleProductCarouselImage: React.FC<Images> = ({ images }) => {
  console.log(images);
  return <div>SingleProductCarouselImage</div>;
};

export default SingleProductCarouselImage;

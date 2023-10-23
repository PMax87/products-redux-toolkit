import React, { useEffect, useState } from "react";
import { starGenerator } from "../utils/StarGenerator";

interface Images {
  images: string[];
  title: string;
}

const SingleProductCarouselImage: React.FC<Images> = ({ images, title }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (images.length > 0) {
      setSelectedImage(images[0]);
    }
  }, [images]);

  starGenerator;

  return (
    <div>
      {selectedImage && (
        <img
          src={selectedImage}
          alt={title}
          className="rounded h-[500px] w-[500px] object-cover"
        />
      )}
      <div className="flex flex-wrap gap-5 mt-10 w-3/4">
        {images.map((image, index) => {
          return (
            <img
              className={`rounded h-[80px] w-[80px] object-cover cursor-pointer ${
                selectedImage === images[index]
                  ? "outline outline-offset-2 outline-2 outline-pink-500"
                  : ""
              } `}
              key={index}
              src={image}
              alt={`${title + " " + index}`}
              onClick={() => setSelectedImage(image)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SingleProductCarouselImage;

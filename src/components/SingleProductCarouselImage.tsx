import React, { useEffect, useState } from "react";

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

  return (
    <div>
      {selectedImage && <img src={selectedImage} alt={title} />}
      <div>
        {images.map((image, index) => {
          return (
            <img
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

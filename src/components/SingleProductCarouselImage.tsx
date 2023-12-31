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
    <div className="">
      {selectedImage && (
        <img
          src={selectedImage}
          alt={title}
          className="rounded h-[500px] w-[500px] object-cover outline outline-offset-2 outline-2 outline-slate-500"
        />
      )}
      <div className="flex flex-wrap gap-5 mt-10 w-full">
        {images.map((image, index) => {
          return (
            <img
              className={`rounded h-[80px] w-[80px] object-cover cursor-pointer ${
                selectedImage === images[index]
                  ? "outline outline-offset-2 outline-2 outline-slate-500"
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

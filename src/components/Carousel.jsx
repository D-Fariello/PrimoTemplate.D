import React, { useState } from "react";
import Modal from "./Modal";

const Carousel = () => {
  const [modalImage, setModalImage] = useState(null);
  const [currentModalIndex, setCurrentModalIndex] = useState(0);

  const images = [
    "/images/imageOne.jpg",
    "/images/imageTwo.jpg",
    "/images/imageThree.jpg",
    "/images/imageFour.jpg",
    "/images/imageFive.jpg",
  ];

  const openModal = (index) => {
    setModalImage(images[index]);
    setCurrentModalIndex(index);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const nextModalImage = () => {
    setCurrentModalIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % images.length;
      setModalImage(images[nextIndex]);
      return nextIndex;
    });
  };

  const prevModalImage = () => {
    setCurrentModalIndex((prevIndex) => {
      const prevIndexAdjusted = (prevIndex - 1 + images.length) % images.length;
      setModalImage(images[prevIndexAdjusted]);
      return prevIndexAdjusted;
    });
  };

  return (
    <div className="carousel">
      {/* Images */}
      <div className="carouselImages">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`carousel-${index}`}
            className="carouselImage"
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      {/* Modal */}
      <Modal
        show={!!modalImage}
        onClose={closeModal}
        image={modalImage}
        onNext={nextModalImage}
        onPrev={prevModalImage}
      />
    </div>
  );
};

export default Carousel;

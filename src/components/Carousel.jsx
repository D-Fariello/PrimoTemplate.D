import React, { useState } from "react";
import Modal from "./Modal";

const Carousel = () => {
  const [modalImage, setModalImage] = useState(null);

  const images = [
    "/images/imageOne.jpg",
    "/images/imageTwo.jpg",
    "/images/imageThree.jpg",
    "/images/imageFour.jpg",
    "/images/imageFive.jpg",
  ];

  const openModal = (index) => {
    setModalImage(images[index]);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const nextModalImage = () => {
    setModalImage((currentImage) => {
      const currentIndex = images.indexOf(currentImage);
      const nextIndex = (currentIndex + 1) % images.length;
      setModalImage(images[nextIndex]);
    });
  };

  const prevModalImage = () => {
    setModalImage((currentImage) => {
      const currentIndex = images.indexOf(currentImage);
      const prevIndex = (currentIndex - 1 + images.length) % images.length;
      setModalImage(images[prevIndex]);
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

import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Modal({ show, onClose, image, onNext, onPrev }) {
  if (!show) return null;

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent">
        <div className="buttonsCheveron">
          <button className="carouselButton prev" onClick={onPrev}>
            <FaChevronLeft />
          </button>
          <button className="carouselButton next" onClick={onNext}>
            <FaChevronRight />
          </button>
        </div>
        <img className="imageModal" src={image} alt="Modal content" />
      </div>
    </div>
  );
}

export default Modal;

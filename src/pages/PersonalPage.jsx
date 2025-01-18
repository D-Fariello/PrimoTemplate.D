import React from "react";
import "../style/_personalPage.scss";

const PersonalPage = () => {
  return (
    <div className="personalPage">
      <section className="firstHomeSection">
        <div className="titleContent">
          <h1 className="titleFirstSection"> This is me </h1>
        </div>
        <div className="firstImageDiv">
          <img
            className="firstImage"
            src="/images/firstSection.jpg"
            alt="Home photo"
          />
        </div>
      </section>
      <section className="secondHomeSection">
        <div className="secondImageDiv">
          <img
            className="secondImage"
            src="/images/secondSection.jpg"
            alt="Second Section photo"
          />
        </div>
        <div className="textContent">
          <h1 className="titleSecondSection">Who am I ?</h1>
          <p className="textSecondSection">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            labore vel sapiente neque? Dicta accusantium iure magnam vitae
            aspernatur sit necessitatibus dignissimos. Odit voluptate vel
            voluptas a, mollitia minima quia?
          </p>
          <h1 className="titleSecondSection">Who am I ?</h1>
          <p className="textSecondSection">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            labore vel sapiente neque? Dicta accusantium iure magnam vitae
            aspernatur sit necessitatibus dignissimos. Odit voluptate vel
            voluptas a, mollitia minima quia?
          </p>
        </div>
      </section>
      <section className="thirdHomeSection">
        <div className="titleContent">
          <h1 className="titleThirdSection">Text</h1>
          <p className="textSecondSection">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            labore vel sapiente neque? Dicta accusantium iure magnam vitae
            aspernatur sit necessitatibus dignissimos. Odit voluptate vel
            voluptas a, mollitia minima quia?
          </p>
        </div>
      </section>
    </div>
  );
};

export default PersonalPage;

import React from "react";

const Home = () => {
  return (
    <main className="mainDiv">
      <section className="homeSection">
        <h1> Foto + Bottone </h1>
        <div className="firstImageDiv">
          <img
            className="firstImage"
            src="/images/Dalila.avif"
            alt="Home photo"
          />
        </div>
      </section>
      <section className="homeSection">
        <h1> Foto + Dscrizione + Bottone </h1>
        <div className="secondImageDiv">
          <img
            className="secondImage"
            src="/images/Dalila.avif"
            alt="Second Section photo"
          />
        </div>
      </section>
      <section className="homeSection">
        <h1> Programmi + Bottone </h1>
        <div className="thirdImageDiv">
          <img
            className="thirdImage"
            src="/images/Dalila.avif"
            alt="Third Section photo"
          />
        </div>
      </section>
      <section className="homeSection">
        <h1> Eventi + Bottone </h1>
        <div className="cardsDiv">
          <img
            className="cardsImage"
            src="/images/Dalila.avif"
            alt="cardsImage"
          />
        </div>
      </section>
      <section className="homeSection">
        <h1> Informazioni su socials + Bottone </h1>
        <div className="fifthImageDiv">
          <img
            className="fifthImage"
            src="/images/Dalila.avif"
            alt="Fifth Section photo"
          />
        </div>
      </section>
    </main>
  );
};

export default Home;

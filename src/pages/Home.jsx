import React from "react";

const Home = () => {
  return (
    <main className="mainDiv">
      <section className="firstHomeSection">
        <div className="titleContent">
          <h1 className="titleFirstSection">
            {" "}
            DÉCOUVREZ <br />
            MON NOUVEAU PROGRAMME !{" "}
          </h1>
          <button className="discoveryButton">JE DÉCOUVRE</button>
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
          <h1 className="titleSecondSection">
            {" "}
            Hello ! My Name is ...... !<br /> Together we'll do amazing things !{" "}
          </h1>
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
          <h1 className="titleThirdSection">
            {" "}
            Mon nouveau programme vient de sortir{" "}
          </h1>
          <div className="thirdImageDiv">
            <img
              className="thirdImage"
              src="/images/thirdSection.jpg"
              alt="Third Section photo"
            />
          </div>
          <button className="discoveryButton">I WANT IT ! </button>
        </div>
      </section>
      <section className="forthHomeSection">
        <h1> Eventi + Bottone </h1>
        <div className="cardsDiv">
          <img
            className="cardsImage"
            src="/images/Dalila.avif"
            alt="cardsImage"
          />
        </div>
      </section>
      <section className="fifthHomeSection">
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

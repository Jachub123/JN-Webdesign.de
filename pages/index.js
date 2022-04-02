import React from "react";
import Header from "./Header";

const Home = () => {
  const bigHeadlineText = [
    "So wie Du sollte auch",
    "Deine Website ein Unikat sein",
    "Und kein Baukaustenmodell",
  ];
  const smallHeadlineText = [
    "Responsiv",
    "SEO - Suchmaschinen optimiert",
    "Individuell nach deinen Vorstellungen",
  ];

  const bigHeadlines = bigHeadlineText.map((text, index) => (
    <h2 key={index} className="drop-shadow headMediumCaption">
      {text}
    </h2>
  ));
  const smallHeadlines = smallHeadlineText.map((text, index) => (
    <h3 key={index} className="drop-shadow headSmallCaption">
      <span key={index} className="icon-checkmark2"></span> {text}
    </h3>
  ));

  return (
    <div className="main">
      <Header
        logo="/test3_blur.jpg"
        bigHeadline={bigHeadlines}
        smallHeadLine={smallHeadlines}
      ></Header>
      <div className="sectionResponsive">
        <section className="responsiveWrapper contentBox">
          <h1 className="">Neue Inhalte</h1>
          <h1 className="">Neue Inhalte</h1>
          <h1 className="">Neue Inhalte</h1>
          <h1 className="">Neue Inhalte</h1>
          <h1 className="">Neue Inhalte</h1>
          <h1 className="">Neue Inhalte</h1>
          <h1 className="">Neue Inhalte</h1>
          <h1 className="">Neue Inhalte</h1>
          <h1 className="">Neue Inhalte</h1>
          <h1 className="">Neue Inhalte</h1>
          <h1 className="">Neue Inhalte</h1>
          <h1 className="">Neue Inhalte</h1>
          <h1 className="">Neue Inhalte</h1>
          <h1 className="">Neue Inhalte</h1>
        </section>
      </div>
    </div>
  );
};

export default Home;

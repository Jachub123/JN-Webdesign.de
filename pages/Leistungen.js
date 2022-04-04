import React from "react";
import Header from "./Header";

const Leistungen = () => {
  const bigHeadlineText = [
    "Hier können Sie sich ",
    "Nicht nur finden",
    "Sondern auch verwirklichen!",
  ];
  const smallHeadlineText = [
    "Wir arbeiten zusammen an Ihrem Auftritt",
    "Ihre Farben, Ihre Bilder",
    "Ihre Seite!",
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
        logo="/test2_blur.jpg"
        bigHeadline={bigHeadlines}
        smallHeadLine={smallHeadlines}
      ></Header>
      <div className="sectionResponsive">
        <section className="responsiveWrapper contentBox">
          Leistungen Leistungen Leistungen Leistungen Leistungen Leistungen
          Leistungen Leistungen Leistungen Leistungen Leistungen Leistungen
          Leistungen Leistungen Leistungen Leistungen Leistungen Leistungen
          Leistungen
        </section>
      </div>
    </div>
  );
};

export default Leistungen;

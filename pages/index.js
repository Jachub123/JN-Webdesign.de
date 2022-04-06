import React from "react";
import Header from "./Header";
import Animations from "./animations";

const Home = () => {
  const bigHeadlineText = [
    "So wie Sie sollte auch",
    "Ihre Website ein Unikat sein",
    "Und kein Baukaustenmodell",
  ];
  const smallHeadlineText = [
    "Responsiv",
    "SEO - Suchmaschinen optimiert",
    "Individuell nach Ihren Vorstellungen",
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
      <Animations></Animations>
      <div className="sectionResponsive">
        <section className="responsiveWrapper contentBox">
          <h1 className="">Webseite erstellen lassen</h1>
          <div className="columns ">
            <div className="column-text column">
              <svg
                id="Layer_1"
                className="svgSize"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 151 151"
              >
                <defs></defs>
                <circle className="circle" cx="75.5" cy="75.5" r="75" />
                <path
                  className="cls-1"
                  d="M17.24,47.17c0,8.38,5.09,2.11,5.12,16.25,0,1.79,2.49,10.79,9.48,11.57,7.36.83,10.54-10.31,10.88-11,.49-1,4.14-6.87,4.55-11,1-10-1.43-21-11.91-21.7C28.41,30.82,17.22,38.62,17.24,47.17Z"
                />
                <path
                  className="cls-2"
                  d="M22.38,65.32c-.5,1.07-3.27,3.08-4.45,3.62A116.37,116.37,0,0,1,1,75.18C1,81.93,1.52,89.43,3,95.32c3.51,13.51,11.14,25.27,20.87,34.82,7,6.92,15.49,11.24,24.43,15,2.54,1.07,6.89,2.2,10.18,3.22a55.65,55.65,0,0,1-3-18.77l10.4,8.71c1.86,1.57,4.32,3.21,6.45,2.09,1.44-.76,2.1-2.51,2.57-4.12A66,66,0,0,0,70,87.52a17.86,17.86,0,0,0-3.33-4.73,20.59,20.59,0,0,0-5.41-3.23A144.45,144.45,0,0,1,46.87,71.7c-1.27-.79-3.11-4.24-4.13-5.31C28,87.82,22.89,64.25,22.38,65.32Z"
                />
                <path
                  className="cls-3"
                  d="M42.23,65.86c2.89-5.27,6-13.22,5.6-19.29l-.22-1.94a39.1,39.1,0,0,0,1.21-10c-.17-3.38-1.34-6.84-3.8-9s-5.9-2.77-9.13-3.1c-2.27-.23-4.64-.37-6.74.54s-3.86,3.17-3.54,5.54c-4.58.33-8.4,5.16-7.88,10,.2,1.75.88,3.46.73,5.22s-.73,1.18-1.17,2.81.09,4.6,1.53,5.36c1,.53,1.32,1.51,2.05,2.15a3.54,3.54,0,0,1,.87,2.42A44.27,44.27,0,0,1,21.93,62"
                />
                <path
                  className="cls-3"
                  d="M27.47,41.21A4.25,4.25,0,0,1,31,40.14a5.68,5.68,0,0,1,3.34,1.37"
                />
                <path
                  className="cls-3"
                  d="M40.13,42.65a5.64,5.64,0,0,1,4.45,0"
                />
                <path
                  className="cls-4"
                  d="M41.21,45.52c.86.23,1.57-.24,2.42,0a1.69,1.69,0,0,1,1.22,1.39c.08.8.3.5,0,.7s-.85,0-1.22,0a3.93,3.93,0,0,1-2.16-.83"
                />
                <path
                  className="cls-4"
                  d="M29.72,44.33c.77-1.32,2.42-1.38,4.46-.16a1.1,1.1,0,0,1,.31.25,1,1,0,0,1,.26.83c-.07.15-.25.12-.43.08l-3.48-.74"
                />
                <path
                  className="cls-3"
                  d="M38.93,47.33c.35,1.53.71,3.06,1.06,4.59a.62.62,0,0,1-.05.54.56.56,0,0,1-.4.12,6.61,6.61,0,0,1-3.24-.53,2.78,2.78,0,0,0-1-.44c-.35,0-.76.2-.74.57"
                />
                <path
                  className="cls-3"
                  d="M33.36,58.09a10.24,10.24,0,0,0,6.36,0"
                />
                <path className="cls-4" d="M31.87,82.28l2.51,2.66" />
                <path className="cls-4" d="M28.62,85.07l1.85,1.65" />
                <path className="cls-4" d="M28,89.17a1.15,1.15,0,0,0,.8.73" />
                <path className="cls-4" d="M26.74,106h-.61" />
                <path className="cls-4" d="M27.64,101.34l-1.51.13" />
                <path className="cls-4" d="M26.74,109.83" />
                <path
                  className="cls-4"
                  d="M41.8,70.21a67.18,67.18,0,0,1-.07,13.15"
                />
                <path
                  className="cls-3"
                  d="M31.54,127.46c.47-2.29-.4-3-1.11-5.27s-1.67-4.36-2.24-6.63"
                />
                <path
                  className="cls-4"
                  d="M24.59,97.54a135.44,135.44,0,0,0-4-29.2"
                />
                <path
                  className="cls-2"
                  d="M55,129.07a70.93,70.93,0,0,1-13.49-22.26l8.24-9.61q7.88,6.78,15.82,13.5a54.19,54.19,0,0,0-5.94-8.49"
                />
                <path
                  className="cls-5"
                  d="M28.79,30.73a5,5,0,0,1,4.79-3.44c2,0,3.56.53,6.62,1.07"
                />
                <path
                  className="cls-5"
                  d="M31.88,30a18.88,18.88,0,0,1,8.66,1.28,6.06,6.06,0,0,1,3.67,3.11"
                />
                <path
                  className="cls-5"
                  d="M39.64,26.54a8.42,8.42,0,0,1,6,4.95"
                />
                <path
                  className="cls-5"
                  d="M26.61,33.56a3.66,3.66,0,0,0-4.07-1.11,4,4,0,0,0-2.4,3.63"
                />
                <path
                  className="cls-5"
                  d="M24.23,34.63A4.83,4.83,0,0,0,20.8,38"
                />
                <path
                  className="cls-5"
                  d="M27.42,26.94a5.43,5.43,0,0,1,4-2.5,15.41,15.41,0,0,1,4.83.33l5.05.88"
                />
                <path
                  className="cls-3"
                  d="M41.72,64.25a22,22,0,0,1-2.58,3.32,3.25,3.25,0,0,1-2.51,1,6.47,6.47,0,0,1-1.76-.08,13.57,13.57,0,0,1-2.68-1.09c-2.5-1.45-3.93-4.4-6.38-6"
                />

                <path
                  className="cls-3"
                  d="M80.92,150.23s9.81-30,14.62-45a178.24,178.24,0,0,0,7.38-34.9,4.84,4.84,0,0,0-.2-2.62A4.29,4.29,0,0,0,100.8,66a59.15,59.15,0,0,0-10.46-4.65A4.9,4.9,0,0,0,88.12,61a5.86,5.86,0,0,0-2.74,1.61c-5.1,4.28-11.81,7.87-13.14,14.66a2.28,2.28,0,0,0,1.51,3.09l4.85,2.29a5,5,0,0,0,3.48.71c1.35-.4,2.17-1.85,2.72-3.23a24.86,24.86,0,0,0,.82-15.8"
                />
                <line
                  className="cls-3"
                  x1="87.02"
                  y1="131.21"
                  x2="94.26"
                  y2="148.05"
                />
                <line
                  className="cls-3"
                  x1="87.02"
                  y1="131.75"
                  x2="89.12"
                  y2="149.57"
                />
                <path
                  className="cls-4"
                  d="M37,109.4a30.18,30.18,0,0,0-.17-8.54"
                />
                <path className="cls-4" d="M34.69,79.6a.64.64,0,0,1,.2.42" />
                <path
                  className="cls-3"
                  d="M42.76,68.78c.49,5.11-.53,13.68-1.55,15.83"
                />
                <path
                  className="cls-3"
                  d="M37.65,100.68c-.11,1.3-.1,1.28,0,1.61l.15.54C39,112,33.63,118.75,33.07,128"
                />
                <path
                  className="cls-6"
                  d="M47.58,46.84c-.08-3.1,1-8.57,1-10.72a23.48,23.48,0,0,0-.51-5.35A11.37,11.37,0,0,0,45,26a10.66,10.66,0,0,0-5.09-2.62,29.79,29.79,0,0,0-4.07-.59,19.73,19.73,0,0,0-7.74.79c-2.34.76-1.85,1.76-2.44,4.48-.16.76-2.54,1.15-3.56,1.69,0,0-1.86,1.35-2,1.6a9,9,0,0,0-2,4.29c-.52,2.36.51,5.89.51,8.81C21,41,23.48,34.88,27.22,33.67s7.37-2.08,11.2-1.29A6.52,6.52,0,0,1,41,33.45c1.47.9,2.3,1,3,2.67S47.13,45,47.58,46.84Z"
                />
                <path
                  className="cls-7"
                  d="M33.33,128.27l-7.92-24.46L22.13,75.23l11.9.68,7.95.93s-4.23,24.65-4.07,26.25C38.42,108.45,33.33,128.27,33.33,128.27Z"
                />
                <path
                  className="cls-8"
                  d="M30.53,78.37a4.35,4.35,0,0,0-1.68.73"
                />
                <path className="cls-8" d="M30.72,78.5a4,4,0,0,1,3.76.41" />
                <path
                  className="cls-9"
                  d="M27.67,80.24A1.37,1.37,0,0,0,26.91,82c.12.31.35.57.49.87a3.35,3.35,0,0,1-.32,2.4c-1.44,3.93-1.13,8.29-.8,12.49"
                />
                <path
                  className="cls-3"
                  d="M38.3,101.66c-1.13,4.55-.47,9.43-1.65,14-.56,2.16-1.55,4.28-1.41,6.51"
                />
                <path
                  className="cls-9"
                  d="M26.46,90.5c-.83-2.59,2,3.41,6.61,7,2.68,2.08,3.09,1.47,4.07,2.68,2.82,3.48-1.52,19.82-2,21.43-.89,2.79-.84,6.17-2,6.43-.62.13-1.38-.68-1.53-1.07C27,114.07,25.44,92.64,26.46,90.5Z"
                />
                <path className="cls-10" d="M30.4,79.08a6.11,6.11,0,0,0-2,1" />
                <path
                  className="cls-12"
                  d="M39,76.2a6.06,6.06,0,0,0-3.83,1.4,8.17,8.17,0,0,0-1.49,1.56,8.32,8.32,0,0,0-.56.85c-.1.16-.18.33-.27.5a1.14,1.14,0,0,1-.1.19c-.15.25,0,.18.47-.21-.12-.14-1,0-1.21-.07a3.32,3.32,0,0,1-.89-.08c-.58-.18-1.06-.94-1.45-1.38l-3.61-4c-1.29-1.44-3.41.69-2.12,2.12l3.79,4.23A6.8,6.8,0,0,0,29.64,83a7.25,7.25,0,0,0,2.77.48A2.81,2.81,0,0,0,35,82.77c.53-.59.77-1.39,1.26-2A3.74,3.74,0,0,1,39,79.2a1.5,1.5,0,0,0,0-3Z"
                />
                <path
                  className="cls-4"
                  d="M30.41,74.94c-3.27-2.57-5.64-6.16-8-9.69a8.39,8.39,0,0,0-1,4.94,44.78,44.78,0,0,0,2.28,13c.56-1.46,1.91-2.37,3.07-3.37A16.18,16.18,0,0,0,30,76.06a1.19,1.19,0,0,1,.43-.46.94.94,0,0,1,.5-.06l1.35.09a1.73,1.73,0,0,1,.78.16,2.08,2.08,0,0,1,.66.63,36.94,36.94,0,0,0,7.1,6.87c.19.14.45.28.63.13a.6.6,0,0,0,.16-.34,31.56,31.56,0,0,0,.49-6.66V68.91a2.44,2.44,0,0,0-.24-1.32c0-.08-.12-.17-.22-.17a.33.33,0,0,0-.23.11c-1.58,1.38-2.9,3-4.42,4.49a9.49,9.49,0,0,1-5.39,2.86"
                />
                <path
                  className="cls-3"
                  d="M20.78,71.14c-.07,1.38.59,2.67.95,4,.68,2.49.32,5.16.41,7.75a42.65,42.65,0,0,0,.76,6L24.48,98"
                />

                <ellipse
                  className="cls-4"
                  cx="43"
                  cy="46.3"
                  rx="0.25"
                  ry="0.27"
                />
                <ellipse
                  className="cls-4"
                  cx="32.31"
                  cy="44.16"
                  rx="0.25"
                  ry="0.27"
                />

                <path
                  className="cls-11"
                  d="M22.5,99.06a19.27,19.27,0,0,1,7.86-.16,2.89,2.89,0,0,1-1.91,1.64c1.41,1,3.77.18,4.74,1.66a.94.94,0,0,1,.12.91,1.07,1.07,0,0,1-.64.45l-4.76,1.88a2.13,2.13,0,0,1,.17,3.59,1.82,1.82,0,0,1,1.36,1.85,1.77,1.77,0,0,1-1.59,1.63L27,113a7.27,7.27,0,0,1-2.67.47,26.85,26.85,0,0,1-5.3.14l-.51.06c-1.33-.17-6.24.28-7.59.29l-4.11-8.82c2.39.28,8.44-1.5,9.75-3.62a14,14,0,0,1,.8-1.29c1.18-1.46,3.26-1.54,5.08-1.45"
                />

                <path
                  className="cls-11 hand1"
                  d="M37.85,100.74c-1.11-.88-2.41-1.36-3.58-2.15-2.83-1.89-4.66-5.39-7.08-8a6,6,0,0,1-1.31-1.76,2.08,2.08,0,0,1,.26-2.19,2.12,2.12,0,0,0,.45-.4c.34-.54-.16-1.31-.09-2s.64-1.07.8-1.71c.09-.33,0-.7.1-1a1.83,1.83,0,0,1,1.16-1.38A4,4,0,0,1,30.24,80a2.29,2.29,0,0,1,.62-1.89l.36-.17c6.9,3,13.05,9.56,16.28,17.59l0,.66c-.63,3.75-3.85,5.88-5.48,9.14l-.55-.8Z"
                />
                <path className="cls-3" d="M32.86,128v9" />
              </svg>

              <h2>Individuelles Design</h2>
              <div className="column-text">
                Eine Webseite hat einen Charakter. Deshalb sollte sie ein
                Spiegel dessen sein, was Sie verkörpern, was Sie oder Ihr
                Unternehmen ausmacht. Für alle, denen Individualität ein
                Anliegen ist.
              </div>
            </div>
            <div className="column-text column is-4">
              <svg
                id="Layer_2"
                data-name="Layer 2"
                className="svgSize"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 151 151"
                preserveAspectRatio="none"
              >
                <defs></defs>
                <circle
                  className="customls-1 circle"
                  cx="75.5"
                  cy="75.5"
                  r="75"
                />
                <path
                  className="customls-2"
                  d="M29.48,41.31c4.08,1.94,8.71,3.19,13.12,2.22,2.95-.64,5.59-2.21,8.31-3.52,5.79-2.8,12.06-4.44,18.28-6.07a8.11,8.11,0,0,1,2.92-.39,22.66,22.66,0,0,1,3.18.94,16.14,16.14,0,0,0,4.66.12c7.59-.39,15,1.88,22.61,2.6a55.63,55.63,0,0,0,25.22-3.48,196.67,196.67,0,0,1,10.64,43.94A12.46,12.46,0,0,0,128,82.49c-1.05,1.37-1.79,3-2.91,4.27a5.29,5.29,0,0,1-4.47,2.14c1.16,2.54,2.33,5.52,1.09,8a6.44,6.44,0,0,1-5.28,3.21,18.93,18.93,0,0,1-6.37-.86A8.24,8.24,0,0,1,97.92,109a9.76,9.76,0,0,1-3.14,7.56c-2.18,1.78-5.72,2-7.71,0-1.52,4.24-7.47,6.1-11.13,3.49a7.35,7.35,0,0,1-14.08,1.1c-2.33,1.47-5.22,2.35-7.84,1.52s-4.62-3.82-3.66-6.39c-3.42,1.24-7.19,2.23-10.66,1.13s-6.23-5.06-4.82-8.42a3.35,3.35,0,0,1-3.57,2,6.21,6.21,0,0,1-3.75-2.17,11.7,11.7,0,0,1,0-15.26l-13.18-7a3.52,3.52,0,0,1-1.57-1.27,3.61,3.61,0,0,1,.23-3Q21,61.7,30.16,41.7"
                />
                <path
                  className="customls-2"
                  d="M76.44,35.15c-8.51.15-20.51,8.55-24.11,11-1.2,1.2-2.4,3.6-3.6,6a55.79,55.79,0,0,0-3.6,10.8c0,1.2,1.2,2.4,2.4,3.6s3.6,1.2,3.6,1.2c4.8,0,6.44-2.08,7.2-3.6l3.6-7.2a43.8,43.8,0,0,1,13.2-6c3.6,4.8,9.6,9.6,13.2,10.8,1.59.53,6,2.4,9.93,2.24a33.55,33.55,0,0,0,9.43-1.23"
                />
                <path
                  className="customls-2"
                  d="M98.86,64.69c4.53,5,4,8.46,8.54,13.48,3.67,4.06,7.41,8.18,12,11.11"
                />
                <path
                  className="customls-2"
                  d="M95.06,84.79l8.4,6.7a23.67,23.67,0,0,1,5.32,5.25"
                />
                <path
                  className="customls-2"
                  d="M84,96.28a43.31,43.31,0,0,1,9,6.38c.53.49,1.05,1,1.57,1.5l3.18,3.08"
                />
                <path
                  className="customls-2"
                  d="M73.21,105.82a4.46,4.46,0,0,0,2.38,2.24c1,.47,2.11.74,3.14,1.17,3,1.28,5.19,3.88,7.26,6.4"
                />
                <path
                  className="customls-2"
                  d="M34.88,109c.62-1.47,3.25-5.36,4.09-9.3a29.17,29.17,0,0,0,.39-6.54,5.46,5.46,0,0,0-.43-2.44,3.65,3.65,0,0,0-1.78-1.55,6.52,6.52,0,0,0-6,.63,10.24,10.24,0,0,0-3.83,4.88"
                />
                <path
                  className="customls-2"
                  d="M50.36,116.26c2.16-6,3.14-12.76,1.22-18.61-.65-2-1.9-4-3.93-4.59a5.48,5.48,0,0,0-4.83,1.31,16.52,16.52,0,0,0-3.19,4.08"
                />
                <path
                  className="customls-3"
                  d="M62.06,121.75a38.66,38.66,0,0,0,2.24-12.23,14.15,14.15,0,0,0-1-6.23,6.31,6.31,0,0,0-4.78-3.78,5,5,0,0,0-4,1l-2,2"
                />
                <path
                  className="customls-2"
                  d="M75.52,120.1l-.81-4.58a14.34,14.34,0,0,0-1.84-5.62c-1.12-1.65-3.2-2.81-5.11-2.24-2.13.64-3.15,3.06-3.58,5.24"
                />
              </svg>
              <svg
                data-name="Layer 2"
                className="svgSize hiddenSvg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 151 151"
                preserveAspectRatio="none"
              >
                <defs></defs>
                <circle
                  className="customls-1 circle"
                  cx="75.5"
                  cy="75.5"
                  r="75"
                />
                <path
                  className="customls-2"
                  d="M29.48,41.31c4.08,1.94,8.71,3.19,13.12,2.22,2.95-.64,5.59-2.21,8.31-3.52,5.79-2.8,12.06-4.44,18.28-6.07a8.11,8.11,0,0,1,2.92-.39,22.66,22.66,0,0,1,3.18.94,16.14,16.14,0,0,0,4.66.12c7.59-.39,15,1.88,22.61,2.6a55.63,55.63,0,0,0,25.22-3.48,196.67,196.67,0,0,1,10.64,43.94A12.46,12.46,0,0,0,128,82.49c-1.05,1.37-1.79,3-2.91,4.27a5.29,5.29,0,0,1-4.47,2.14c1.16,2.54,2.33,5.52,1.09,8a6.44,6.44,0,0,1-5.28,3.21,18.93,18.93,0,0,1-6.37-.86A8.24,8.24,0,0,1,97.92,109a9.76,9.76,0,0,1-3.14,7.56c-2.18,1.78-5.72,2-7.71,0-1.52,4.24-7.47,6.1-11.13,3.49a7.35,7.35,0,0,1-14.08,1.1c-2.33,1.47-5.22,2.35-7.84,1.52s-4.62-3.82-3.66-6.39c-3.42,1.24-7.19,2.23-10.66,1.13s-6.23-5.06-4.82-8.42a3.35,3.35,0,0,1-3.57,2,6.21,6.21,0,0,1-3.75-2.17,11.7,11.7,0,0,1,0-15.26l-13.18-7a3.52,3.52,0,0,1-1.57-1.27,3.61,3.61,0,0,1,.23-3Q21,61.7,30.16,41.7"
                />
                <path
                  className="customls-2"
                  d="M76.44,35.15c-8.51.15-20.51,8.55-24.11,11-1.2,1.2-2.4,3.6-3.6,6a55.79,55.79,0,0,0-3.6,10.8c0,1.2,1.2,2.4,2.4,3.6s3.6,1.2,3.6,1.2c4.8,0,6.44-2.08,7.2-3.6l3.6-7.2a43.8,43.8,0,0,1,13.2-6c3.6,4.8,9.6,9.6,13.2,10.8,1.59.53,6,2.4,9.93,2.24a33.55,33.55,0,0,0,9.43-1.23"
                />
                <path
                  className="customls-2"
                  d="M98.86,64.69c4.53,5,4,8.46,8.54,13.48,3.67,4.06,7.41,8.18,12,11.11"
                />
                <path
                  className="customls-2"
                  d="M95.06,84.79l8.4,6.7a23.67,23.67,0,0,1,5.32,5.25"
                />
                <path
                  className="customls-2"
                  d="M84,96.28a43.31,43.31,0,0,1,9,6.38c.53.49,1.05,1,1.57,1.5l3.18,3.08"
                />
                <path
                  className="customls-2"
                  d="M73.21,105.82a4.46,4.46,0,0,0,2.38,2.24c1,.47,2.11.74,3.14,1.17,3,1.28,5.19,3.88,7.26,6.4"
                />
                <path
                  className="customls-2"
                  d="M34.88,109c.62-1.47,3.25-5.36,4.09-9.3a29.17,29.17,0,0,0,.39-6.54,5.46,5.46,0,0,0-.43-2.44,3.65,3.65,0,0,0-1.78-1.55,6.52,6.52,0,0,0-6,.63,10.24,10.24,0,0,0-3.83,4.88"
                />
                <path
                  className="customls-2"
                  d="M50.36,116.26c2.16-6,3.14-12.76,1.22-18.61-.65-2-1.9-4-3.93-4.59a5.48,5.48,0,0,0-4.83,1.31,16.52,16.52,0,0,0-3.19,4.08"
                />
                <path
                  className="customls-3"
                  d="M62.06,121.75a38.66,38.66,0,0,0,2.24-12.23,14.15,14.15,0,0,0-1-6.23,6.31,6.31,0,0,0-4.78-3.78,5,5,0,0,0-4,1l-2,2"
                />
                <path
                  className="customls-2"
                  d="M75.52,120.1l-.81-4.58a14.34,14.34,0,0,0-1.84-5.62c-1.12-1.65-3.2-2.81-5.11-2.24-2.13.64-3.15,3.06-3.58,5.24"
                />
              </svg>
              <h2>Mit Liebe zum Detail</h2>
              <div className="column-text">
                Gemeinsam finden wir Ihre Besonderheiten, denn Design findet
                sich im Detail wieder. Weshalb Ihre Website, maßgeschneidert für
                Sie, angefertigt wird.
              </div>
            </div>
            <div className="column-text column is-4">
              <svg
                id="Layer_3"
                className="svgSize"
                data-name="Layer 3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 151 151"
              >
                <defs></defs>
                <circle
                  className="customls-6 circle"
                  cx="75.5"
                  cy="75.5"
                  r="75"
                />
                <path
                  className="customls-4"
                  d="M61.3,18l-22.45-.31a5.56,5.56,0,0,0-2.92.48c-1.59.91-1.92,3-2,4.86-.36,6.48-.15,13,.06,19.48l1.21,38.05c.47,14.79,1,29.61,2.8,44.3a5.87,5.87,0,0,0,.66,2.37,5.32,5.32,0,0,0,2.6,1.89c4.19,1.78,8.78,2.38,13.31,2.81,17.12,1.62,34.37,1,51.56.42A4.24,4.24,0,0,0,108,132a4.29,4.29,0,0,0,1.52-1.69,26.51,26.51,0,0,0,3.3-7c.84-3.35.45-6.88.12-10.32-3.06-31.44-1.06-63.26-5.09-94.59a4.72,4.72,0,0,0-.77-2.42c-.85-1.07-2.4-1.21-3.76-1.26-17.06-.61-22.37,1-39.34,2.82Z"
                />
                <path
                  className="customls-7"
                  d="M39.86,113.81q34.68-.66,69.37-.73"
                />
                <path
                  className="customls-7"
                  d="M72.68,120.8c-.69-.17-1.12.78-1,1.49.25,2.14,2.26,3.59,4.14,4.66a5.73,5.73,0,0,0,3,1c2-.1,3.44-2.4,3.13-4.41a6.76,6.76,0,0,0-3.68-4.58,4.58,4.58,0,0,0-2.93-.68,2.19,2.19,0,0,0-1.9,2"
                />

                <rect
                  className="customls-5"
                  x="38.29"
                  y="27.01"
                  width="67"
                  height="20"
                  transform="translate(-1.1 2.22) rotate(-1.76)"
                />
                <rect
                  className="customls-5"
                  x="41.63"
                  y="52.92"
                  width="22.29"
                  height="20"
                  transform="translate(-1.9 1.65) rotate(-1.76)"
                />
                <rect
                  className="customls-5"
                  x="68.26"
                  y="51.9"
                  width="35.29"
                  height="20"
                  transform="translate(-1.86 2.66) rotate(-1.76)"
                />
                <rect
                  className="customls-5"
                  x="42.18"
                  y="78.62"
                  width="22.29"
                  height="4.19"
                  transform="translate(-2.45 1.67) rotate(-1.76)"
                />
                <rect
                  className="customls-5"
                  x="42.35"
                  y="84.21"
                  width="22.29"
                  height="4.19"
                  transform="translate(-2.62 1.68) rotate(-1.76)"
                />
                <rect
                  className="customls-5"
                  x="42.52"
                  y="89.81"
                  width="22.29"
                  height="4.19"
                  transform="translate(-2.79 1.69) rotate(-1.76)"
                />
                <rect
                  className="customls-5"
                  x="68.82"
                  y="77.8"
                  width="35.29"
                  height="4.19"
                  transform="translate(-2.41 2.69) rotate(-1.76)"
                />
                <rect
                  className="customls-5"
                  x="68.99"
                  y="83.4"
                  width="35.29"
                  height="4.19"
                  transform="translate(-2.58 2.7) rotate(-1.76)"
                />
                <rect
                  className="customls-5"
                  x="69.16"
                  y="89"
                  width="35.29"
                  height="4.19"
                  transform="translate(-2.75 2.7) rotate(-1.76)"
                />
                <rect
                  className="customls-5"
                  x="40.54"
                  y="101.36"
                  width="67"
                  height="9.09"
                  transform="translate(-3.21 2.32) rotate(-1.76)"
                />
              </svg>
              <h2>Mobile friendly</h2>
              <div className="column-text">
                Das Layout Ihrer Webseite wird für Mobilgeräte, Tablets oder
                PCs, gleichermaßen optimiert.
              </div>
            </div>
          </div>
        </section>
        <section className="dividingParallax">
          <div className="blueTriangle"></div>
          <div className="greenTriangle"></div>
          <div className="curtainSlogan">
            <h1 className="huge design">Design </h1>
            <h2 className="mini">Folgt</h2>
            <h1 className="huge funktion">Funktion</h1>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;

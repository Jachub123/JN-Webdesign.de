import React from "react";
import ReactDOM from "react-dom";
import downloadUrl from "../img/logos/Logo3.0.svg";

function GetMeasurments(props) {
  return props.elHeight, props.elWidth; 
}
 
class Pageheader extends React.Component { 
  render() {
    const thisElHeight = (
      <GetMeasurments elHeight={this.props.addPaddingTop}></GetMeasurments>
    );
    const thisElWidth = ( 
      <GetMeasurments elWidth={this.props.distanceLeft}></GetMeasurments>
    );

    return (
      <div
        class="pageHeaderWrapper"
        style={{
          paddingTop: thisElHeight.props.elHeight,
          paddingLeft: thisElWidth.props.elWidth,
        }}
      >
        <h2 class="drop-shadow headMediumCaption">Sowie Du, sollte auch</h2>
        <h2 class="drop-shadow headMediumCaption">
          Deine Website ein Unikat sein
        </h2>
        <h2 class="drop-shadow headMediumCaption">Und kein Baukaustenmodell</h2>
        <h3 class="drop-shadow headSmallCaption">
          <span class="icon-checkmark2"></span> Responsiv
        </h3>
        <h3 class="drop-shadow headSmallCaption">
          <span class="icon-checkmark2"></span> SEO - Suchmaschinen optimiert
        </h3>
        <h3 class="drop-shadow headSmallCaption">
          <span class="icon-checkmark2"></span> Individuell nach deinen
          Vorstellungen
        </h3>
      </div>
    );
  }
}

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      class: null,
      headerHeight: 0,
      logoWidth: 0,
      logoLeftPadding: 0,
      spacingLeft: 0,
    };

    this.divElement = React.createRef();
    this.logo = React.createRef();
  }

  hover() {
    this.state.class
      ? this.setState({ class: null })
      : this.setState({ class: "open" });
  }

  componentDidMount() {
    const height = this.divElement.current.clientHeight + 50;
    const logoWidth = this.logo.current.clientWidth;
    this.setState({ headerHeight: height });
    if (window.innerWidth > 576) {
      this.setState({ spacingLeft: logoWidth });
    } else {
      this.setState({ spacingLeft: "" });
    }
  }

  render() {
    console.log(window.innerWidth);
    const dropdown = this.state.class;
    return (
      <div class="main">
        <header>
          <div class="header-grid" ref={this.divElement}>
            <div class="headerLogoWrapper" ref={this.logo}>
              <a class="mainLogoLink" href="#home">
                <img class="drop-shadow" src={downloadUrl} />
              </a>
            </div>
            <div class="CenterHeaderNav">
              <div class="headerNavContainer">
                <button
                  class="icon-menu drop-shadow icon-BurgerMenu"
                  onClick={() => this.hover()}
                ></button>
                <nav className={dropdown ? dropdown + " header" : " header"}>
                  <button onClick={() => this.hover()} className="close">
                    X
                  </button>
                  <ul>
                    <li>
                      <a href="#"> Leistungen</a>
                    </li>
                    <li>
                      <a href="#">Referenzen</a>
                    </li>
                    <li>
                      <a href="#">Kontakt</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
        <section class="pageheader">
          <div class="overlay"></div>
          <Pageheader
            addPaddingTop={this.state.headerHeight}
            distanceLeft={this.state.spacingLeft}
          />
        </section>
      </div>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById("root"));

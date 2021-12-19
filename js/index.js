import React from "react";
import ReactDOM from "react-dom";
import logoUrl from "../img/logos/Logo3.0.svg";

class Pageheader extends React.Component {
  render() {
    return (
      <div
        className="pageHeaderWrapper"
        style={{
          paddingTop: this.props.addPaddingTop,
          paddingLeft: this.props.addPaddingLeft,
        }}
      >
        <h2 className="drop-shadow headMediumCaption">Sowie Du, sollte auch</h2>
        <h2 className="drop-shadow headMediumCaption">
          Deine Website ein Unikat sein
        </h2>
        <h2 className="drop-shadow headMediumCaption">
          Und kein Baukaustenmodell
        </h2>
        <h3 className="drop-shadow headSmallCaption">
          <span className="icon-checkmark2"></span> Responsiv
        </h3>
        <h3 className="drop-shadow headSmallCaption">
          <span className="icon-checkmark2"></span> SEO - Suchmaschinen
          optimiert
        </h3>
        <h3 className="drop-shadow headSmallCaption">
          <span className="icon-checkmark2"></span> Individuell nach deinen
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
      cssClass: null,
      headerHeight: 0,
      logoWidth: 0,
      logoHeight: 0,
      breakpoints: Array(0, 576, 768, 992, 1200, 1400),
      lowBreakpoint: null,
      highBreakpoint: null,
      hasUpdated: false,
      menuIconPosition: null,
    };

    this.header = React.createRef();
    this.logo = React.createRef();
    this.menuIcon = React.createRef();
  }

  openNav() {
    this.state.cssClass
      ? this.setState({ cssClass: null })
      : this.setState({ cssClass: "open" });
  }

  positionIcon() {
    const menuButton = this.menuIcon.current;
    const positionMenuButton = menuButton.getBoundingClientRect();
    const navbarOpenWidth =
      this.header.current.querySelector(".header").clientWidth;
    if (typeof positionMenuButton !== "function") {
      console.log(window.innerWidth - positionMenuButton.x);
      console.log(positionMenuButton);
      this.state.menuIconPosition
        ? this.setState({
            menuIconPosition: null,
          })
        : this.setState({
            menuIconPosition: {
              marginRight: -(
                window.innerWidth -
                positionMenuButton.right -
                0.5 * navbarOpenWidth +
                positionMenuButton.width * 0.5
              ),
            },
          });
    }
  }

  transformIcon() {
    this.positionIcon();
    this.openNav();
  }

  resize = () => {
    const headerHeight = this.header.current.clientHeight;
    const logoWidth = this.logo.current.clientWidth;
    const padding = parseInt(
      window
        .getComputedStyle(this.header.current)
        .getPropertyValue("padding-top"),
      10
    );

    this.setState({ headerHeight: headerHeight + padding });

    if (window.innerWidth > 576) {
      this.setState({ logoWidth: logoWidth + padding });
    } else {
      this.setState({ logoWidth: "" });
    }
    const breakpoints = this.state.breakpoints.slice();
    const smallerBreakpoints = Array();

    const screensize = window.innerWidth;
    breakpoints.map((breakpoint, index) => {
      if (screensize > breakpoint) {
        smallerBreakpoints.push(index);
      }
    });

    this.setState({
      lowBreakpoint:
        breakpoints[smallerBreakpoints[smallerBreakpoints.length - 1]],
      highBreakpoint:
        breakpoints[smallerBreakpoints[smallerBreakpoints.length - 1] + 1],
    });
  };
  resizeOnChange = () => {
    if (
      (this.state.lowBreakpoint &&
        window.innerWidth < this.state.lowBreakpoint) ||
      (this.state.highBreakpoint &&
        window.innerWidth >= this.state.highBreakpoint)
    ) {
      this.resize();
    }
  };

  positionIconOnChange = () => {
    this.positionIcon();
  };

  onImageLoad = () => {
    this.resize();
  };

  componentDidMount() {
    this.onImageLoad();
    window.addEventListener("resize", this.resizeOnChange);
    window.addEventListener("position", this.positionIconOnChange);
  }

  render() {
    const openSideBar = this.state.cssClass;

    return (
      <div className="main">
        <header>
          <div
            id="headergrid"
            className={
              openSideBar ? openSideBar + " header-grid" : "header-grid"
            }
            ref={this.header}
          >
            <div className="headerLogoWrapper">
              <a className="mainLogoLink" href="#home">
                <img
                  className="drop-shadow"
                  src={logoUrl}
                  onLoad={this.onImageLoad}
                  ref={this.logo}
                />
              </a>
            </div>
            <div className="CenterHeaderNav">
              <div
                className="headerNavContainer"
                style={this.state.menuIconPosition}
              >
                <nav className=" header">
                  <ul>
                    <li className="linkLiElement">
                      <a href="#">
                        Leistungen<div className="hoverBorder"></div>
                      </a>
                    </li>
                    <li className="linkLiElement">
                      <a href="#">
                        Referenzen<div className="hoverBorder"></div>
                      </a>
                    </li>
                    <li className="linkLiElement">
                      <a href="#">
                        Kontakt<div className="hoverBorder"></div>
                      </a>
                    </li>
                  </ul>
                </nav>
                <div
                  className="drop-shadow burgerMenu"
                  onClick={() => this.transformIcon()}
                  ref={this.menuIcon}
                >
                  <div className="line line1"></div>
                  <div className="line line2"></div>
                  <div className="line line3"></div>
                  <div className="line line4"></div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="pageheader">
          <div className="overlay"></div>
          <Pageheader
            addPaddingTop={this.state.headerHeight}
            addPaddingLeft={this.state.logoWidth}
          />
        </section>
        <div className="content">
          <section className="sectionResponsive">
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
  }
}

ReactDOM.render(<Header />, document.getElementById("root"));

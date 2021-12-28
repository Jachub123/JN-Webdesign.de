import React from "react";
import ReactDOM from "react-dom";
import logoUrl from "../img/logos/Logo3.0.svg";

class Pageheader extends React.Component {
  render() {
    return (
      <div
        className="pageHeaderWrapper contentBox"
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
      fixedPosition: null,
      menuIconPosition: {
        marginRight: null,
        transitionDuration: "0.5s",
      },
      menuIconClicked: false,
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
    const windowWidthWithoutScrollbar =
      document.getElementById("root").clientWidth;
    const header = this.header.current;
    const headerPropertyValue = window.getComputedStyle(header);
    const transitionDuration =
      parseFloat(headerPropertyValue.getPropertyValue("transition-duration")) *
      1000;
    const headerWidth = header.clientWidth;
    const headerPaddingRight = parseInt(
      headerPropertyValue.getPropertyValue("padding-right"),
      10
    );
    const headerPaddingTop = parseInt(
      headerPropertyValue.getPropertyValue("padding-top"),
      10
    );
    const headerPosition = header.getBoundingClientRect();
    const defaultPositionMenuIcon =
      headerPosition.left + headerWidth - headerPaddingRight;
    const defaultPositionMenuIconRight =
      windowWidthWithoutScrollbar - defaultPositionMenuIcon;
    const navbarOpenWidth = header.querySelector(".header").clientWidth;
    if (
      (this.state.menuIconPosition &&
        this.state.menuIconPosition.marginRight) ||
      this.header.current.classList.contains("open")
    ) {
      if (headerPosition.top <= -(menuButton.clientHeight + headerPaddingTop)) {
        this.setState({
          menuIconPosition: {
            marginRight: null,
            position: "static",
            right: defaultPositionMenuIconRight,
          },
        });
      } else {
        this.setState({
          menuIconPosition: {
            marginRight: null,
            marginTop: headerPosition.top,
            position: "fixed",
            right: defaultPositionMenuIconRight,
          },
        });
        setTimeout(
          () =>
            this.setState({
              menuIconPosition: {
                marginRight: null,
                position: "static",
                transitionDuration: "0s",
              },
            }),
          transitionDuration
        );
      }
    } else {
      console.log(positionMenuButton.right);
      this.setState({
        menuIconPosition: {
          marginRight: -(
            windowWidthWithoutScrollbar -
            positionMenuButton.right -
            0.5 * navbarOpenWidth +
            positionMenuButton.width * 0.5
          ),
          marginTop: -headerPosition.top,
        },
      });
      setTimeout(
        () =>
          this.setState({
            menuIconPosition: {
              marginRight: null,
              position: "fixed",
              right: 0.5 * navbarOpenWidth - positionMenuButton.width * 0.5,
              transitionDuration: "0s",
            },
          }),
        transitionDuration
      );
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
    const sideBarOpen = this.header.current.classList.contains("open");
    const menuButton = this.menuIcon.current;
    const positionMenuButton = menuButton.getBoundingClientRect();
    const navbar = this.header.current.querySelector(".header");
    const navbarOpenWidth = navbar.clientWidth;
    const CssPositionNavbar = window
      .getComputedStyle(navbar)
      .getPropertyValue("position");
    if (CssPositionNavbar === "static") {
      this.setState({ menuIconPosition: null });
      return;
    }
    if (this.state.menuIconPosition && sideBarOpen) {
      this.setState({
        menuIconPosition: {
          right: 0.5 * navbarOpenWidth - positionMenuButton.width * 0.5,
          transitionDuration: "0s",
          position: "fixed",
        },
      });
    } else if (!this.state.menuIconPosition && sideBarOpen) {
      this.setState({
        menuIconPosition: {
          right: 0.5 * navbarOpenWidth - positionMenuButton.width * 0.5,
          transitionDuration: "0s",
          position: "fixed",
        },
      });
    }
  };

  onImageLoad = () => {
    this.resize();
  };

  componentDidMount() {
    this.onImageLoad();
    window.addEventListener("resize", this.resizeOnChange);
    window.addEventListener("resize", this.positionIconOnChange);
  }

  render() {
    const openSideBar = this.state.cssClass;

    return (
      <div className="main">
        <header>
          <div
            id="headergrid"
            className={
              openSideBar
                ? openSideBar + " header-grid contentBox"
                : "header-grid contentBox"
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
                      <a linktext="Leistungen" href="#">
                        Leistungen
                        <p>Leistungen</p>
                        <div className="hoverBorder"></div>
                      </a>
                    </li>
                    <li className="linkLiElement">
                      <a linktext="Referenzen" href="#">
                        Referenzen
                        <p>Referenzen</p>
                        <div className="hoverBorder"></div>
                      </a>
                    </li>
                    <li className="linkLiElement">
                      <a linktext="Kontakt" href="#">
                        Kontakt
                        <p>Kontakt</p>
                        <div className="hoverBorder"></div>
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
  }
}

ReactDOM.render(<Header />, document.getElementById("root"));

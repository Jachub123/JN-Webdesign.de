import React from "react";
import Image from "next/image";
import Logo from "./Logo";
import Link from "next/link";

//Das Script ist ein individuell anpassbarer header/Landingpage.
//Das Logo, der Text und das Hintergrundbild können für jede Seite, die diesen Header einbindet, individuell angepasst werden.
//Beim Klick auf den Menubutton wird eine Transition, der klassischen 3 striche eines solchen Buttons, angestoßen. Dieser Formt sich zu einem X um.
//Außerdem wird die Position so verändert, dass er sich in die Mitte, der sich öffnenden Sidebar, verschiebt
//da dies mein erstes, individuelles React Script ist, sind hier mit Sicherheit einige Optimierungsmöglichkeiten.

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cssClass: null,
      headerHeight: 0,
      logoWidth: 0,
      logoHeight: 0,
      breakpoints: Array({
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
        xxl: 1400,
      }),
      lowBreakpoint: null,
      highBreakpoint: null,
      hasUpdated: false,
      fixedPosition: null,
      menuIconPosition: {
        marginRight: null,
        transitionDuration: "0.5s",
      },
      logoContainerPull: null,
      menuIconClicked: false,
    };

    this.header = React.createRef();
    this.logo = React.createRef();
    this.menuIcon = React.createRef();
  }

  resize = () => {
    if (this.logo.current.clientHeight) {
      const headerHeight = this.logo.current.clientHeight;
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
    }
  };
  //hier soll das Breakpoint Array durch-iteriert werden, um nur für die relevanten Bildschirmgrößen einen Eventlistener abzufeuern. der Eventlistener befindet sich in der resize Funktion.
  //Dafür gibt es bessere Methoden aber ich kam noch nicht dazu diese anzuwenden.
  resizeOnChange = () => {
    const breakpoints = this.state.breakpoints.slice();
    breakpoints.map((breakpoint, index) => {
      for (const [key, value] of Object.entries(breakpoint)) {
        if (key == "xs" || key == "sm" || key == "md") {
          const mediaQuery = window.matchMedia("(min-width: " + value + ")");
          if (mediaQuery.matches) {
            this.resize();
          }
        }
      }
    });
  };
  //hier wird gewartet bis das Bild geladen ist, erst danach kann eine richtige Positionierung der anderen Inhalte in Abhängigkeit zur Höhe des Bildes geschehen.
  onImageLoad = () => {
    this.resize();

    window.addEventListener("resize", this.resizeOnChange);
    window.addEventListener("resize", this.positionIconOnChange);
  };

  openNav() {
    this.state.cssClass
      ? this.setState({ cssClass: null })
      : this.setState({ cssClass: "open" });
  }

  //Die Funktion positionIcon dient dazu den Menubutton/das Menuicon zu positionieren.
  //Hier wird je nach Scrollposition des Users entschieden ob sich der Button nach unten bewegen muss.
  //Oder je nach Bildschirmbreite ob er sich nach rechts oder links verschieben soll.
  //Außerdem wird abgefragt ob das menu im Moment des Klicks schon geöffnet ist oder nicht,
  //um zu bestimmen ob die sidebar geschlossen oder geöffnet werden soll.
  positionIcon() {
    const menuButton = this.menuIcon.current;
    const positionMenuButton = menuButton.getBoundingClientRect();
    const windowWidthWithoutScrollbar =
      document.getElementById("__next").clientWidth;
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
      this.setState({
        logoContainerPull: {
          marginRight: null,
        },
      });
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
        //hier wartet das Script bis die, im CSS festgelegte, Transition (Animation) abgeschlossen ist.
        //Erst dann können die Parameter zur Positionierung richtig berechnet werden.
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
      //hier wird die Mitte der Sidebar berechnet, um den Button danach auszurichten.
    } else {
      const menuIconPosition =
        windowWidthWithoutScrollbar -
        positionMenuButton.right -
        0.5 * navbarOpenWidth +
        positionMenuButton.width * 0.5;
      function pullMenuIcon() {
        if (menuIconPosition < 0) {
          return menuIconPosition;
        } else {
          return null;
        }
      }
      this.setState({
        menuIconPosition: {
          marginRight: -menuIconPosition,
          marginTop: -headerPosition.top,
        },
        logoContainerPull: {
          marginRight: pullMenuIcon(),
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

  //Die Funktion positionIconOnChange ist ähnlich wie die Funktion positionIcon dazu da den Menubutton zu verschieben,
  //allerdings in diesem Fall nicht nach einem Klick sondern im Fall einer Anpassung des Viewports durch den Client, zum Beispiel beim Ändern von Portrait zu Landscape auf mobile Geräten.
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

  componentDidMount() {
    this.onImageLoad();
  }

  render() {
    const openSideBar = this.state.cssClass;
    return (
      <div>
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
              <Link href="/">
                <a className="mainLogoLink">
                  <Logo ref={this.logo} onImageLoad={this.onImageLoad}></Logo>
                </a>
              </Link>
            </div>
            <div className="CenterHeaderNav">
              <div
                className="headerNavContainer"
                style={this.state.menuIconPosition}
              >
                <nav className=" header">
                  <ul>
                    <li className="linkLiElement">
                      <Link href="/Leistungen">
                        <a linktext="Leistungen">
                          Leistungen
                          <p>Leistungen</p>
                          <div className="hoverBorder"></div>
                        </a>
                      </Link>
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
        <section
          className="pageheader"
          style={{ backgroundImage: `url( ${this.props.logo} )` }}
        >
          <div className="overlay"></div>
          <div className="overlay2"></div>

          <div
            className="pageHeaderWrapper contentBox"
            style={{
              paddingTop: this.state.headerHeight,
              paddingLeft: this.state.logoWidth,
            }}
          >
            <div>
              {this.props.bigHeadline}
              {this.props.smallHeadLine}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Header;

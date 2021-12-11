import React from "react";
import ReactDOM from "react-dom";
import downloadUrl from "../img/logos/Logo3.0.svg";

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
      breakpoints: Array(0, 576, 768, 992, 1200, 1400),
      lowBreakpoint: null,
      highBreakpoint: null,
    };

    this.header = React.createRef();
    this.logo = React.createRef();
  }

  hover() {
    this.state.cssClass
      ? this.setState({ cssClass: null })
      : this.setState({ cssClass: "open" });
  }

  resize = (e) => {
    const headerHeight = this.header.current.clientHeight;
    const logoHeight = this.logo.current.clientHeight;
    const logoWidth = this.logo.current.clientWidth;
    const padding = headerHeight - logoHeight;

    this.setState({ headerHeight: headerHeight + padding });

    if (window.innerWidth > 576) {
      this.setState({ logoWidth: logoWidth });
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
  resizeOnChange = (e) => {
    if (
      (this.state.lowBreakpoint &&
        window.innerWidth < this.state.lowBreakpoint) ||
      (this.state.highBreakpoint &&
        window.innerWidth >= this.state.highBreakpoint)
    ) {
      this.resize();
    }
  };

  componentDidMount() {
    setTimeout(() => {
      this.resize();
    }, 20);
  }

  render() {
    const openSideBar = this.state.cssClass;
    window.addEventListener("resize", this.resizeOnChange);
    return (
      <div className="main">
        <header>
          <div id="headergrid" className="header-grid" ref={this.header}>
            <div className="headerLogoWrapper" ref={this.logo}>
              <a className="mainLogoLink" href="#home">
                <img className="drop-shadow" src={downloadUrl} />
              </a>
            </div>
            <div className="CenterHeaderNav">
              <div className="headerNavContainer">
                <button
                  className="icon-menu drop-shadow icon-BurgerMenu"
                  onClick={() => this.hover()}
                ></button>
                <nav
                  className={openSideBar ? openSideBar + " header" : " header"}
                >
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
        <section className="pageheader">
          <div className="overlay"></div>
          <Pageheader
            addPaddingTop={this.state.headerHeight}
            addPaddingLeft={this.state.logoWidth}
          />
        </section>
        <div className="content">
          <h1 className="">Neue Inhalte</h1>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById("root"));

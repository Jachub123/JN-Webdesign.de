import React from "react";
import ReactDOM from "react-dom";

class Pageheader extends React.Component {
  render() {
    return (
      <div>
        <h2 class="drop-shadow headMediumCaption">Sowie Du, sollte auch</h2>
        <h2 class="drop-shadow headMediumCaption">
          Deine Website ein Unikat sein
        </h2>
        <h2 class="drop-shadow headMediumCaption">Und kein Baukaustenmodell</h2>
      </div>
    );
  }
}

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      class: null,
    };
  }
  hover() {
    this.state.class
      ? this.setState({ class: null })
      : this.setState({ class: "open" });
  }

  render() {
    const dropdown = this.state.class;
    return (
      <div class="main">
        <header class="header-grid">
          <div class="headerLogoWrapper">
            <a class="mainLogoLink" href="#home">
              <img class="drop-shadow" src="/img/Logo.svg" />
            </a>
            <h1>
              Jakob Nonnenmacher <br /> <span>- Web Entwicklung</span>
            </h1>
          </div>
          <div class="CenterHeaderNav">
            <div class="headerNavContainer">
              <button
                class="icon-menu drop-shadow burgermenu-icon"
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
        </header>
        <section class="pageheader">
          <Pageheader />
        </section>
      </div>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById("root"));

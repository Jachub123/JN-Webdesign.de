import bulma from "../node_modules/bulma/bulma.sass";
import styles from "../scss/style.scss";
import React from "react";
import Header from "./Header";

function MyApp({ Component, Pageprops }) {
  return (
    <Component>
      <Header></Header>
    </Component>
  );
}

export default MyApp;

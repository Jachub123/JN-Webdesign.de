import styles from "../scss/style.scss";
import React from "react";
import Header from "./Header";
import Head from "next/head";

function MyApp({ Component, Pageprops }) {
  return (
    <div>
      <Head>
        <title>Webseite erstellen lassen</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component>
        <Header></Header>
      </Component>
    </div>
  );
}

export default MyApp;

import React, { Fragment } from "react";
import { GlobalStyle } from "./globalStyles";
import { DemoScene } from "./DemoScene";

export default function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <DemoScene />
    </Fragment>
  );
}

import React, { Fragment, FunctionComponent } from "react";
import { GlobalStyle } from "./globalStyles";
import { DemoScene } from "./DemoScene";

export const App: FunctionComponent = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <DemoScene />
    </Fragment>
  );
};

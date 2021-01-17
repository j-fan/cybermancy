import React, { Fragment, FunctionComponent } from "react";
import { GlobalStyle } from "./globalStyles";
import { DemoScene } from "./DemoScene";

export const App: FunctionComponent = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <DemoScene />
      <video id="webcam-video" autoPlay muted playsInline />
      <canvas id="webcam-canvas" />
    </Fragment>
  );
};

import React, { Fragment, FunctionComponent } from "react";
import styled, { css } from "styled-components";
import { GlobalStyle } from "./globalStyles";
import { MainScene } from "./MainScene";

const fixToTopAndBehind = css`
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: -1;
`;

const StyledVideo = styled.video`
  ${fixToTopAndBehind}
`;

const StyledCanvas = styled.canvas`
  ${fixToTopAndBehind}
`;

export const App: FunctionComponent = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <MainScene />
      <StyledVideo id="webcam-video" autoPlay muted playsInline />
      <StyledCanvas id="webcam-canvas" />
    </Fragment>
  );
};

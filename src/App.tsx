import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { fitToScreenWithoutOverflow, GlobalStyle } from "./globalStyles";
import { MainScene } from "./MainScene";

const StyledVideo = styled.video`
  ${fitToScreenWithoutOverflow}
`;

const StyledCanvas = styled.canvas`
  position: fixed;
`;

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 100vh;
`;

export const App: FunctionComponent = () => {
  return (
    <AppWrapper>
      <GlobalStyle />
      <MainScene />
      <StyledVideo id="webcam-video" autoPlay muted playsInline />
      <StyledCanvas id="webcam-canvas" />
    </AppWrapper>
  );
};

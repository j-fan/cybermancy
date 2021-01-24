import React, { FunctionComponent } from "react";
import { ResizeObserver } from "@juggle/resize-observer";
import useMeasure from "react-use-measure";
import styled from "styled-components";
import { device, GlobalStyle } from "./globalStyles";
import { MainScene } from "./babylon/MainScene";

const StyledVideo = styled.video`
  height: auto;
  width: 100%;

  @media ${device.mobileL} {
    height: 100%;
    width: auto;
  }
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
  const [ref, { height: videoHeight, width: videoWidth }] = useMeasure({
    polyfill: ResizeObserver,
  });

  return (
    <AppWrapper>
      <GlobalStyle />
      <MainScene width={videoWidth} height={videoHeight} />
      <StyledVideo id="webcam-video" autoPlay muted playsInline ref={ref} />
      <StyledCanvas id="webcam-canvas" />
    </AppWrapper>
  );
};

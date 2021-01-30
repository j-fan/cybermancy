import React, { FunctionComponent } from "react";
import { ResizeObserver } from "@juggle/resize-observer";
import useMeasure from "react-use-measure";
import styled from "styled-components";
import { device, GlobalStyle } from "./globalStyles";
import { MainScene } from "./babylon/MainScene";
import { initFaceDetect } from "./faceApi/faceDetect";

const WEBCAM_VIDEO_ID = "webcam-video";
const WEBCAM_CANVAS_ID = "webcam-canvas";
const FACE_DEBUG_CANVAS_ID = "face-debug";

const WebcamVideo = styled.video`
  height: auto;
  width: 100%;

  @media ${device.mobileL} {
    height: 100%;
    width: auto;
  }
`;

const WebcamCanvas = styled.canvas`
  position: fixed;
`;

const FaceLandmarksDebugCanvas = styled.canvas`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const App: FunctionComponent = () => {
  const [ref, { height: videoHeight, width: videoWidth }] = useMeasure({
    polyfill: ResizeObserver,
  });

  return (
    <AppWrapper>
      <GlobalStyle />
      <MainScene width={videoWidth} height={videoHeight} />
      <WebcamVideo
        id={WEBCAM_VIDEO_ID}
        autoPlay
        muted
        playsInline
        ref={ref}
        onPlay={initFaceDetect}
      />
      <WebcamCanvas id={WEBCAM_CANVAS_ID} />
      <FaceLandmarksDebugCanvas id={FACE_DEBUG_CANVAS_ID} />
    </AppWrapper>
  );
};

export { App, WEBCAM_VIDEO_ID, FACE_DEBUG_CANVAS_ID };

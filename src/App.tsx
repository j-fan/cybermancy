import React, { FunctionComponent, useRef, useState } from "react";
import { ResizeObserver } from "@juggle/resize-observer";
import useMeasure from "react-use-measure";
import styled, { css } from "styled-components";
import { device, GlobalStyle } from "./globalStyles";
import { MainScene } from "./babylon/MainScene";
import { startFaceDetect } from "./faceApi/faceDetect";
import { ModalProvider } from "./components/ModalContext";
import { Info } from "./components/Info";
import { LoadingScreen } from "./components/LoadingScreen";
import { VideoOverlay } from "./components/VideoOverlay";

const WEBCAM_VIDEO_ID = "webcam-video";
const WEBCAM_CANVAS_ID = "webcam-canvas";
const FACE_DEBUG_CANVAS_ID = "face-debug";

type VideoCanvasDimensions = {
  width: number;
  height: number;
};

const WebcamVideo = styled.video`
  height: auto;
  width: 100%;
  transform: scaleX(-1);
  filter: contrast(1.3);

  @media ${device.mobileL} {
    height: 100%;
    width: auto;
  }
`;

const WebcamCanvas = styled.canvas`
  position: fixed;
`;

const FaceLandmarksDebugCanvas = styled.canvas<VideoCanvasDimensions>`
  ${({ width, height }) => css`
    width: ${width}px;
    height: ${height}px;
  `}
  position: absolute;
  transform: scaleX(-1);
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
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [
    setUseMeasureRef,
    { height: videoCanvasHeight, width: videoCanvasWidth },
  ] = useMeasure({
    polyfill: ResizeObserver,
  });

  const [isFaceDetectReady, setIsFaceDetectReady] = useState(false);

  return (
    <ModalProvider>
      <AppWrapper>
        <GlobalStyle />
        <MainScene
          width={videoCanvasWidth}
          height={videoCanvasHeight}
          trueVideoWidth={videoRef.current?.videoWidth ?? 0}
          trueVideoHeight={videoRef.current?.videoHeight ?? 0}
          setFaceDetectReady={() => setIsFaceDetectReady(true)}
        />
        <VideoOverlay />
        <WebcamVideo
          id={WEBCAM_VIDEO_ID}
          autoPlay
          muted
          playsInline
          ref={(ref) => {
            setUseMeasureRef(ref);
            videoRef.current = ref;
          }}
          onPlay={startFaceDetect}
        />
        <WebcamCanvas id={WEBCAM_CANVAS_ID} />
        <FaceLandmarksDebugCanvas
          id={FACE_DEBUG_CANVAS_ID}
          width={videoCanvasWidth}
          height={videoCanvasHeight}
        />
        <Info />
        <LoadingScreen isFaceDetectReady={isFaceDetectReady} />
      </AppWrapper>
    </ModalProvider>
  );
};

export { App, WEBCAM_VIDEO_ID, FACE_DEBUG_CANVAS_ID };

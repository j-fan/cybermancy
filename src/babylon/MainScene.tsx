import React, { FunctionComponent, useCallback, useState } from "react";
import { Engine, Scene, SceneEventArgs } from "react-babylonjs";
import { Color4, Vector3 } from "@babylonjs/core/Maths/math";
import styled, { css } from "styled-components";
import { Camera, BaseTexture } from "@babylonjs/core";
import { runDetections } from "../faceApi/faceDetect";
import { FaceLandmarks68 } from "@vladmandic/face-api";
import { InteractiveModels } from "./InteractiveModels";
import { useModal } from "../components/Modal";
// import "@babylonjs/inspector";

const Wrapper = styled.div<{ width: number; height: number }>`
  z-index: 99;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  canvas {
    ${({ width, height }) => css`
      width: ${width}px;
      height: ${height}px;
    `}
  }
`;

type MainSceneProps = {
  trueVideoWidth: number;
  trueVideoHeight: number;
  width: number;
  height: number;
};

const ENVIRONMENT_IMG_URL = "./images/environment.dds";

const MainScene: FunctionComponent<MainSceneProps> = ({
  width,
  height,
  trueVideoHeight,
  trueVideoWidth,
}) => {
  const [hdrTexture, setHdrTexture] = useState<BaseTexture | undefined>(
    undefined
  );
  const [faceLandmarks, setFaceLandmarks] = useState<
    FaceLandmarks68 | undefined
  >();

  const onSceneMounted = ({ scene }: SceneEventArgs) => {
    scene.imageProcessingConfiguration.exposure = 0.6;
    scene.imageProcessingConfiguration.contrast = 1.6;
    // scene.debugLayer.show();
  };

  const hdrTextureRef = useCallback((node) => {
    setHdrTexture(node);
  }, []);

  const beforeRender = async () => {
    const faceResults = await runDetections({
      showDebug: true,
      width,
      height,
    });

    if (faceResults.landmarks) {
      setFaceLandmarks(faceResults.landmarks.landmarks);
    }
  };

  return (
    <Wrapper width={width} height={height}>
      <Engine antialias canvasId="babylonJS" width={width} height={height}>
        <Scene
          clearColor={new Color4(0, 0, 0, 0)}
          onSceneMount={onSceneMounted}
          environmentTexture={hdrTexture}
          beforeRender={beforeRender}
          onReadyObservable={() => {
            console.log("ready");
          }}
        >
          <cubeTexture
            ref={hdrTextureRef}
            name="hdrTexture"
            rootUrl={ENVIRONMENT_IMG_URL}
            createPolynomials={true}
            format={undefined}
            prefiltered={true}
          />

          <arcRotateCamera
            name="camera1"
            alpha={Math.PI / 2}
            beta={Math.PI / 2}
            radius={9.0}
            target={Vector3.Zero()}
            minZ={0.001}
            mode={Camera.ORTHOGRAPHIC_CAMERA}
            orthoLeft={trueVideoWidth}
            orthoTop={0}
            orthoBottom={trueVideoHeight}
            orthoRight={0}
          />

          <hemisphericLight
            name="light1"
            intensity={0.7}
            direction={Vector3.Up()}
          />

          <InteractiveModels faceLandmarks={faceLandmarks} />
        </Scene>
      </Engine>
    </Wrapper>
  );
};

export { MainScene };

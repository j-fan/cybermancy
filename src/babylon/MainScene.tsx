import React, { FunctionComponent, useCallback, useState } from "react";
import { Engine, Scene, SceneEventArgs } from "react-babylonjs";
import { Color4, Vector3 } from "@babylonjs/core/Maths/math";
import styled, { css } from "styled-components";
import { BaseTexture } from "@babylonjs/core";
import { VideoDimensions } from "../App";
import { InteractiveModel } from "./InteractiveModel";
// import "@babylonjs/inspector";

const Wrapper = styled.div<MainSceneProps>`
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

type MainSceneProps = VideoDimensions;
const ENVIRONMENT_IMG_URL = "./images/environment.dds";

const MainScene: FunctionComponent<MainSceneProps> = ({ width, height }) => {
  const [hdrTexture, setHdrTexture] = useState<BaseTexture | undefined>(
    undefined
  );

  const onSceneMounted = ({ scene }: SceneEventArgs) => {
    scene.imageProcessingConfiguration.exposure = 0.6;
    scene.imageProcessingConfiguration.contrast = 1.6;
    // scene.debugLayer.show();
  };

  const hdrTextureRef = useCallback((node) => {
    setHdrTexture(node);
  }, []);

  return (
    <Wrapper width={width} height={height}>
      <Engine antialias canvasId="babylonJS" width={width} height={height}>
        <Scene
          clearColor={new Color4(0, 0, 0, 0)}
          onSceneMount={onSceneMounted}
          environmentTexture={hdrTexture}
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
          />

          <hemisphericLight
            name="light1"
            intensity={0.7}
            direction={Vector3.Up()}
          />

          <InteractiveModel
            name="Cube"
            rootUrl="./3dassets/"
            sceneFilename="cube.glb"
            scaleTo={1}
            position={new Vector3(0, 0, 0)}
            onClick={() => {
              alert("cube clicked");
            }}
          />

          <InteractiveModel
            name="Spikes"
            rootUrl="./3dassets/"
            sceneFilename="spikes.glb"
            scaleTo={1}
            position={new Vector3(0, -1, 0)}
            onClick={() => {
              alert("spike clicked");
            }}
          />

          <InteractiveModel
            name="Boombox"
            rootUrl="./3dassets/BoomBox/"
            sceneFilename="BoomBox.gltf"
            scaleTo={1}
            position={new Vector3(0, 1, 0)}
            onClick={() => {
              alert("boombox clicked");
            }}
          />
        </Scene>
      </Engine>
    </Wrapper>
  );
};

export { MainScene };

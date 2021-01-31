import React, { FunctionComponent, useCallback, useState } from "react";
import { Engine, Scene, SceneEventArgs } from "react-babylonjs";
import { Color3, Color4, Vector3 } from "@babylonjs/core/Maths/math";
import styled, { css } from "styled-components";
import { BaseTexture } from "@babylonjs/core";
import { ExampleObjects } from "./ExampleObjects";
import { VideoDimensions } from "../App";
import { ModelWithProgress } from "./ModelWithProgress";

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

const MainScene: FunctionComponent<MainSceneProps> = ({ width, height }) => {
  const environmentUrl = "./images/environment.dds";
  const [hdrTexture, setHdrTexture] = useState<BaseTexture | undefined>(
    undefined
  );

  const onSceneMounted = (createdArgs: SceneEventArgs) => {
    createdArgs.scene.imageProcessingConfiguration.exposure = 0.6;
    createdArgs.scene.imageProcessingConfiguration.contrast = 1.6;
  };

  const hdrTextureRef = useCallback((node) => {
    setHdrTexture(node);
  }, []);

  return (
    <Wrapper width={width} height={height}>
      <Engine
        antialias
        adaptToDeviceRatio
        canvasId="babylonJS"
        width={width}
        height={height}
      >
        <Scene
          clearColor={new Color4(0, 0, 0, 0)}
          onSceneMount={onSceneMounted}
          environmentTexture={hdrTexture}
        >
          <cubeTexture
            ref={hdrTextureRef}
            name="hdrTexture"
            rootUrl={environmentUrl}
            createPolynomials={true}
            format={undefined}
            prefiltered={true}
          />

          <freeCamera
            name="camera1"
            position={new Vector3(0, 5, -10)}
            setTarget={[Vector3.Zero()]}
          />

          <hemisphericLight
            name="light1"
            intensity={0.7}
            direction={Vector3.Up()}
          />

          <ModelWithProgress
            name="Atom"
            rootUrl="./3dassets/"
            sceneFilename="atom.glb"
            scaleTo={4}
            progressBarColor={Color3.FromInts(255, 165, 0)}
            position={new Vector3(0, 0, 0)}
          />
        </Scene>
      </Engine>
    </Wrapper>
  );
};

export { MainScene };

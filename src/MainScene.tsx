import React, { FunctionComponent, useCallback, useState } from "react";
import { Engine, Scene, SceneEventArgs } from "react-babylonjs";
import { Color3, Color4, Vector3 } from "@babylonjs/core/Maths/math";
import styled, { css } from "styled-components";
import { BaseTexture, Texture } from "@babylonjs/core";

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

type MainSceneProps = {
  width: number;
  height: number;
};

let hdrTexture: BaseTexture | undefined = undefined;
let hdrTextureClone: BaseTexture | undefined = undefined;
const onSceneMounted = (createdArgs: SceneEventArgs) => {
  createdArgs.scene.imageProcessingConfiguration.exposure = 0.6;
  createdArgs.scene.imageProcessingConfiguration.contrast = 1.6;
};

const MainScene: FunctionComponent<MainSceneProps> = ({ width, height }) => {
  const environmentUrl = "./images/environment.dds";
  const [_, setTexturesLoaded] = useState(false);

  const hdrTextureRef = useCallback((node) => {
    hdrTexture = node;
    hdrTextureClone = hdrTexture.clone();
    hdrTextureClone.coordinatesMode = Texture.SKYBOX_MODE;
    setTexturesLoaded(true); // trigger render and props assignment
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

          <sphere
            name="sphereGlass"
            segments={48}
            diameter={3}
            translate={[new Vector3(0, 1, 0), 0.5]}
          >
            <pbrMaterial
              name="glass"
              reflectionTexture={hdrTexture}
              linkRefractionWithTransparency
              indexOfRefraction={0.52}
              alpha={0}
              microSurface={1}
              reflectivityColor={new Color3(0.2, 0.2, 0.2)}
              albedoColor={new Color3(0.85, 0.85, 0.85)}
            />
          </sphere>

          <ground name="ground1" width={6} height={6} subdivisions={2}>
            <pbrMaterial
              name="wood"
              reflectionTexture={hdrTexture}
              environmentIntensity={1}
              specularIntensity={0.3}
              albedoColor={Color3.White()}
              useMicroSurfaceFromReflectivityMapAlpha
            >
              <texture
                url="assets/textures/reflectivity.png"
                assignTo="reflectivityTexture"
              />

              <texture
                url="assets/textures/albedo.png"
                assignTo="albedoTexture"
              />
            </pbrMaterial>
          </ground>
        </Scene>
      </Engine>
    </Wrapper>
  );
};

export { MainScene };

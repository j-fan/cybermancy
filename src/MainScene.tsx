import React, { FunctionComponent } from "react";
import { Engine, Scene } from "react-babylonjs";
import { Color4, Vector3 } from "@babylonjs/core/Maths/math";
import styled from "styled-components";
import { fitToScreenWithoutOverflow } from "./globalStyles";

const Wrapper = styled.div`
  z-index: 99;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  canvas {
    ${fitToScreenWithoutOverflow}
  }
`;

export const MainScene: FunctionComponent = () => {
  return (
    <Wrapper>
      <Engine
        antialias
        adaptToDeviceRatio
        canvasId="babylonJS"
        // width={videoElement?.clientWidth}
        // height={videoElement?.clientHeight}
      >
        <Scene clearColor={new Color4(0, 0, 0, 0)}>
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
            name="sphere1"
            diameter={2}
            segments={16}
            position={new Vector3(0, 1, 0)}
          />

          <ground name="ground1" width={6} height={6} subdivisions={2} />
        </Scene>
      </Engine>
    </Wrapper>
  );
};

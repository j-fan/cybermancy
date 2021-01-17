import React, { FunctionComponent } from "react";
import { Engine, Scene } from "react-babylonjs";
import { Color4, Vector3 } from "@babylonjs/core/Maths/math";

export const MainScene: FunctionComponent = () => (
  <div>
    <Engine antialias adaptToDeviceRatio canvasId="babylonJS">
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
  </div>
);

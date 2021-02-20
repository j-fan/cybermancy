import { Camera, Vector3 } from "@babylonjs/core";
import React, { FunctionComponent } from "react";

type OrthoCameraProps = {
  canvasWidth: number;
  canvasHeight: number;
  name: string;
  isCenteredOnOrigin?: boolean;
};

const OrthoCamera: FunctionComponent<OrthoCameraProps> = ({
  canvasHeight,
  canvasWidth,
  name,
  isCenteredOnOrigin,
}) => {
  let orthoLeft = canvasWidth;
  let orthoTop = 0;
  let orthoBottom = canvasHeight;
  let orthoRight = 0;

  if (isCenteredOnOrigin) {
    orthoLeft = -canvasWidth / 2;
    orthoTop = canvasHeight / 2;
    orthoBottom = -canvasHeight / 2;
    orthoRight = canvasWidth / 2;
  }

  return (
    <arcRotateCamera
      name={name}
      alpha={Math.PI / 2}
      beta={Math.PI / 2}
      /* prevent any rotation caused by mouse */
      upperBetaLimit={Math.PI / 2}
      upperAlphaLimit={Math.PI / 2}
      lowerBetaLimit={Math.PI / 2}
      lowerAlphaLimit={Math.PI / 2}
      radius={100.0}
      target={Vector3.Zero()}
      minZ={0.001}
      mode={Camera.ORTHOGRAPHIC_CAMERA}
      orthoLeft={orthoLeft}
      orthoTop={orthoTop}
      orthoBottom={orthoBottom}
      orthoRight={orthoRight}
    />
  );
};

export { OrthoCamera };

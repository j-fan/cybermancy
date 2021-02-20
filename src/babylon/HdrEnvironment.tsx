import { BaseTexture } from "@babylonjs/core";
import React, { FunctionComponent } from "react";

type HdrEnvironmentProps = {
  hdrTextureRef: (ref: BaseTexture) => void;
  name: string;
};

const ENVIRONMENT_IMG_URL = "./images/environment.dds";

const HdrEnvironment: FunctionComponent<HdrEnvironmentProps> = ({
  hdrTextureRef,
  name,
}) => {
  return (
    <cubeTexture
      ref={hdrTextureRef}
      name={name}
      rootUrl={ENVIRONMENT_IMG_URL}
      createPolynomials={true}
      format={undefined}
      prefiltered={true}
    />
  );
};

export { HdrEnvironment };

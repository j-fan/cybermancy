import { BaseTexture, Color3, Vector3 } from "@babylonjs/core";
import React, { Fragment, FunctionComponent } from "react";

type ExampleObjectsProps = {
  hdrTexture?: BaseTexture;
};

const ExampleObjects: FunctionComponent<ExampleObjectsProps> = ({
  hdrTexture,
}) => {
  return (
    <Fragment>
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

          <texture url="assets/textures/albedo.png" assignTo="albedoTexture" />
        </pbrMaterial>
      </ground>
    </Fragment>
  );
};

export { ExampleObjects };

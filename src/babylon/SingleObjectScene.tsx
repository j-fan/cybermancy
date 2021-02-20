import { Engine, Model, Scene, SceneEventArgs } from "react-babylonjs";
import { Color4, Vector3 } from "@babylonjs/core/Maths/math";
import React, {
  FunctionComponent,
  Suspense,
  useCallback,
  useState,
} from "react";
import { BaseTexture } from "@babylonjs/core";
import { HdrEnvironment } from "./HdrEnvironment";
import { OrthoCamera } from "./OrthoCamera";

const SingleObjectScene: FunctionComponent = () => {
  const [hdrTexture, setHdrTexture] = useState<BaseTexture | undefined>(
    undefined
  );
  const hdrTextureRef = useCallback((node) => {
    setHdrTexture(node);
  }, []);

  const onSceneMounted = ({ scene }: SceneEventArgs) => {
    scene.imageProcessingConfiguration.exposure = 0.6;
    scene.imageProcessingConfiguration.contrast = 1.6;
  };

  return (
    <Engine antialias canvasId="singleObjectScene" width={200} height={200}>
      <Scene
        clearColor={new Color4(0, 0, 0, 0)}
        onSceneMount={onSceneMounted}
        environmentTexture={hdrTexture}
        onReadyObservable={() => {
          console.log("ready");
        }}
      >
        <HdrEnvironment hdrTextureRef={hdrTextureRef} name="hdrTexture" />

        <OrthoCamera
          name="camera1"
          canvasWidth={200}
          canvasHeight={200}
          isCenteredOnOrigin
        />

        <hemisphericLight
          name="light1"
          intensity={0.7}
          direction={Vector3.Up()}
        />

        <Suspense fallback={<box name="fallback" />}>
          <Model
            name="Boombox"
            rootUrl="./3dassets/BoomBox/"
            sceneFilename="BoomBox.gltf"
            reportProgress
            position={new Vector3(0, 0, 0)}
            scaleToDimension={50}
          />
        </Suspense>
      </Scene>
    </Engine>
  );
};

export { SingleObjectScene };

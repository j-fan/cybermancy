import { Vector3, Matrix, Color3 } from "@babylonjs/core";
import React, { FunctionComponent, Suspense, useContext } from "react";
import {
  ILoadedModel,
  Model,
  SceneLoaderContext,
  SceneLoaderContextProvider,
} from "react-babylonjs";
import "@babylonjs/loaders/glTF";

type ProgessFallbackProps = {
  rotation?: Vector3;
  position: Vector3;
  scaleTo: number;
  progressBarColor: Color3;
};

const ProgressFallback: FunctionComponent<ProgessFallbackProps> = ({
  rotation,
  position,
  scaleTo,
  progressBarColor,
}) => {
  const sceneLoaderContext = useContext(SceneLoaderContext);

  let loadProgress = 0;
  if (sceneLoaderContext && sceneLoaderContext.lastProgress) {
    const progress = sceneLoaderContext.lastProgress;
    loadProgress = progress.lengthComputable
      ? progress.loaded / progress.total
      : progress.loaded / 10000; // TODO: provide option to input file size for proper loading.
  }

  return (
    <transformNode name="load-mesh" rotation={rotation} position={position}>
      <box
        key="progress"
        name="boxProgress"
        height={scaleTo / 15}
        width={scaleTo}
        depth={scaleTo / 30}
        scaling={new Vector3(loadProgress, 1, 1)}
        position={new Vector3(scaleTo / 2, 0, scaleTo / 60)}
        setPivotMatrix={[Matrix.Translation(-scaleTo, 0, 0)]}
        setPreTransformMatrix={[Matrix.Translation(-scaleTo / 2, 0, 0)]}
      >
        <standardMaterial
          name="progress-mat"
          diffuseColor={progressBarColor}
          specularColor={Color3.Black()}
        />
      </box>
      <box
        key="back"
        name="boxBack"
        height={scaleTo / 15}
        width={scaleTo}
        depth={scaleTo / 30}
        position={new Vector3(0, 0, scaleTo / -60)}
      />
    </transformNode>
  );
};

type ModelWithSpinner = {
  progressBarColor: Color3;
  rotation?: Vector3;
  position: Vector3;
  scaleTo: number;
  name: string;
  rootUrl: string;
  sceneFilename: string;
  onModelLoaded?: (model: ILoadedModel) => void;
};

const ModelWithProgress: FunctionComponent<ModelWithSpinner> = ({
  progressBarColor,
  rotation,
  position,
  scaleTo,
  name,
  rootUrl,
  sceneFilename,
  onModelLoaded,
}) => {
  return (
    <SceneLoaderContextProvider>
      <Suspense
        fallback={
          <ProgressFallback
            progressBarColor={progressBarColor}
            rotation={rotation}
            position={position}
            scaleTo={scaleTo}
          />
        }
      >
        <Model
          name={name}
          reportProgress
          position={position}
          rootUrl={rootUrl}
          sceneFilename={sceneFilename}
          scaleToDimension={scaleTo}
          rotation={rotation}
          onModelLoaded={onModelLoaded}
        />
      </Suspense>
    </SceneLoaderContextProvider>
  );
};

export { ModelWithProgress };

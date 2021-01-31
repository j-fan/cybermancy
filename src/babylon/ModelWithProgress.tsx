import {
  Vector3,
  Matrix,
  Color3,
  ActionManager,
  SetValueAction,
  ExecuteCodeAction,
} from "@babylonjs/core";
import React, { FunctionComponent, Suspense, useContext } from "react";
import {
  ILoadedModel,
  MeshEventType,
  Model,
  SceneLoaderContext,
  SceneLoaderContextProvider,
  useScene,
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
  onClick?: MeshEventType;
  onHoverOver?: MeshEventType;
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
  onClick,
  onHoverOver,
}) => {
  const scene = useScene();

  const handleModelLoaded = (model: ILoadedModel) => {
    onModelLoaded?.(model);
    if (model && model.meshes && scene) {
      // Only the first mesh in a model is selectable
      // Ensure that your model only has one mesh on export to avoid problems
      const mesh = model.meshes[1];
      mesh.actionManager = new ActionManager(scene);
      mesh.actionManager.registerAction(
        new SetValueAction(
          ActionManager.OnPointerOverTrigger,
          mesh,
          "scaling",
          new Vector3(1.5, 1.5, 1.5)
        )
      );
      mesh.actionManager.registerAction(
        new SetValueAction(
          ActionManager.OnPointerOutTrigger,
          mesh,
          "scaling",
          new Vector3(1, 1, 1)
        )
      );

      if (onHoverOver) {
        mesh.actionManager.registerAction(
          new ExecuteCodeAction(ActionManager.OnPointerOverTrigger, onHoverOver)
        );
      }

      if (onClick) {
        mesh.actionManager.registerAction(
          new ExecuteCodeAction(ActionManager.OnPickTrigger, onClick)
        );
      }
    }
  };

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
          onModelLoaded={handleModelLoaded}
        />
      </Suspense>
    </SceneLoaderContextProvider>
  );
};

export { ModelWithProgress };

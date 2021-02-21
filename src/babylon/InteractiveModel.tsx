import {
  Vector3,
  ActionManager,
  SetValueAction,
  ExecuteCodeAction,
} from "@babylonjs/core";
import React, { FunctionComponent, Suspense } from "react";
import {
  ILoadedModel,
  MeshEventType,
  Model,
  SceneLoaderContextProvider,
  useScene,
} from "react-babylonjs";
import "@babylonjs/loaders/glTF";

type InteractiveModelProps = {
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

const InteractiveModel: FunctionComponent<InteractiveModelProps> = ({
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
      <Suspense fallback={<box name="fallback" />}>
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

export { InteractiveModel };

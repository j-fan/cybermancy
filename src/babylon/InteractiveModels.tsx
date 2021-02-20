import { FaceLandmarks68 } from "@vladmandic/face-api";
import React, { Fragment, FunctionComponent } from "react";
import { ModalProps } from "../components/Modal";
import { faceApiToBabylonCoord } from "../utils/faceApiToBabylonCoord";
import { InteractiveModel } from "./InteractiveModel";

type InteractiveModelsProps = {
  faceLandmarks?: FaceLandmarks68;
  updateModal?: (newModalState: ModalProps) => void;
};

const InteractiveModels: FunctionComponent<InteractiveModelsProps> = ({
  faceLandmarks,
  updateModal,
}) => {
  return (
    <Fragment>
      <InteractiveModel
        name="Cube"
        rootUrl="./3dassets/"
        sceneFilename="cube.glb"
        scaleTo={35}
        position={faceApiToBabylonCoord(faceLandmarks?.getRightEye()[0])}
        onClick={() => {
          updateModal?.({
            description: `woooo ${Math.random()}`,
            isOpen: true,
          });
        }}
      />

      <InteractiveModel
        name="Spikes"
        rootUrl="./3dassets/"
        sceneFilename="spikes.glb"
        scaleTo={50}
        position={faceApiToBabylonCoord(faceLandmarks?.getLeftEye()[0])}
        onClick={() => {
          alert("spike clicked");
        }}
      />
    </Fragment>
  );
};

export { InteractiveModels };

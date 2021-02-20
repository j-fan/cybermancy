import { Vector3 } from "@babylonjs/core";
import { FaceLandmarks68 } from "@vladmandic/face-api";
import React, { Fragment, FunctionComponent } from "react";
import { ModalProps } from "../components/Modal";
import { FortuneCategory, getFaceReading } from "../data/fortuneDataMappers";
import { estimatedAge, estimatedGender } from "../faceApi/faceDetect";
import { faceApiToBabylonCoord } from "../utils/faceApiToBabylonCoord";
import { InteractiveModel } from "./InteractiveModel";

type InteractiveModelsProps = {
  faceLandmarks?: FaceLandmarks68;
  updateModal?: (newModalState: ModalProps) => void;
};

/*
 * Had break encapsulation here by using estimatedAge and estimatedGender directly
 * rather than passing in as props, because using props+useState does not update inside
 * InteractiveModel's onClick handler for some reason...
 */
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
            title: "3d object clicked",
            description: getFaceReading(
              FortuneCategory.CAREER,
              estimatedAge,
              estimatedGender
            ),
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
          updateModal?.({
            title: "3d object clicked",
            description: getFaceReading(
              FortuneCategory.FORTUNE,
              estimatedAge,
              estimatedGender
            ),
            isOpen: true,
          });
        }}
      />

      <InteractiveModel
        name="Boombox"
        rootUrl="./3dassets/BoomBox/"
        sceneFilename="BoomBox.gltf"
        scaleTo={1}
        position={new Vector3(0, 1, 0)}
        onClick={() => {
          alert("boombox clicked");
        }}
      />
    </Fragment>
  );
};

export { InteractiveModels };

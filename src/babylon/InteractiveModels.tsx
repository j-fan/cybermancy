import { Vector3 } from "@babylonjs/core";
import { FaceLandmarks68 } from "@vladmandic/face-api";
import React, { Fragment, FunctionComponent, useEffect, useState } from "react";
import { ModalProps } from "../components/Modal";
import { useDeviceDetect } from "../components/useDeviceDetect";
import { FortuneCategoryData } from "../data/fortuneData";
import {
  FortuneCategory,
  getFaceReading,
  mapFortuneCategoryToFacePoint,
} from "../data/fortuneDataMappers";
import { estimatedAge, estimatedGender } from "../faceApi/faceDetect";
import { faceApiToBabylonCoord } from "../utils/faceApiToBabylonCoord";
import { InteractiveModel } from "./InteractiveModel";

type ModalContentProps = {
  categoryDescription: string;
  reading: string;
};

const ModalContent: FunctionComponent<ModalContentProps> = ({
  categoryDescription,
  reading,
}) => (
  <div>
    <h2>About this facial region</h2>
    <p>{categoryDescription}</p>
    <h2>Your reading</h2>
    <p>{reading}</p>
  </div>
);

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
  const [modelScale, setModelScale] = useState(10);
  const { isMobile } = useDeviceDetect();

  useEffect(() => {
    if (isMobile) {
      setModelScale(20);
    }
  }, [isMobile]);

  return (
    <Fragment>
      {Object.values(FortuneCategory).map((category) =>
        mapFortuneCategoryToFacePoint(category, faceLandmarks).map(
          (facePoint, i) => (
            <InteractiveModel
              key={`${category}-${i}`}
              name={`${category}-model-${i}`}
              rootUrl="./3dassets/"
              sceneFilename={FortuneCategoryData[category].model[i]}
              scale={new Vector3(modelScale, modelScale, modelScale)}
              position={faceApiToBabylonCoord(facePoint)}
              onClick={() => {
                updateModal?.({
                  title: category,
                  description: (
                    <ModalContent
                      {...getFaceReading(
                        category,
                        estimatedAge,
                        estimatedGender
                      )}
                    />
                  ),
                  isOpen: true,
                  imageUrl: `./images/${category}.png`,
                });
              }}
            />
          )
        )
      )}
    </Fragment>
  );
};

export { InteractiveModels };

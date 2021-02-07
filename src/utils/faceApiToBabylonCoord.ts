import { Vector3 } from "@babylonjs/core";
import { Point } from "@vladmandic/face-api";

const faceApiToBabylonCoord = (faceApiCoord?: Point): Vector3 =>
  new Vector3((faceApiCoord?.x ?? 0) * -1, faceApiCoord?.y, -100);

export { faceApiToBabylonCoord };

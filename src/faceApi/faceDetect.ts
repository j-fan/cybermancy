import * as faceApi from "@vladmandic/face-api";
import { Gender } from "@vladmandic/face-api";
import { FACE_DEBUG_CANVAS_ID, WEBCAM_VIDEO_ID } from "../App";

let detector: faceApi.TinyFaceDetectorOptions;
let totalGender = 0;
let totalAge = 0;
let estimatedAge = 0;
let estimatedGender = Gender.MALE;
let successfulAgeGenderDetections = 0;

type FaceDetectOptions = {
  showDebug?: boolean;
  width: number;
  height: number;
};

const startFaceDetect = async () => {
  await faceApi.nets.tinyFaceDetector.loadFromUri("./models");
  await faceApi.nets.ageGenderNet.loadFromUri("./models");
  await faceApi.nets.faceLandmark68TinyNet.loadFromUri("./models");

  const inputSize = 512;
  const scoreThreshold = 0.5;
  detector = await new faceApi.TinyFaceDetectorOptions({
    inputSize,
    scoreThreshold,
  });

  console.log("tinyface loaded");
};

const runFaceLandmarkDetection = async ({
  showDebug,
  width,
  height,
}: FaceDetectOptions) => {
  const result = await faceApi
    .detectSingleFace(WEBCAM_VIDEO_ID, detector)
    .withFaceLandmarks(true);

  const faceLandmarkDebugCanvas = document.getElementById(
    FACE_DEBUG_CANVAS_ID
  ) as HTMLCanvasElement;

  if (showDebug && faceLandmarkDebugCanvas && result) {
    const dimensions = faceApi.matchDimensions(
      faceLandmarkDebugCanvas,
      { width, height },
      true
    );
    const resizedResults = faceApi.resizeResults(result, dimensions);
    faceApi.draw.drawFaceLandmarks(faceLandmarkDebugCanvas, resizedResults);
  }
  return result;
};

const runAgeGenderDetection = async ({ showDebug }: FaceDetectOptions) => {
  const result = await faceApi
    .detectSingleFace(WEBCAM_VIDEO_ID, detector)
    .withAgeAndGender();

  if (result && result.age > 0) {
    successfulAgeGenderDetections++;
    if (result.gender === Gender.FEMALE) {
      totalGender += result.genderProbability;
    } else {
      totalGender -= result.genderProbability;
    }
    totalAge += result.age;
    estimatedAge = totalAge / successfulAgeGenderDetections;
    estimatedGender = totalGender > 0 ? Gender.FEMALE : Gender.MALE;
  }

  if (showDebug) {
    console.log(estimatedAge, estimatedGender);
  }
};

const resetFaceDetection = (): void => {
  console.log("reset face detect");
  totalGender = 0;
  totalAge = 0;
  successfulAgeGenderDetections = 0;
};

const runDetections = async (options: FaceDetectOptions) => {
  if (successfulAgeGenderDetections < 5) {
    await runAgeGenderDetection(options);
  }
  await runFaceLandmarkDetection(options);
  requestAnimationFrame(() => runDetections(options));
};

const initFaceDetect = async (options: FaceDetectOptions): Promise<void> => {
  await startFaceDetect();
  runDetections(options);
};

export { initFaceDetect, estimatedAge, estimatedGender, resetFaceDetection };

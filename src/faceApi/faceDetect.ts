import * as faceApi from "face-api.js";

let estimatedGender = "none";
let estimatedAge = 0;
let detector: faceApi.TinyFaceDetectorOptions;

const startFaceDetect = async () => {
  await faceApi.nets.tinyFaceDetector.loadFromUri("./models");
  await faceApi.nets.ageGenderNet.loadFromUri("./models");

  const inputSize = 512;
  const scoreThreshold = 0.5;
  detector = await new faceApi.TinyFaceDetectorOptions({
    inputSize,
    scoreThreshold,
  });

  console.log("tinyface loaded");
};

const runDetection = async () => {
  const result = await faceApi
    .detectSingleFace("webcam-video", detector)
    .withAgeAndGender();
  return result;
};

let totalGender = 0;
let totalAge = 0;
let successfulDetections = 0;

const initFaceDetect = async (): Promise<void> => {
  await startFaceDetect();
  await runFaceDetection();
};

const runDetectionOnce = async () => {
  const result = await runDetection();

  if (result) {
    successfulDetections++;
    if (result.gender === "female") {
      totalGender += result.genderProbability;
    } else {
      totalGender -= result.genderProbability;
    }
    totalAge += result.age;
    estimatedAge = totalAge / successfulDetections;
    estimatedGender =
      totalGender == 0 ? "none" : totalGender > 0 ? "female" : "male";
  }
};

const runFaceDetection = async (): Promise<void> => {
  const numDetectionsToAverage = 5;
  for (let i = 0; i < numDetectionsToAverage; i++) {
    await runDetectionOnce();
  }
};

const resetFaceDetection = (): void => {
  console.log("reset face detect");
  totalGender = 0;
  totalAge = 0;
  successfulDetections = 0;
};

export {
  initFaceDetect,
  estimatedAge,
  estimatedGender,
  resetFaceDetection,
  runFaceDetection,
};

import * as faceApi from "face-api.js";
import { Gender } from "face-api.js";

let detector: faceApi.TinyFaceDetectorOptions;
let totalGender = 0;
let totalAge = 0;
let estimatedAge = 0;
let estimatedGender = Gender.MALE;
let successfulDetections = 0;

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

const runDetectionOnce = async () => {
  const result = await runDetection();

  if (result && result.age > 0) {
    successfulDetections++;
    if (result.gender === Gender.FEMALE) {
      totalGender += result.genderProbability;
    } else {
      totalGender -= result.genderProbability;
    }
    totalAge += result.age;
    estimatedAge = totalAge / successfulDetections;
    estimatedGender = totalGender > 0 ? Gender.FEMALE : Gender.MALE;
  }

  console.log(estimatedAge, estimatedGender);
};

const resetFaceDetection = (): void => {
  console.log("reset face detect");
  totalGender = 0;
  totalAge = 0;
  successfulDetections = 0;
};

const initFaceDetect = async (): Promise<void> => {
  await startFaceDetect();
  while (successfulDetections < 5) {
    await runDetectionOnce();
  }
};

export { initFaceDetect, estimatedAge, estimatedGender, resetFaceDetection };

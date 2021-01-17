import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { initFaceDetect } from "./faceApi/faceDetect";
import { initCamera } from "./faceApi/webcam";

const initAll = async () => {
  ReactDOM.render(<App />, document.getElementById("app"));
  await initCamera();
  await initFaceDetect();
};

initAll();

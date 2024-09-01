import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { initCamera } from "./faceApi/webcam";
import { registerCachingWebWorker } from "./utils/register-service-worker";

const initAll = async () => {
  ReactDOM.render(<App />, document.getElementById("app"));
  registerCachingWebWorker();
  await initCamera();
};

initAll();

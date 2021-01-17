const initCamera = async (): Promise<void> => {
  const canvasElement = document.getElementById(
    "webcam-canvas"
  ) as HTMLCanvasElement;
  const videoElement = document.getElementById(
    "webcam-video"
  ) as HTMLVideoElement;
  let height = 0;
  let width = 640;
  let aspectRatio: number;

  const setVideoDimensions = () => {
    width = screen.width;
    height = screen.height;
    if (!aspectRatio) {
      aspectRatio = videoElement.videoWidth / videoElement.videoHeight;
    }
    // always fill the shortest side of the window
    if (width < height) {
      videoElement.setAttribute("width", width.toString());
      const newHeight = width / aspectRatio;
      videoElement.setAttribute("height", newHeight.toString());
    } else if (width >= height) {
      videoElement.setAttribute("height", height.toString());
      const newWidth = height * aspectRatio;
      videoElement.setAttribute("width", newWidth.toString());
    }
    canvasElement.setAttribute("width", videoElement.videoWidth.toString());
    canvasElement.setAttribute("height", videoElement.videoHeight.toString());
  };

  videoElement.oncanplay = setVideoDimensions;
  window.addEventListener("resize", () => {
    setVideoDimensions();
  });

  const getWebcam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      videoElement.srcObject = stream;
    } catch (err) {
      alert(`Could not start webcam. ${err}`);
    }
  };

  await getWebcam();
};

export { initCamera };

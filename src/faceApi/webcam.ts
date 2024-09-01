const initCamera = async (): Promise<void> => {
  const videoElement = document.getElementById(
    "webcam-video"
  ) as HTMLVideoElement;

  const getWebcam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: 640,
        },
      });
      videoElement.srcObject = stream;
    } catch (err) {
      alert(`Could not start webcam. ${err}`);
    }
  };

  await getWebcam();
};

export { initCamera };

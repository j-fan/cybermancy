import React from "react";

type DeviceInfo = { isMobile: boolean; isAppleDevice: boolean };

const useDeviceDetect = (): DeviceInfo => {
  const [isMobile, setMobile] = React.useState(false);
  const [isAppleDevice, setIsAppleDevice] = React.useState(false);

  React.useEffect(() => {
    const userAgent =
      typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const mobile = Boolean(
      userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      )
    );
    setMobile(mobile);

    const isApple = Boolean(userAgent.match(/iPhone|iPad|iPod/i));
    setIsAppleDevice(isApple);
  }, []);

  return { isMobile, isAppleDevice };
};

export { useDeviceDetect };

export const inactivityTimeout = (maxMinutes = 1): void => {
  let timeoutId: number;

  const resetTimer = () => {
    clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      window.location.reload();
    }, 60000 * maxMinutes);
  };

  window.addEventListener("load", resetTimer, true);
  window.addEventListener("mousemove", resetTimer, true);
  window.addEventListener("mousedown", resetTimer, true);
  window.addEventListener("touchstart", resetTimer, true);
  window.addEventListener("touchmove", resetTimer, true);
  window.addEventListener("click", resetTimer, true);
  window.addEventListener("keydown", resetTimer, true);
  window.addEventListener("scroll", resetTimer, true);
};

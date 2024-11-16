export function isMobileDevice() {
  if (
    (navigator.userAgent.match(/Android/i) && detectDeviceSize() === 'MOBILE')
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
  ) {
    return true;
  }
  return false;
};
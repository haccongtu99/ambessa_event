'use strict';
import { isMobileDevice } from './useDevice.js';

let isMobileFlag = false;

// temporary
function isMobileScreen() {
  return window.innerWidth <= 938;
}


// function isMobileDevice() {
//   if (
//     (navigator.userAgent.match(/Android/i))
//     || navigator.userAgent.match(/webOS/i)
//     || navigator.userAgent.match(/iPhone/i)
//     || navigator.userAgent.match(/iPod/i)
//     || navigator.userAgent.match(/BlackBerry/i)
//     || navigator.userAgent.match(/Windows Phone/i)
//   ) {
//     return true;
//   }
//   return false;
// };

function handleMode() {
  isMobileFlag = isMobileScreen() || isMobileDevice();
  if (!isMobileFlag) {
    $('#header').removeClass('header-mobile');
    $('#drawer').addClass('d-none');
  } else {
    $('#header').addClass('header-mobile');
    $('#drawer').removeClass('d-none');
  }
}

function handleDrawer() {
  $('.btn-menu-list').click(() => {
    $('#drawer').addClass('drawer-animate-fadein');
    $('#drawer').removeClass('drawer-animate-fadeout');
    // $('#drawer').addClass('animate__slideInLeft');
    // $('#drawer').removeClass('animate__slideOutLeft');
  })

  $('.btn-close-drawer').click(() => {
    $('#drawer').addClass('drawer-animate-fadeout');
    $('#drawer').removeClass('drawer-animate-fadein');
    // $('#drawer').removeClass('animate__slideInLeft');
    // $('#drawer').addClass('animate__slideOutLeft');
  });
}

$(document).ready(() => {
  handleDrawer();
  handleMode();
  window.addEventListener('resize', handleMode);
});

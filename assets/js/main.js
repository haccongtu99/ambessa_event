'use strict';
import { isMobileDevice } from './useDevice.js';

let isMobileFlag = false;

// temporary
function isMobileScreen() {
  return window.innerWidth <= 938;
}

function handleMode() {
  isMobileFlag = isMobileScreen() || isMobileDevice();
  if (!isMobileFlag) {
    $('#header').removeClass('header-mobile');
  } else {
    $('#header').addClass('header-mobile');
  }
}

function handleDrawer() {
  $('.btn-menu-list').click(() => {
    if ($('#drawer').css('display') === 'none') {
      $('#drawer').css('display', 'block');
    }
    $('#drawer').addClass('drawer-animate-fadein');
    $('#drawer').removeClass('drawer-animate-fadeout');
  })

  $('.btn-close-drawer').click(() => {
    $('#drawer').addClass('drawer-animate-fadeout');
    $('#drawer').removeClass('drawer-animate-fadein');
  });
}

$(document).ready(() => {
  handleDrawer();
  handleMode();
  window.addEventListener('resize', handleMode);
});

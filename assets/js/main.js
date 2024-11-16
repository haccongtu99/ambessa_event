'use strict';
let isMobileFlag = false;

// temporary
function isMobileScreen() {
  return window.innerWidth <= 938;
}

// temporary
function isMobileDevice() {
  return /Android|iPhone/i.test(navigator.userAgent);
}

// const raw_data = [
//   {
//     stt: '1',
//     ingame_id: '1234567890',
//     diem_thong_thao: '1000',
//   },
//   {
//     stt: '2',
//     ingame_id: '1234567890',
//     diem_thong_thao: '1000',
//   },
//   {
//     stt: '3',
//     ingame_id: '1234567890',
//     diem_thong_thao: '1000',
//   },
//   {
//     stt: '4',
//     ingame_id: '1234567890',
//     diem_thong_thao: '1000',
//   },
//   {
//     stt: '5',
//     ingame_id: '1234567890',
//     diem_thong_thao: '1000',
//   },
// ];

function handleRankedTable() {
  console.log('>>> handleRankedTable..');
}

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
  handleRankedTable();
});

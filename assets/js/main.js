'use strict';

let ambessa_url = '';
let background_url = '';
let button_url = '';
let title_url = '';
let ranked_bg_url = '';
let screenWidth = window.innerWidth;
let mode = 'desktop';

let isMobileFlag = false;

// temporary
function isMobileScreen() {
  return window.innerWidth <= 938;
}

// temporary
function isMobileDevice() {
  return /Android|iPhone/i.test(navigator.userAgent);
}

function isXsScreen() {
  return window.innerWidth <= 768;
}

function isSmScreen() {
  return window.innerWidth <= 992;
}


function isMdScreen() {
  return window.innerWidth <= 1280;
}


const raw_data = [
  {
    stt: '1',
    ingame_id: '1234567890',
    diem_thong_thao: '1000',
  },
  {
    stt: '2',
    ingame_id: '1234567890',
    diem_thong_thao: '1000',
  },
  {
    stt: '3',
    ingame_id: '1234567890',
    diem_thong_thao: '1000',
  },
  {
    stt: '4',
    ingame_id: '1234567890',
    diem_thong_thao: '1000',
  },
  {
    stt: '5',
    ingame_id: '1234567890',
    diem_thong_thao: '1000',
  },
];

function handleRankedTable() {
  console.log('>>> handleRankedTable..');
}

function handleMode() {
  mode = isMobileFlag ? 'mobile' : 'desktop';
  screenWidth = window.innerWidth;

  button_url = screenWidth <= 390 ? `assets/img/vng/frame1/mobile/mobile_cta.png` : `assets/img/vng/frame1/desktop/desktop_cta.png`;
  title_url = screenWidth <= 390 ? `assets/img/vng/frame1/mobile/mobile_title.png` : `assets/img/vng/frame1/desktop/desktop_title.png`;
  ranked_bg_url = screenWidth <= 390 ? `assets/img/vng/frame1/mobile/mobile_ranked_bg.png` : `assets/img/vng/frame1/desktop/desktop_ranked_bg.png`;

  $('.frame1_cta').attr('src', button_url);
  $('.frame1_title').attr('src', title_url);
  $('.frame1_ranked_bg_img').attr('src', ranked_bg_url);

  if (!isMobileFlag) {
    $('#header').removeClass('header-mobile');
    $('#drawer').addClass('d-none');
  } else {
    $('#header').addClass('header-mobile');
    $('#drawer').removeClass('d-none');
  }
}

function isMobile() {
  isMobileFlag = isMobileScreen() || isMobileDevice();
  handleMode();
}

function handleDrawer() {
  $('.btn-menu-mobile-icon').click(() => {
    console.log('>>> handleDrawer..');
    $('#drawer').addClass('drawer-animate-fadein');
    $('#drawer').removeClass('drawer-animate-fadeout');
  })

  $('.btn-close-drawer').click(() => {
    $('#drawer').addClass('drawer-animate-fadeout');
    $('#drawer').removeClass('drawer-animate-fadein');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  handleDrawer();
  isMobile();
  window.addEventListener('resize', isMobile);
  handleRankedTable();
});
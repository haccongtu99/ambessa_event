'use strict';

let ambessa_url = '';
let background_url = '';
let button_url = '';
let title_url = '';
let ranked_bg_url = '';
// default mode
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
  // $('.frame1_ranked_bg').css('height', '200px');
  // $('#frame1_ranked_table').DataTable({
  //   data: raw_data,
  //   columns: [
  //     { title: 'stt' },
  //     { title: 'ingame_id' },
  //     { title: 'diem_thong_thao' },
  //   ],
  // });
}

function handleMode() {
  mode = isMobileFlag ? 'mobile' : 'desktop';
  ambessa_url = `assets/img/vng/frame1/${mode}_char_ambessa.png`;
  background_url = `assets/img/vng/frame1/${mode}_background.png`;
  button_url = `assets/img/vng/frame1/${mode}_cta.png`;
  title_url = `assets/img/vng/frame1/${mode}_title.png`;
  ranked_bg_url = `assets/img/vng/frame1/${mode}_ranked_bg.png`;

  $('.frame1_char').attr('src', ambessa_url);
  $('.frame1_background').attr('src', background_url);
  $('.frame1_cta').attr('src', button_url);
  $('.frame1_title').attr('src', title_url);
  $('.frame1_ranked_bg_img').attr('src', ranked_bg_url);

  if (!isMobileFlag) {
    $('.frame1_mobile_ranked_bg').addClass('d-none');
    $('#header').removeClass('header-mobile');
    $('#drawer').addClass('d-none');
  } else {
    $('.frame1_mobile_ranked_bg').removeClass('d-none');
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
    $('#drawer').addClass('drawer-animate-fadein');
    $('#drawer').removeClass('drawer-animate-fadeout');
  })

  $('.btn-close-drawer').click(() => {
    console.log('Click close...');
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

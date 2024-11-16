const sectionArray = [1, 2, 3];
const HEIGHT_HEADER = 100;

$(document).ready(function() {
  $('.navbar-nav .nav-item').addClass('inactive');
  $('.navbar-nav .nav-item').eq(0).addClass('active');
  $('.navbar-nav .nav-item').eq(0).removeClass('inactive');
});

$.each(sectionArray, function(index, value) {
  $(document).scroll(function() {
    var offsetSection = $('#' + 'section_' + value).offset().top - HEIGHT_HEADER;
    var docScroll = $(document).scrollTop();
    var docScroll1 = docScroll + 1;

    if (docScroll1 >= offsetSection) {
      $('.navbar-nav .nav-item').removeClass('active');
      $('.navbar-nav .nav-item').addClass('inactive');
      $('.navbar-nav .nav-item').eq(index).addClass('active');
      $('.navbar-nav .nav-item').eq(index).removeClass('inactive');
    }
  });
});
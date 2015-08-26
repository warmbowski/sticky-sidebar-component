var scroller = function() {
  var sbPos = $(window).scrollTop();
  var topThresh = $('.sticky-col').offset().top;
  var botThresh = topThresh + $('.sticky-col').height() - $('.sticky-content').height() - (parseInt($('.sticky-content').css('paddingTop')) * 2);
  $('div.scroll-output').text('scrollTop:' + sbPos);

  if(sbPos > topThresh) {
    if(sbPos > botThresh) {
      // stick-to-bot only
      $('.sticky-content').removeClass('stick-to-top');
      $('.sticky-content').addClass('stick-to-bot');
    } else {
      // stick-to-top only
      $('.sticky-content').removeClass('stick-to-bot');
      $('.sticky-content').addClass('stick-to-top');
    }
  } else {
    //no stick-to class
    $('.sticky-content').removeClass('stick-to-top');
    $('.sticky-content').removeClass('stick-to-bot');
  }
};
Meteor.startup(function(){
  scroller();
  $(window).scroll(scroller);
});

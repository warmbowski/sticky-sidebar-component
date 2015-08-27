var scroller = function() {
  var stickyCol = document.getElementById('rightbar');
  var stickyColBox = stickyCol.getBoundingClientRect();
  var stickyContentBox = stickyCol.childNodes[0].getBoundingClientRect();

  if(stickyContentBox.bottom >= stickyColBox.bottom ) {
    if(stickyColBox.top <= 0 && stickyContentBox.top > 0) {
      $('.sticky-content').addClass('stick-to-top');
      $('.sticky-content').removeClass('stick-to-bot');
    } else {
      $('.sticky-content').addClass('stick-to-bot');
      $('.sticky-content').removeClass('stick-to-top');
    }
  } else {
    if(stickyContentBox.top >= 0 && stickyColBox.top >= 0) {
      $('.sticky-content').removeClass('stick-to-top');
      $('.sticky-content').removeClass('stick-to-bot');
    } else {
      $('.sticky-content').addClass('stick-to-top');
      $('.sticky-content').removeClass('stick-to-bot');
    }
  }
};

Meteor.startup(function(){
  React.render(<ContentContainer />, document.getElementById('yield-content-container'));
  scroller();
  $(window).scroll(scroller);
});

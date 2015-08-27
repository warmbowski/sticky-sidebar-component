var scroller = function() {
  
};

Meteor.startup(function(){
  React.render(<ContentContainer />, document.getElementById('yield-content-container'));
  scroller();
  $(window).scroll(scroller);
});

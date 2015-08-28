Aside = React.createClass({
  componentDidMount: function() {
      window.addEventListener('scroll', this.handleScroll);
  },

  componentWillUnmount: function() {
      window.removeEventListener('scroll', this.handleScroll);
  },

  handleScroll: function(evt) {
    var stickyCol = this.getDOMNode();
    var stickyColBox = stickyCol.getBoundingClientRect();
    var stickyContent = stickyCol.childNodes[0];
    var stickyContentBox = stickyContent.getBoundingClientRect();

    if(stickyContentBox.bottom >= stickyColBox.bottom ) {
      if(stickyColBox.top <= 0 && stickyContentBox.top > 0) {
        stickyContent.classList.add('stick-to-top');
        stickyContent.classList.remove('stick-to-bot');
      } else {
        stickyContent.classList.add('stick-to-bot');
        stickyContent.classList.remove('stick-to-top');
      }
    } else {
      if(stickyContentBox.top >= 0 && stickyColBox.top >= 0) {
        stickyContent.classList.remove('stick-to-top');
        stickyContent.classList.remove('stick-to-bot');
      } else {
        stickyContent.classList.add('stick-to-top');
        stickyContent.classList.remove('stick-to-bot');
      }
    }
  },

  render: function() {
    return (
      <aside id="rightbar" className="sticky-col">
        <StickyContent list={this.props.list}/>
      </aside>
    );
  }
});

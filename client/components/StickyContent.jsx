StickyContent = React.createClass({
  getDefaultProps: function() {
    return {
      list: []
    }
  },

  render: function() {
    var listItems = this.props.list;
    if(listItems) {
      var listHTML = listItems.map(function(item, index) {
        var words = item.split(' ');
        return (
          <div className='list' key={index}>{words[0]} {words[1]} {words[2]}</div>
        );
      });
    }

    return (
      <div className='sticky-content'>
        <h4>Trending</h4>
        <p className='sidebar'>
          {listHTML}
        </p>
      </div>
    );
  }
});

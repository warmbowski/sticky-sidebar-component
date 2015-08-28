ContentContainer = React.createClass({

  getInitialState: function() {
    return { articleImg: '', articleContent: '', asideContent: '' };
  },

  componentDidMount: function() {
    var url = this.props.textSrc;
    if(parseInt(this.props.textLength) > 1) {
      url += '&paras=' + this.props.textLenth;
    }

    $.get(url, function(response) {
      var list = response.text.split('<p>')[1].split('.  ');
      if (this.isMounted()) {
        this.setState({
          articleImg: this.props.picSrc,
          articleContent: response.text,
          asideContent: list
        });
      }
    }.bind(this));
  },

  render: function() {
    return (
      <section id="main" className="flexbox-container">
        <Article image={this.state.articleImg} content={this.state.articleContent}/>
        <Aside list={this.state.asideContent}/>
      </section>
    );
  }
});

Article = React.createClass({

  render: function() {
    return (
      <article id="content">
        <img className="article-image" src={this.props.image}/>
        <span dangerouslySetInnerHTML={{__html: this.props.content}} />
      </article>
    );
  }
});

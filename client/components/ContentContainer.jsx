ContentContainer = React.createClass({

  render: function() {
    return (
      <section id="main" className="flexbox-container">
        <Article />
        <Aside />
      </section>
    );
  }
});

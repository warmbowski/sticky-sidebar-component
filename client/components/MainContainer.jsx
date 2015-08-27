MainContainer = React.createClass({

  render: function() {
    return (
      <section id="main" class="flexbox-container">
        <Article />
        <Aside />
      </section>
    );
  }
});

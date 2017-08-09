const ContextMenu = React.createClass({
   getInitialState: function() {
    return {
      contexMenuShow: true
    };
  },

    toggleClass() {
    this.setState({
      contexMenuShow: !this.state.contexMenuShow
    })
  },

  render() {
    return (
      <div id='context-menu' className={this.state.contexMenuShow ? 'context-menu' : null} onClick={this.toggleClass}>
        <ul>
          <li>First</li>
          <li>Second</li>
        </ul>
      </div>
    )
  }
})

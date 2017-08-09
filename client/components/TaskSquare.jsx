import React from 'react'
import CreateReactClass from 'create-react-class'

const TaskSquare = React.createClass({

  getInitialState: function() {
    return {
      color: 'red'
    };
  },

  changeColor(e) {
    e.preventDefault()

    if (this.state.color == 'red') {
       this.setState({
   color: 'yellow'
 })
  } else if (this.state.color == 'yellow') {
    this.setState({
      color: 'blue'
    })
  } else if (this.state.color == 'blue' || this.state.color == 'purple') {
    this.setState({
      color: 'red'
    })
  }

},

 render() {
    return (
      <div className='square' style={{backgroundColor: this.state.color}} onClick={this.changeColor} ></div>
    );
  }
});

export default TaskSquare

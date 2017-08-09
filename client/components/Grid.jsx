import React from 'react'
import CreateReactClass from 'create-react-class'

import TaskSquare from './TaskSquare'

const MainBoard = React.createClass({
  render() {
    return (
      <div id='mainBoard'>
        <TaskSquare />
        <TaskSquare />
        <TaskSquare />
        <TaskSquare />
      </div>
    )
  }
})

export default MainBoard

import React from 'react'
import CreateReactClass from 'create-react-class'

import Header from './Header'
import Calendar from './Calendar'

export default CreateReactClass({
  render() {
    return (
      <div>
        <Header />
        <Calendar />
      </div>
    )
  }
})

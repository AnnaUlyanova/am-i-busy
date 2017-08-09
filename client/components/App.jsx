import React from 'react'
import CreateReactClass from 'create-react-class'

import Header from './Header'
import Grid from './Grid'

export default CreateReactClass({
  render() {
    return (
      <div>
        <Header />
        <Grid />
      </div>
    )
  }
})

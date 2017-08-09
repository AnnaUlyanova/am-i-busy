 import React from 'react'
 import ReactDOM from 'react-dom'
// import {Router, IndexRoute, Route, HashRouter} from 'react-router-dom'
//
// import App from './components/App'
// import AucklandWeather from './components/AucklandWeather'
//
// document.addEventListener('DOMContentLoaded', () => {
//   ReactDOM.render(
//     (<HashRouter>
//       <div>
//         <Route exact path='/' component={App} />
//       </div>
//     </HashRouter>
//   ),
//     document.getElementById('app')
//   )
// })

const Title = React.createClass({
  render() {
    return (
      <div>
        <h1>Title</h1>
      </div>
    );
  }
});

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

const MainBoard = React.createClass({
  render() {
    return (
      <div id='mainBoard'>
        <Title />
        <TaskSquare />
        <TaskSquare />
        <TaskSquare />
        <TaskSquare />
        <ContextMenu />
      </div>
    )
  }
})

ReactDOM.render(<MainBoard />, document.getElementById("app"));

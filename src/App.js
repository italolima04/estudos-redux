import React, { Component } from 'react'
import {Provider} from 'react-redux'

import  Video from './components/Video'
import SideBar from './components/SideBar'

import store from './store'

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Video/>
          <SideBar/>
        </Provider>
      </div>
    )
  }
}

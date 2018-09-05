import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import appState from './store/app-state';
import {Provider} from 'mobx-react';
import {observer} from "mobx-react";
import moment from 'moment';
import Tab  from './my-comment/antd/Tab';

class App extends Component {
  render() {
    const momentTime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
    return (
      <div className="App" appState={appState}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <h2>moment</h2>
          <div>
              moment:{momentTime}
          </div>
          <h2>
              antd(UI库)
          </h2>
          <Tab></Tab>
          <hr/>
          <div>
              {/*{this.props.appState.count}*/}
          </div>
      </div>
    );
  }
}

export default App;

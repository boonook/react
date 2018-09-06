import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import appState from './store/app-state';
import {Provider} from 'mobx-react';
import moment from 'moment';
import Tab  from './my-comment/antd/Tab';
import Cookie from './my-comment/cookie/cookie';
import Routes from './router/Router';
import PassValue from './my-comment/pass-value/PassValue'
class App extends Component {
  render() {
    const momentTime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
    return (
      <div className="App">
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
              antd(UI库)+mobx使用实例
          </h2>
          <Provider  appState={appState}>
              <Tab></Tab>
          </Provider>
          <hr/>
          <h2>Cookie使用实例</h2>
          <div>
              <Cookie></Cookie>
          </div>
          <hr/>
          <h2>路由</h2>
          <div>
              <Routes></Routes>
          </div>
          <hr/>
          <h2>组件传值</h2>
          <div>
              <PassValue></PassValue>
          </div>
      </div>
    );
  }
}

export default App;

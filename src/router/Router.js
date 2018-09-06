import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom';
import About from './router-about/About';
import Home from './router-home/Home';
import List from './router-list/List';
import Main from './router-main/Main';
import NotFound from './router-notFound/NotFound';

export default class Routes extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/list">List</Link></li>
                        <li><Link to="/main">Main</Link></li>
                    </ul>
                    <hr/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Redirect from='/home' to='/'/>
                         {/*当我们在地址栏中直接输入home是的跳转 */}
                        <Route path="/about" component={About}/>
                        <Route path="/list" component={List}/>
                        <Route path="/main" component={Main}/>
                        <Route component={NotFound}/>
                        {/*当我们在地址栏中输入的之不存再时跳转*/}
                    </Switch>
                </div>
            </Router>
        )
    }
}
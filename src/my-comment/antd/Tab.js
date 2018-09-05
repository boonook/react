import React, { Component } from 'react';
import { Tabs } from 'antd';
import {observer,inject} from 'mobx-react';
// import PropTypes from 'prop-types'
const TabPane = Tabs.TabPane;

function callback(key) {
    console.log(key);
   // alert(key);
}

@inject('appState') @observer
class Tab extends Component {
    constructor(){
        super()
        this.changeName = this.changeName.bind(this)


    }

    componentDidMount(){

    }

    changeName(event){
        this.props.appState.changeName(event.target.value);
    }

    render() {
        return(
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Tab 1" key="1">
                    <p>{this.props.appState.msg}</p>
                    <p>{this.props.appState.name}</p>
                 </TabPane>
                <TabPane tab="Tab 2" key="2">
                    <div>
                        <input type="text" onChange={this.changeName}/>
                    </div>
                </TabPane>
                <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
            </Tabs>
        )
    }
}
export default Tab;

// Tab.prototype = {
//     appState:PropTypes.object.isRequired,//数据类型为对象，不可以为空
// };

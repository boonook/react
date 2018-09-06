import React,{Component} from 'react';
import { Button } from 'antd';
import SonClick from './SonCllick/SonClick';
class ParentClick extends Component{
    click = (e) => {
        this.child.myName()
    }

    onRef = (ref) => {
        this.child = ref
    }
    ///
    MakeMoney(){
        alert("我在挣钱!");
    }
    render(){
        return(
            <div>
                <Button type="primary" onClick={this.click}>我是父组件，我要去触发子组件的事件</Button>
                <div>
                    <SonClick ref="child" onRef={this.onRef} MakeMoney={this.MakeMoney}></SonClick>
                </div>
            </div>
        )
    }
}

export default ParentClick;
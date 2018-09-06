import React,{Component} from 'react';

class PassValueSon extends Component{
    constructor(props){
        super(props);
    }
    handerClick(){
        this.props.changeChild2Color('green');
    }
    render(){
        return(
            <div>
                <h3>我是子组件1</h3>
                <div>
                    我是父组件传递过来的:{this.props.text}
                </div>
                <div>
                    <input onChange={this.props.handleEmail}/>
                </div>
                <hr/>
                <h2>组件之间传值（更改组件的颜色）</h2>
                <button onClick={(e)=>{this.handerClick(e)}}>改变PassValueSon2的背景颜色</button>
            </div>
        )
    }
}
export default PassValueSon;
import React,{Component} from 'react';

class PassValueSon extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div style={{background:this.props.bgColor}}>
                <h3>我是子组件2</h3>
                <div>
                    <input type="text" onChange={this.props.product}/>
                </div>
                <div>
                    <p>PassValueSon2的背景颜色{this.props.bgColor}</p>
                </div>
            </div>
        )
    }
}
export default PassValueSon;
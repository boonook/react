import React,{Component} from 'react';

class SonClick extends Component{
    constructor(props){
        super(props);
        this.state = {value: ''};
    }
    componentDidMount() {
        this.props.onRef(this);
    }
    myName = () => {
        this.setState({value:'boonook'});
    }
    StudyMakeMoney=()=>{ // 学习挣钱，调用父组件方法
       this.props.MakeMoney();
   }
    render(){
        return(
            <div>
                我是子组件
                <input value={this.state.value} type="text"/>
                <div>
                    <button onClick={this.StudyMakeMoney}>调用父组件中的方法</button>
                </div>
            </div>
        )
    }
}

export default SonClick;
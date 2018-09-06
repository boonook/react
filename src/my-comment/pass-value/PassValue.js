import React,{Component} from 'react';
import PassValueSon from './pass-value-son/PassValueSon'
import PassValueSon2 from './pass-value-son/PassValueSon2'
class PassValue extends Component{
    constructor(props){
        super(props);

        ///状态
        this.state = {
            text:'aaa',
            inputs:'',
            child2BgColor:'#999'
        };
        // this.click = this.click.bind(this);
    }
    onChild2BgColoChange(color){
        this.setState({
            child2BgColor:color
        })
    }

    ///属性 类型
    static propTypes = {

    };

    ///属性默认值
    static defaultProps = {

    };


    ///已经渲染
    componentDidMount() {
        //window.onload
        setInterval(()=>{
            const text = `2333${Math.random()}`;
            this.setState({text});
            this.setState(()=>{
                return {text}
            },()=>{
                console.log('finish')
            });
        },1000);

    }

    ///虚拟dom生成 将要渲染
    componentWillMount() {
        //create
    }

    ///组件更新
    componentDidUpdate() {
        //update
    }



    ///组价属性更新
    componentWillReceiveProps(props,state,contex) {

    }

    ///组件是否更新 返回 true更新
    shouldComponentUpdate() {
        return true
    }
    handleEmail(event){
        this.setState({inputs: event.target.value});
    }
    render(props){
        return(
            <div>
                <h3>我是父组件</h3>
                <div>
                    <p>{this.state.text}</p>
                </div>
                <div>
                    <p>我是子组件传递过来的值：{this.state.inputs}</p>
                </div>
                <hr/>
                <div>
                    <PassValueSon changeChild2Color={(color)=>{this.onChild2BgColoChange(color)}} text={this.state.text} handleEmail={this.handleEmail.bind(this)}></PassValueSon>
                </div>
                <div>
                    <PassValueSon2 bgColor={this.state.child2BgColor}></PassValueSon2>
                </div>

            </div>
        )
    }
}
export default PassValue;
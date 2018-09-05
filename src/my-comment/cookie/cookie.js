import React, { Component } from 'react';
import { Button } from 'antd';
import cookie from 'react-cookies'

class Cookie extends Component {
    constructor(props){
       super(props);
       this.state = {value: 'boonook'};
    }

    submit = (e,data)=>{
        cookie.save('userId', this.state.value)
    };

    render() {
        return(
            <div>
               <p><input value={this.state.value} type="text"/></p>
              <Button type="primary" onClick={this.submit.bind(this)}>Primary</Button>
            </div>
        )
    }
}

export default Cookie;
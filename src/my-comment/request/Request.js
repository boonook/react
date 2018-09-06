import React,{Component} from 'react';
import http from '../../libs/http'

class Footer extends React.Component{
    async getStudentList(){
        const res = await http.post('/app/mobile/login/',{name:'boonook',passworld:'123456'});
        console.log(res);
    }
    componentDidMount(){
        this.getStudentList();
    }
    render(){
        return(
            <div>axios封装</div>
        )
    }
}

export default Footer;
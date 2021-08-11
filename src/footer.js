import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import './index.css'; 
import App from './App'; 
import Demo from './Demo'

const user = {
    firstName : 'Loc',
    lastName : 'Nguyen'
    
}
function wellcome(user){
    return <h1>Hi 10point {user.lastName}</h1>
}

class footer extends Component{
    render(){
        return (
            <div>
                test footer {wellcome(user)}    
                <Demo />
            </div>
        )
    }
}
export default footer
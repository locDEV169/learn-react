import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import './index.css'; 
import App from './App'; 
import Demo from './Demo'

class test extends Component{
    render(){
        return (
            <div>
                test component
                <Demo />
            </div>
        )
    }
}
export default test
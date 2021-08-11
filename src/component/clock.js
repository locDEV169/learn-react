import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import '../css/header.css';


class Clock extends Component{
    
    constructor(props) {
        super(props)
        this.state = {date: new Date()}
        console.log('1')
    }
    
    render(){
        console.log('2')
        return (
            <div>
              <p>It is {this.state.date.toLocaleTimeString()}</p>
            </div>
        );
        
    }

    
}
export default Clock

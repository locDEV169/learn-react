import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import '../css/header.css';



const user = {
    firstName : 'Loc',
    lastName : 'Nguyen'
    
}
function wellcome(user){
    return <h1>Hi user {user.firstName}</h1>
}

class header extends Component{
    render(){
        return (
            <div className='header'>
                test Header {wellcome(user)}
                
            </div>
        )
    }
}
export default header
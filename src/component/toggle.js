import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import '../css/header.css';

    function UserGreeting(props) {
        return <h1>Welcome back!</h1>;
    }
  
    function GuestGreeting(props) {
        return <h1>Please sign up.</h1>;
    }

  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }

class Toggle extends Component {
    constructor(props) {
        super(props)
        this.state = {isToggleOn: true}
        this.handleClick = this.handleClick.bind(this)
    }
    // ?????
    handleClick(){
        this.setState(state =>({ // set theo đúng định dạng state trên contructor
            isToggleOn: !state.isToggleOn
        }));
    }

    render(){
        const isToggleOn = true;
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? "on" : "off"}
            </button>,
            
            <button onClick={this.handleClick}>
                <h3>Test function for Toggle</h3>
                {this.state.isToggleOn ? "on" : "off"}
                <Greeting isLoggedIn={isToggleOn} />,
            </button>
        )
    }
}
export default Toggle;
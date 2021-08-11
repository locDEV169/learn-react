import React, {Component} from 'react'
import ReactDOM from 'react-dom';

function Contacts() {
    return <div className="Contacts" />;
}

function Chat() {
  return <div className="Chat" />;
}

function SplitPane(props) {
  return (
    <div className="SplitPane">
        <p>props.left của split pane</p>
        
      <div className="SplitPane-left">
        {props.left}
      </div>
      <p>props.right của split pane</p>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}
  

  
class Example2 extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <SplitPane
                left={<Contacts />}
                right={<Chat />} 
                />
        );
    }
}
export default Example2
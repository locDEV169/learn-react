import React,{Component,useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {
    PopupboxManager,
    PopupboxContainer
} from 'react-popupbox';
import './Popup.css'
import Popup from './Popup';

function Example() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }

function AppPopUp(){
    // this.state = {
    //     count: 0
    // }
    // thay vì this.state giống bên class thì đối với function sẽ this.state như sau
    const [count, setCount] = useState(0);
    //
    const [buttonPopup,setButtonPopup] = useState(false);
    const [timePopup, setTimePopup] = useState(false);

    useEffect(() => {
        setTimeout(() =>{
            setTimePopup(true);
        },3000);
    },[]);

    return(
        <div>
            <div>
                <p></p>
                <p style={{color:"red"}}>Test useState</p>
                    {/* <p>You clicked {this.state.count} times</p> */}
                    <p>You clicked {count} times</p>
                <h3>
                    <button onClick={() => setCount(count + 1)} >Zoom</button>
                </h3>
            </div>
            <h2>Test App for React-PopUp</h2>
            <button onClick={() => setButtonPopup(true)}>Open PopUp</button>

            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h3>My Popup Test</h3>
                <p>this is my button trigger popup</p>
            </Popup>

            <Popup trigger={timePopup} setTrigger={setTimePopup}>
                <h3>My Time Popup</h3>
                <p>this is my Time trigger popup</p>
            </Popup>
        </div>
    )
}
export default AppPopUp
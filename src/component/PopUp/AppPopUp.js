import React,{Component,useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {
    PopupboxManager,
    PopupboxContainer
} from 'react-popupbox';
import './Popup.css'
import Popup from './Popup';

function AppPopUp(){
    const [buttonPopup,setButtonPopup] = useState(false);
    const [timePopup, setTimePopup] = useState(false);

    useEffect(() => {
        setTimeout(() =>{
            setTimePopup(true);
        },3000);
    },[]);

    return(
        <div>
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
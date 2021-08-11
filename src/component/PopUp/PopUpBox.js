import React,{Component,useState} from 'react';
import ReactDOM from 'react-dom';
import {
    PopupboxManager,
    PopupboxContainer
} from 'react-popupbox';
import AppPopUp from './AppPopUp';
import './Popup.css'

function Popup(props){
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn">Close</button>
                {props.children}
            </div>
        </div>
    ) : "";
}
// const [buttonPopup, setButtonPopup] = useState(false);

class PopUpBox extends Component {
    constructor(props){
        super(props)
        this.state={

        }
        this.updatePopupbox = this.updatePopupbox.bind(this)
    }
    openPopupbox() {
        // content in ra chuỗi kí tự 
        // const content = (
        //   <div>
        //     <p className="quotes">Work like you don't need the money.</p>
        //     <p className="quotes">Dance like no one is watching.</p>
        //     <p className="quotes">And love like you've never been hurt.</p>
        //     <span className="quotes-from">― Mark Twain</span>
        //   </div>
        // )
        // PopupboxManager.open({ content })
        // content in ra ảnh 
        const content = <img url="static/demo.jpg" />
        PopupboxManager.open({
          content,
          config: {
            titleBar: {
              enable: true,
              text: 'Meow!'
            },
            fadeIn: true,
            fadeInSpeed: 500
          }
        })
    }
    //Hiện thị ra 1 cái form update or ...
    updatePopupbox() {
        const content = (
          <div>
            <span>Update popupbox with new content and config</span>
            <button onClick={PopupboxManager.close}>Close</button>
          </div>
        )
  
        PopupboxManager.update({
          content,
          config: {
            titleBar: {
              text: 'Updated!'
            }
          }
        })
    }
    // openPopupbox() {
    //     const content = (
    //       <div>
    //         <span>Open popupbox</span>
    //         <button onClick={this.updatePopupbox}>Update!</button>
    //       </div>
    //     )
  
    //     PopupboxManager.open({
    //       content,
    //       config: {
    //         titleBar: {
    //           enable: true,
    //           text: 'Step 1'
    //         },
    //         fadeIn: true,
    //         fadeInSpeed: 500
    //       }
    //     })
    //   }
    
    render() {
      return (
          <div>
            <p>------------------------------------</p>
            <h2 style={{color:"red"}}>My Popup Test</h2>
            <button onClick={this.openPopupbox}>Click me</button>
            <PopupboxContainer />
            <h3 style={{color:"red"}}>fuction test</h3>
            <p>link example: https://www.youtube.com/watch?v=i8fAO_zyFAM</p>
            {/* <button onClick={() => setButtonPopup(true)}>Open PopUp</button> */}
            
            {/* <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h3>My Popup Test</h3>
            </Popup> */}
          </div>
        )
      }
}
export default PopUpBox
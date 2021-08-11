import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {
    PopupboxManager,
    PopupboxContainer
} from 'react-popupbox';

class PopUpBox extends Component {
    constructor(props){
        super(props)
    }
    openPopupbox() {
        const content = (
          <div>
            <p className="quotes">Work like you don't need the money.</p>
            <p className="quotes">Dance like no one is watching.</p>
            <p className="quotes">And love like you've never been hurt.</p>
            <span className="quotes-from">― Mark Twain</span>
          </div>
        )
        PopupboxManager.open({ content })
    }
    render() {
        return (
          <div>
            <button onClick={this.openPopupbox}>Click me</button>
            <PopupboxContainer />
          </div>
        )
      }
}
export default PopUpBox
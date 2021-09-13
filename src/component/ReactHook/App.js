import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import ColorBox from "./ColorBox";


class App extends Component {
    render(){
        return (
            <>
                {this.props.children}
                <ColorBox />
            </>
        )
    }
}
export default withRouter(App);


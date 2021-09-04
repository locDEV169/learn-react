import React, { Component } from "react";

import NumberContext from "./NumberContext";

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 5,
            random: 0
        };

        this.updateNumber = this.updateNumber.bind(this);
    }

    updateNumber() {
        let num = this.state.number
        let {random,number} = this.state
        this.setState({
            random: Math.random(),
            number: number + random
        });
    }

    render() {
        let {random,number} = this.state
        return (
            <NumberContext.Provider
                value={{
                    number: this.state.number,
                    updateNumber: this.updateNumber
                }}
            >
                <p>{number}, {random}</p>
                {this.props.children}
            </NumberContext.Provider>
        );
    }
}

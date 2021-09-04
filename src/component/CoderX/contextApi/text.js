import React, { Component, useState } from 'react';
import NumberContext from './contexts/NumberContext';
import NumberProvider from './contexts/NumberProvider';
import Counter from './component/Counter';

class Text extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <NumberProvider>
                <div className="App">
                    <NumberContext.Consumer>
                        {({ number, updateNumber }) => (
                            <div>
                                <h2>{number}</h2>
                                <button onClick={updateNumber}>Update Number</button>
                            </div>
                        )}
                    </NumberContext.Consumer>

                    <Counter>{({ count }) => <h1>{count}</h1>}</Counter>
                </div>
            </NumberProvider>
        )
    }
}
export default Text;
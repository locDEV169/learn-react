import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import '../css/header.css';

class Counter extends Component {
    constructor(props) {
        super(props)
        console.log('1')

        this.state = {count: 0}
        this.updateCounter = this.updateCounter.bind(this);
        console.log(constructor)
        
    }
    componentDidMount(){
        this.counterInterval = setInterval(this.updateCounter, 1000)
        console.log('3 componentDidMount')

    }
    updateCounter(){
        console.log('update')
        this.setState({
            count: this.state.count + 1
        })
    }
    componentDidUpdate(prevProps,prevState){
        console.log(
            `componentDidUpdate: count from ${prevState.count} to ${this.state.count} ` 
        )
        if(this.state.count === 5){
            ReactDOM.unmountComponentAtNode(document.querySelector("#container"));
            return(
                <h1>Time out</h1>
            )
        }
    }

    componenWiltUnMount(){
        console.log('4 componenWiltUnMount')
        clearInterval(this.counterInterval)
    }
    render(){
        console.log(`render: count = ${this.state.count}`);

        return (

            <div style={{fontSize: `2em`}}>
                <p>H1</p>
                {this.state.count}
            </div>
        );
    }
}


export default Counter
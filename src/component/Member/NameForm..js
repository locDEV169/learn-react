import React, {Component} from 'react'
import ReactDOM from 'react-dom';

class NameForm extends Component{
    constructor(props){
        super(props)
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        //event.targer sẽ lấy ra dữ liệu của thẻ input
        //event.target.value lấy ra giá trị của state.value truyền vào giá trị của thẻ div or input
        this.setState({value: event.target.value} ) //set State sẽ lấy ra dữ liệu từ thẻ input or div
    }
    handleSubmit(event){
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );

    }
}
export default NameForm
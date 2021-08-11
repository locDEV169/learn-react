import React, {Component} from 'react'
import ReactDOM from 'react-dom';

class FlavorForm extends Component{
    constructor(props){
        super(props)
        this.state = {value: 'coconut'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        //event.targer sẽ lấy ra dữ liệu của thẻ input
        //event.target.value lấy ra giá trị của state.value truyền vào giá trị của thẻ div or input
        this.setState({value: event.target.value} ) //set State sẽ lấy ra dữ liệu từ thẻ input or div
    }
    handleSubmit(event){
        //Submit xong hiển thị alert
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    render(){

        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                Pick your favorite flavor:
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="none">None</option>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
export default FlavorForm
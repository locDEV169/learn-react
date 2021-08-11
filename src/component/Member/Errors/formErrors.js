import React, {Component} from 'react'
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';

const pStyle = {
    color:'red'
}

class FormErrors extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let formErrors = this.props.formErrors
        //làm theo dạng dữ liệu là Object
        // cách lấy giá trị 1 chiều 
        if(Object.keys(formErrors).length > 0 ) {
            return Object.keys(formErrors).map((key,i) => {
                return (
                    <p key={i} style={pStyle}>{formErrors[key]}</p>
                )
            })
            // return (
            //     <p key={i} style={pStyle}>{formErrors[key]}</p>
            // )
        }
        else{
            return '';
        }
        
    }
}
export default FormErrors
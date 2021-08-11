import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './TodoItem.css';

class TodoItem extends Component{
    constructor(props){
        super();
        this.todoItems = [
            {title: 'abc',isComplete: true},
            {title: 'xyz',isComplete: false},
            {title: 'what ... '}  
        ];
    }
    render(){
        const { item }= this.props;
        let className = 'TodoItem';
        if(item.isComplete){
            className += ' TodoItem-complete';
            // Nếu item.isComplete == true thì sẽ thêm vào className: TodoItem-complete
        }
        return(
            <div className={className}>
                <p>{this.props.item.title}</p>
                {/* // gọi ra props tên item bên trong title */}
            </div>
        );
    }
}
export default TodoItem

import React, {Component} from 'react'
import ReactDOM from 'react-dom';

function NumberList(props){
    const numbers = props.numbers; //gọi biến number truyền có dữ liệu vào là props.number
    const listItems = numbers.map((number) => //quét hàm map duyệt qua cá phần tử number
        //đặt tên key là số number
        // in ra số number*2
        <li key={number.toString()}> 
        {number * 2}
        </li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

class numberlist extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const numbers = [1,2,3,4,5];
        return(
            <div>
                <NumberList numbers={numbers} />
            </div>
        );
    }

}
export default numberlist 
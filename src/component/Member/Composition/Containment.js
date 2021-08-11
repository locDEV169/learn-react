import React, {Component} from 'react'
import ReactDOM from 'react-dom';

function FancyBorder(props) {
    return (
    //thêm vào props.color khi gọi fanctBoder
    
    <div className={'FancyBorder FancyBorder-' + props.color}>
        <p>ở thêm vào props.color khi gọi fancyBoder className={'FancyBorder FancyBorder-' + props.color}</p>
        <p>Câu script có dạng là div className='FancyBorder FancyBorder-' + props.color</p>
        <p>Warning: phải gọi Css trước</p>
        {props.children}
    </div>  
    );
  }
  
  function WelcomeDialog() {
    return (
      <FancyBorder color="blue">
        <p>khi gọi FancyBorder color="blue" có thêm props là color thì sẽ hiển thị thêm border màu xanh</p>
        <h1 className="Dialog-title">
          Welcome
        </h1>
        <p className="Dialog-message">
          Thank you for visiting our spacecraft!
        </p>
      </FancyBorder>
    );
  }
  

class Containment extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <WelcomeDialog />
            </div>
        );
    }
}
export default Containment
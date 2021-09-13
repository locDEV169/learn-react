import logo from './logo.svg';
import './App.css';

// hoac co the goi vao day

import Demo from './Demo';
import Test from './test';
import Header from './component/header'
import reactDom from 'react-dom';
import Home from './component/Home'
import Account from './component/Account/account';
import notFound from './component/notFound';
import Login from './component/Member/Login';
import Clock from './component/clock'
//import router-dom
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
// import react start
import StarRatings from 'react-star-ratings';

import Comment from './Comment';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Toggle from './component/toggle';
import TodoItem from './component/CoderX/TodoItem';
import TrafficLight from './component/CoderX/TrafficLight';
import LoginControl from './component/Member/LoginControl';
import Page from './component/Member/page';
import Numberlist from './component/Member/numberList';
import NameForm from './component/Member/NameForm.';
import EssayForm from './component/Member/EssayForm';
import FlavorForm from './component/Member/FlavorForm';
import FileInput from './component/Member/FileInput';
import Reservation from './component/Member/Reservation';
import Containment from './component/Member/Composition/Containment';
import Example2 from './component/Member/Composition/Example2';
import SignUpDiaLog from './component/Member/Composition/SignUpDialog';
import PersonList from './component/Member/Axios/PersonList';
import Rate from './component/Rate';
import PopUpBox from './component/PopUp/PopUpBox';
import AppPopUp from './component/PopUp/AppPopUp';
import { Component } from 'react';
import Text from './component/CoderX/contextApi/text';

const user = {
  firstName: 'Loc',
  lastName: 'Nguyen'

}
function Welcome(prop) {
  // return <h1>Hello, {prop.name}</h1>
  return (
    <div>
      {prop.name}
      <br></br>
      firstName: {user.firstName}
      <br></br>
      LastName: {user.lastName}
    </div>
  );
}
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
};

const element = (
  <h1>
    hello, {formatName(user)}
  </h1>
);

class App extends Component {
  constructor(props) {
    super(props)
    this.todoItems = [
      { title: 'abc', isComplete: true },
      { title: 'xyz', isComplete: false },
      { title: 'what ... ' }
    ];
    // this.setState({
    //   rating: 0
    // })
    // this.changeRating = this.changeRating.bind(this)
  }
  // changeRating( newRating, name ) {
  //   this.setState({
  //     rating: newRating
  //   });
  // }

  render() {

    return (
      <div>
        <div>
          <h2>Write from App.js </h2>
        </div>
        <Header />
        <div className='component_Children'>
          {this.props.children}
          {/* gọi tới các prop con từ component con */}
        </div>
        {/* gọi tới các prop con từ component con  */}
        <Welcome name="hello " />
        <p>From App:</p>

        <Clock />
        <Toggle />
        <div className="TodoItem">
          To do Item
          {/* <TodoItem title="abc"/>
          <TodoItem title="xyz"/> */}
          {/* // xét trường hợp độ dài của array todoItems > 0 thì duyệt map ko thì hiện thị Nothing */}
          {
            this.todoItems.length > 0 && this.todoItems.map((item, index) => (
              <TodoItem key={index} item={item} />
            ))
          }
          {
            this.todoItems.length === 0 && 'Nothing here'
          }
        </div>
        <div>
          <p> TrafficLight </p>
          <TrafficLight />
        </div>
        <p>------------------------------------</p>
        <div className="div-login">
          <div className="login">
            <h3>Login </h3>
            <Login />
          </div>
          <div className="loginControl">
            <h3>Login Control</h3>
            <LoginControl />
          </div>

        </div>
        <div className="page">
          <h3>Page hide/ show</h3>
          <Page />
        </div>
        <div className="numberlist">
          <h3>Number List</h3>
          <Numberlist />
        </div>
        <div className="form">
          <h3>Test Form Name</h3>
          <NameForm />

        </div>
        <div className="form">
          <h3>Test Form TestArea</h3>
          <EssayForm />
        </div>
        <div className="form">
          <h3>Test Form select</h3>
          <FlavorForm />
        </div>
        <div className="form">
          <h3>File Input upload</h3>
          <FileInput />
        </div>
        <div className="form">
          <h3>Submit nhiều value</h3>
          <Reservation />
        </div>
        <p>------------------------------------</p>
        <div className="containment">
          <h3>Ví Dụ 1 của Composition</h3>
          <Containment />
        </div>
        <div className="containment">
          <h3>Ví Dụ 2 của Composition</h3>
          <Example2 />
        </div>
        <div className="containment">
          <h3>Ví Dụ 3 của Composition</h3>
          <SignUpDiaLog />
        </div>
        <p>------------------------------------</p>
        <div className="Axios">
          <h3>Ví Dụ of Axios</h3>
          <PersonList />
        </div>
        <div>
          <p>------------------------------------</p>
          <h2>Rate Start</h2>
          {/* <Rate /> */}
          {/* <StarRatings
              rating={2.403}
              starRatedColor="yellow"
              starHoverColor="red"
              numberOfStars={10}
              starDimension="40px"
              starSpacing="15px"
              /> */}
          {/* <StarRatings
              rating={this.state.rating}
              starRatedColor="blue"
              changeRating={this.changeRating}
              numberOfStars={6}
              name='rating'
              /> */}
          <Rate />
        </div>
        <p>------------------------------------</p>
        <h3>npm install popup</h3>
        <p>npm install reactjs-popup --save</p>
        <p style={{ color: "red" }}>PopUp in react là gì</p>
        <p></p>
        <PopUpBox />
        <p>------------------------------------</p>
        <div>
          <AppPopUp>
            <h3>My Popup Test</h3>
          </AppPopUp>
        </div>
        <p>------------------------------------</p>
        <div>
          <h2 style={{ color: "red" }}>Context API</h2>
          <Text />
        </div>
        <p>------------------------------------</p>
        
        <p>React Hook</p>
        <Link to={"/reactHook"}>
           learn React Hook
        </Link>

        <p>------------------------------------</p>
        <h1>Content For learn</h1>
        
        {this.props.children}

        <p>------------------------------------</p>
      </div>
    )
  }

}
export default withRouter(App)
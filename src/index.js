import React,{Component} from 'react';
import ReactDOM from 'react-dom';
// Tuong tu js, dau tien pai goi thu vien reactjs vao 

//cai nay la css, thich thi goi vao 
import App from './App'; //chua all ung dung cua du an, hay goi la toan bo html
// add trang js vào, add các thư viện nhỏ vào
import Demo from './Demo'
import Test from './test'
import Comment from './Comment'
import reportWebVitals from './reportWebVitals';
//import router-dom
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Home from './component/Home'
import Account from './component/Account/account';
import notFound from './component/notFound';
import Login from './component/Member/Login';
import Clock from './component/clock';
import Counter from './component/counter'
import ReactHook  from './component/ReactHook/index';
function formatName (user){
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName : 'Loc',
  lastName : 'Nguyen'
  
}

const element = (
  <h1>
    hello,{formatName(user)}
  </h1>
);



ReactDOM.render(

  // <React.StrictMode> 
  // {/* //goi thag app chua html vao day de hien thi ra trang web  */}
  // </React.StrictMode>,
  
  <div>
    <Router>
      <App>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/account' component={Account} />
          <Route path='/login' component={Login} />
          <Route path='/counter' component={Counter}/>
          <Route component={ReactHook}/>
          <Route component={notFound}/>
          
        </Switch>
      </App>
    </Router>
    <p>From Index:</p>
    <Clock />
    
  </div>,
  document.getElementById('root'),
  document.querySelector('#container')

);



reportWebVitals();

// - node: bỏ core của dự án, k đụng vào 
// - public: chứa file html cứng và css 
// - src: chứa các component (co nghia la từng đoạn html nhỏ), chia ra nhỏ để dễ code va quản lý 
//   vdu e co 1 trang html thi gio e chia ra tung doan nho va goi vao.
// dau tien no chay file index.js

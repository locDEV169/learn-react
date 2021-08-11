import React, {Component} from 'react'
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';
import FormErrors from './Errors/formErrors';

const pStyle = {
    color: 'red'
}

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }
  
  function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
  }
  
  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }
  
function LoginButton(props){
    return(
        <button onclick={props.onclick}>
            Login
        </button>
    );
}
function LogoutButton(props){
    return(
        <button onclick={props.onclick}>
            Logout
        </button>
    );
}

class Login extends Component{
    
    constructor(props){
        super(props);
        // this.handleLoginclick = this.handleLoginclick.blind(this);
        // this.handleLogoutclick = this.handleLogoutclick.blind(this);
        // this.onClick = this.handleClick.bind(this);
        this.handleClick = this.handleClick.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
        this.handlePass = this.handlePass.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInput = this.handleInput.bind(this)
        this.state = {
            isLoggedIn: false,
            email : '',
            password: '',
            emailError : '',
            passError: '',
            formErrors:{},
        };
        
    }
    handleClick(){
        this.setState(state =>({ // set theo đúng định dạng state trên contructor
            isLoggedIn:  !state.isLoggedIn
            
        }));
    }

    handleLoginclick(){
        this.setState({isLoggedIn: true});
    }

    handleLogoutclick(){
        this.setState({isLoggedIn: false});
    }
    handleEmail(e){
        this.setState({
            email: e.target.value
        });
    }
    handlePass(e){
        this.setState({
            password: e.target.value
        });
    }
    handleSubmit(e){
        e.preventDefault();
        
        let flag = true;
        let email = this.state.email;
        let pass = this.state.password;
        let errorSubmit = this.state.formErrors;

        if(!email){
            // this.setState({
            //     emailError: "Vui Long nhap Email"
            // })
            flag = false;
            errorSubmit.email = "Vui Long nhap Email"
        }
        if(!pass){
            // this.setState({
            //     passError: "Vui Long Nhap Pass"
            // })
            flag = false
            errorSubmit.pass = "Vui Long Nhap Pass"
        }
        if(!flag){
            this.setState({
                formErrors: errorSubmit
            });
        }
        // alert('email: ' + this.state.email + ' pass: ' + this.state.pass);
    }

    handleInput(e){
        const nameInput = e.target.name;
        const value = e.target.value;

        this.setState({
            [nameInput] : value
        })
    }


    renderError(){
        let formErrors = this.state.formErrors
        //làm theo dạng dữ liệu là Object
        if(Object.keys(formErrors).length > 0 ) {
            return Object.keys(formErrors).map((key,i) => {
                return (
                    <p key={i}style={pStyle}>{formErrors[key]}</p>
                )
            })
        }
        else{
            return '';
        }
        //làm theo dạng dữ liệu là Array
        // if(this.state.formErrors instanceof Array){
        //    return(
        //             <p style={pStyle} key={i}>{item}</p>
        //         )
        // }
       
    }



    render(){
        const isLoggedIn = this.state.isLoggedIn;
        
        let button;
        // if(isLoggedIn){
        //     button = <LogoutButton onclick = {this.handleLogoutclick} />
        // }else{
        //     button = <LoginButton onclick = {this.handleLoginclick} />
        // }
        button = isLoggedIn ? <LogoutButton /> : <LoginButton />

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                <h2>This is Login page</h2>
                {/* {button} */}
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? "on" : "off"}
                </button>,
                <div>
                    THe User click
                    <button onClick={this.handleClick}>
                        {button = isLoggedIn ? <LogoutButton /> : <LoginButton />}
                    </button>,
                </div>
                {/* tách riêng từ handle */}
                {/* <form onSubmit={this.handleSubmit} >
                    <input type="text" placeholder="Email" name="email" onChange={this.handleEmail} value={this.state.email} />
                    <p>{this.state.emailError}</p>
                    <input type="password" name="password" onChange={this.handlePass} value={this.state.password} />
                    <p>{this.state.passError}</p>
                    <span>
                        <input type="checkbox" className="checkbox" />
                        Keep me signed me
                    </span>
                    <button type="Submit" className="btn btn-default">Login</button>
                </form> */}
                {/* gọi chung hàm handleInput */}
                
                <form onSubmit={this.handleSubmit} >
                    <input type="text" placeholder="Email" name="email" onChange={this.handleInput} value={this.state.email} />
                    <br></br>
                    <input type="password" name="password" onChange={this.handleInput} value={this.state.password} />
                    <span>
                        <input type="checkbox" className="checkbox" />
                        Keep me signed me
                    </span>
                    <button type="Submit" className="btn btn-default">Login</button>
                </form>
                {/* <div className='formErrors' >
                    {this.renderError()}
                </div> */}
                <FormErrors formErrors={this.state.formErrors}/>
            </div>
            
        );
    }
    
}

export default Login

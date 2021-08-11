
import React,{Component} from 'react';

class Comment extends Component{
    render(){
        console.log(this.props.data)
        let data = this.props.data
        return (
            <div className = "Comment">
                <div className = "UserInfo">
                aaaaa
                {/* <img className="Avatar"
                    src={prop.author.avatarURL}
                    alt={prop.author.name}
                /> */}
                    {data.firstName}
                <div className="UserInfo-name">
                    {/* {prop.author.name} */}
                    {data.lastName.add}
                </div>
                </div>
            </div>
            
        )
    }
}
export default Comment
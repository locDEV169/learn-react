import React,{Component} from 'react';
import axios from 'axios';

class PersonList extends Component{
    constructor(props){
        super(props)
        this.state = {
            persons: [],
            name: '',
            id: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeID = this.handleChangeID.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    //GET Requests
    //lấy dữ liệu của API truyền lại cho page
    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        //.then để lấy dữ liệu ra
        .then(res => { //res = Requests
            const persons = res.data;
            this.setState({persons});
            // console.log(persons)
        })
        //.catch để bắt lỗi ra console
        .catch(error => console.log(error)); // bắt lỗi cho get
    }
    // POST Requests
    handleChange(e){
        this.setState({
                name: e.target.value
            })
    }
    handleChangeID(e){
        this.setState({
            id: e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        const user={
            name: this.state.name
        };
        const id={
            id: this.state.id
        };
        axios.post(`https://jsonplaceholder.typicode.com/users`,user)
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
        // axios.delete(`https://jsonplaceholder.typicode.com/users`,+ this.state.id)
        // .then(res => {
        //     console.log(res);
        //     console.log(res.data);
        // })
        .catch(error => console.log(error)); // bắt lỗi cho get
        alert("successfull add " + this.state.name + this.state.id )
    }

    render(){
        return(
            //get
            // <ul>
            //     <h2>GET Requests</h2>
            //     {this.state.persons.map(persons => 
            //         <li>{persons.id}  {persons.name} <li>email: {persons.email}</li></li>,   
            //     )}
            // </ul>
            //post
            <div>
                <h2>POST Requests</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Person Name:
                        <input type="text" name="name" onChange={this.handleChange} />
                        <input type="number" name="id" onChange={this.handleChangeID} />
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div>
            // delete
            // <div>
            //     <h2>DELETE Requests</h2>
            //     <form onSubmit={this.handleSubmit}>
            //         <label>
            //             Person ID:
            //             <input type="text" name="name" onChange={this.handleChange} />
            //         </label>
            //         <button type="submit">delete</button>
            //     </form>
            // </div>
        )
    }
}
export default PersonList
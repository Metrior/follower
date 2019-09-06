import React, {Component} from 'react';
import "./List.css"
import db from "../../db";
import FollowButton from "../FollowButton"
import firebase from "../../firebase"

class List extends Component {
    state = {
        currentUser: this.props.currentUser,
        users: [],
    };

    componentDidUpdate(prevState){
        if(prevState.currentUser !== this.props.currentUser) {
            this.setState({currentUser: this.props.currentUser})
        }
    }

    componentDidMount(){
        let currentUser = localStorage.getItem("currentUser");
        this.setState({currentUser: currentUser});
        this.addUserListener()
    }

    addUserListener = () => {
        let users = [];
        firebase.database().ref("users").on("value", snap => {
            users.push(snap.val());
            this.setState({
                users: users[0],
            })
        });
    };

    getList = (users) => {
        return Object.keys(users).map((key)=>(
            <div key={key} className="user_block">
                {console.log(users)}
                {users[key].name !== this.props.currentUser ?
                    <div>
                        {users[key].name}
                        {this.getFollowers(users[key])}
                        <FollowButton user={users[key]} currentUser={this.props.currentUser}/>
                    </div> : null
                }
            </div>
        ))
    };

    getFollowers = user => {
        let followers = 0;
        let users = this.state.users;
        Object.keys(users).map((key)=>{
            console.log(users[key].following)
            if (users[key].following.includes("mxqday7ExASbb1icKc3jjUU8wuE2")){
                followers+=1
            }
        });
        return (<div>{followers}</div>)
    };

    render() {
        return (
            <div>
                {this.getList(this.state.users)}
            </div>
        );
    }
}

export default List;
import React, {Component} from 'react';
import firebase from "../../firebase";
import {Link} from "react-router-dom"

class Header extends Component {
    state = {
        user: this.props.currentUser,
    };

    componentDidUpdate(prevProps){
        // if (this.props.currentUser !== prevProps.user) {
        //     this.setState({ user: this.props.currentUser });
        // }
    }

    handleSighout = () => {
        firebase
            .auth()
            .signOut()
            .then(()=>{console.log("signed out!")})
    };

    getUserFromLocal = () => {
        let user;

        if (localStorage.getItem("currentUser") === null) {
            user=[]
        } else {
            user = JSON.parse(localStorage.getItem("currentUser"))
        }

        return user
    };

    addUserToLocal = e => {
      e.preventDefault();
      let currentUser = e.target.value;
      localStorage.setItem("currentUser", JSON.stringify(currentUser))
    };

    deleteUserFromLocal = e => {
        e.preventDefault();
        localStorage.removeItem("currentUser")
    };

    render() {
        return (
            <div>
                {this.props.currentUser ?
                    <div>
                        welcome {this.props.currentUser}
                        <button onClick={this.handleSighout}>Log out</button>
                    </div>
                    :
                    <div>
                        {<div>Must be signed in</div>}
                        <Link to="/login">Login</Link>
                    </div>
                }
            </div>
        );
    }
}

export default Header;
import React, {Component} from 'react';
import {connect} from "react-redux"
import {setUser} from "../../redux/actions"

class Header extends Component {
    state = {
        currentUser: this.props.currentUser,
    };

    handleSighOut = () => {
        localStorage.removeItem("currentUser");
        this.props.setUser(null)
    };

    handleSignIn = () => {
        const firstUser = {
            "id": 1,
            "name": "Dan",
            "group_id": 1,
            "followers":[]
        };
        localStorage.setItem("currentUser", JSON.stringify(firstUser));
        this.props.setUser(firstUser)
    };

    render() {
        return (
            <div>
                {this.props.currentUser ?
                    <div>
                        welcome {this.props.currentUser.name}
                        <button onClick={this.handleSighOut}>Log out</button>
                    </div>
                    :
                    <div>
                        {<div>Must be signed in</div>}
                        <button onClick={this.handleSignIn}>Log in as user1</button>
                    </div>
                }
            </div>
        );
    }
}

export default connect(null, {setUser})(Header);
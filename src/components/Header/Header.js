import React, {Component} from 'react';

class Header extends Component {
    state = {
        currentUser: this.props.currentUser,
    };

    componentDidUpdate(prevProps){
        if (this.props.currentUser !== prevProps.currentUser) {
            this.setState({ currentUser: this.props.currentUser });
        }
    }

    handleSighOut = () => {
        localStorage.removeItem("currentUser");
        this.setState({currentUser: null})
    };

    handleSignIn = () => {
        localStorage.setItem("currentUser", JSON.stringify({
            "id": 1,
            "name": "Dan",
            "group_id": 1,
            "followers":[]
        }));
        this.setState({currentUser: localStorage.getItem("currentUser")})
    };

    render() {
        return (
            <div>
                {this.state.currentUser ?
                    <div>
                        welcome {JSON.parse(this.state.currentUser).name}
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

export default Header;